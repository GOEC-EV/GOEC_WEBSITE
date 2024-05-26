import jwt from 'jsonwebtoken';
import db from './db';
const secretKey = 'joihksdaldkfjosdifosieoere';
export default async function handler(req, res) {
	const { method } = req;
	const { token } = req.headers;
	jwt.verify(token, secretKey, (err, token) => {
		if (err) res.status(401).json('Unauthenticated');
	});

	if (method == 'POST') {
		//Your body is here
		const { name, pin } = JSON.parse(req.body);

		db.getConnection(async (err, connection) => {
			if (err) {
				connection.release();
				res.status(419).json({ 'Database connection error': err });
			}

			//Your Api logic from here

			try {
			} catch (err) {
				connection.release();
				res.status(419).json({ Error: 'Data not provided error' });
			}
		});
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${method} Not Allowed`);
	}
}
