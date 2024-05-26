import db from './db';
import bcrypt from 'bcrypt';
export default async function handler(req, res) {
	const { method } = req;
	switch (method) {
		case 'GET':
			const [rows, fields] = await db.promise().query('SELECT * FROM users');

			res.status(200).json(rows);
			break;
		case 'POST':
			const { name, email } = req.body;
			const res = await db.promise().query('');
			res.status(201).json(email);
			break;
		case 'PUT':
			const { id, newName } = req.body;
			res.status(200).json(updatedUser);
			break;
		case 'DELETE':
			const { userId } = req.body;
			res.status(204).json(deletedUser);
			break;
		default:
			res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
			res.status(405).end(`Method ${method} Not Allowed`);
	}
}
