import formidable from 'formidable';
import jwt from 'jsonwebtoken';
import db from '../db';

export default async function handler(req, res) {
	const { method } = req;
	const { token } = req.headers;
	jwt.verify(token, process.env.SECRET_KEY, (err, token) => {
		if (err) res.status(401).json('Unauthenticated');
	});

	if (method == 'POST') {
		//Your var body is here
		const form = new formidable.IncomingForm();
		const { s_id, type, energy, price } = req.body;

		db.getConnection(async (err, connection) => {
			if (err) {
				res.status(419).json({ 'Database connection error': err });
			}

			//Your Api logic from here
			try {
				var queryResponse = await connection
					.promise()
					.query(`INSERT INTO connectors(s_id,type,energy,price) values (${s_id},"${type}",${energy},${price})`);
				connection.release();
				res.status(200).json('Connector added Successfully');
			} catch (err) {
				connection.release();
				res.status(419).json({ Error: err });
			}
		});
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${method} Not Allowed`);
	}
}
