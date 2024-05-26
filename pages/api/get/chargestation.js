import formidable from 'formidable';
import jwt from 'jsonwebtoken';
import db from '../db';

export default async function handler(req, res) {
	const { method } = req;
	const { token } = req.headers;
	jwt.verify(token, process.env.SECRET_KEY, (err, token) => {
		if (err) res.status(401).json('Unauthenticated');
	});

	if (method == 'GET') {
		//Your var body is here
		const form = new formidable.IncomingForm();
		const { id } = req.query;

		db.getConnection(async (err, connection) => {
			if (err) {
				res.status(419).json({ 'Database connection error': err });
			}

			//Your Api logic from here
			try {
				var queryResponse = await connection
					.promise()
					.query(`SELECT id,name,location_name,pin,rating,image,cover_image FROM chargestations where id = ${id}`);
				var data = queryResponse[0][0];
				queryResponse = await connection.promise().query(`SELECT vehicle_name FROM vehicles WHERE s_id = ${id}`);
				data.vehicles = queryResponse[0];
				queryResponse = await connection.promise().query(`SELECT aminity_name FROM amenities WHERE s_id = ${id}`);
				data.amenities = queryResponse[0];
				queryResponse = await connection
					.promise()
					.query(`SELECT type,energy,price FROM connectors WHERE s_id = ${id}`);
				data.connectors = queryResponse[0];

				connection.release();

				data.vehicles = res.status(200).json(data);
			} catch (err) {
				connection.release();
				res.status(419).json({ Error: err });
			}
		});
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).end(`Method ${method} Not Allowed`);
	}
}
