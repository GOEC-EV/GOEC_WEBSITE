import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from './db';
export default async function handler(req, res) {
	const { method } = req;
	if (method == 'POST') {
		db.getConnection(async (err, connection) => {
			if (err) {
				res.status(419).json({ 'Database connection error': err });
			}
			try {
				const { email, password } = JSON.parse(req.body);
				if (email == undefined || password == undefined) res.status(420).json('Email or password not provided');
				var query = await connection
					.promise()
					.query(`SELECT id,email,password FROM users where email = "${email}"`);
				connection.release();
				var queryResponse = query[0];

				if (queryResponse.length != 0) {
					//if user is available then permit to login and send api key as token
					const comp = await bcrypt.compare(password, queryResponse[0]['password']);

					if (!comp) res.status(401).json("Password didn't matched");
					jwt.sign(
						{
							id: queryResponse[0]['id'],
							email: queryResponse[0]['email'],
							password: queryResponse[0]['password'],
						},
						process.env.SECRET_KEY,
						{ expiresIn: '3d' },
						(err, token) => {
							if (err) {
								res.status(422).json({ 'Token error': err });
							}
							res.status(200).json({ token: token });
						}
					);
				} else {
					res.status(419).json('No User found with this');
				}
			} catch (err) {
				connection.release();
				res.status(419).json({ 'Query error': err });
			}
		});
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${method} Not Allowed`);
	}
}
