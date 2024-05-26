import bcrypt from 'bcrypt';
import { json } from 'body-parser';
import jwt from 'jsonwebtoken';
import db from './db';
export default async function handler(req, res) {
	const { method } = req;
	const { token } = req.headers;
	jwt.verify(token, process.env.SECRET_KEY, (err, token) => {
		if (err) res.status(401).json('Unauthenticated');
	});

	if (method == 'POST') {
		const { email, password } = JSON.parse(req.body);
		// res.status(300).json(password);
		// Your API logic here
		if (email == undefined || password == undefined) res.status(420).json('Email or password not provided');

		db.getConnection(async (err, connection) => {
			if (err) {
				res.status(419).json({ 'Database connection error': err });
			}
			try {
				var query = await connection
					.promise()
					.query(`SELECT id,email,password FROM users where email = "${email}"`);
				var queryResponse = query[0];

				if (queryResponse.length == 0) {
					//create new user
					var salt = await bcrypt.genSalt(10);
					const hashedPassword = await bcrypt.hash(password, salt);
					query = await connection
						.promise()
						.query(`INSERT INTO users(email, password) VALUES ('${email}','${hashedPassword}')`);

					connection.release();
					res.status(200).json('user added successfully');
				} else {
					connection.release();
					res.status(419).json('User already exist');
				}
			} catch (err) {
				connection.release();
				res.status(419).json({ 'Query Error': err });
			}
		});
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${method} Not Allowed`);
	}
}
