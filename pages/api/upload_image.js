import AWS from 'aws-sdk';
import formidable from 'formidable';
import fs from 'fs';
import sharp from 'sharp';
import jwt from 'jsonwebtoken';

const s3 = new AWS.S3({
	accessKeyId: process.env.AWS_ACCESS_KEY_ID,
	secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
	region: process.env.AWS_REGION,
	s3ForcePathStyle: true,
});

export const config = {
	api: {
		bodyParser: false,
	},
};

export default async function handler(req, res) {
	const { token } = req.headers;
	jwt.verify(token, process.env.SECRET_KEY, (err, token) => {
		if (err) res.status(401).json('Unauthenticated');
	});
	if (req.method === 'POST') {
		const form = new formidable.IncomingForm();

		form.parse(req, async (err, fields, files) => {
			if (err) {
				console.log(err);
				res.status(500).json({ error: 'Error parsing form data' });
			} else {
				// console.log(files)

				console.log(files['cover_image']);
				// res.status(300).json(files['image'])
				const fileContent = await fs.promises.readFile(files.image.filepath);
				const compressedImage = sharp(fileContent).jpeg({ quality: 100 });

				const params = {
					Bucket: process.env.S3_BUCKET,
					Key: files.image.newFilename,
					Body: compressedImage,
					ContentType: files.image.mimetype,
					ACL: 'public-read',
				};
				s3.upload(params, (s3Err, data) => {
					if (s3Err) {
						console.log(s3Err);
						res.status(500).json({ error: s3Err });
					} else {
						const imageUrl = data.Location;
						res.status(200).json({ imageUrl });
					}
				});
			}
		});
	} else {
		res.status(405).json({ error: 'Method not allowed' });
	}
}
