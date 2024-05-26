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
		const { search, is_goec, page, page_size } = req.body;
		const offset = (page - 1) * page_size;
		db.getConnection(async (err, connection) => {
			if (err) {
				res.status(419).json({ 'Database connection error': err });
			}

			//Your Api logic from here
			try {
				console.log(is_goec);
				console.log(page);
				console.log(page_size);

				var queryResponse,
					data = {};
				const query1 = `SELECT id,image,name,location_name,pin,rating FROM chargestations where is_goec = ${is_goec} and MATCH (location_name) AGAINST ("${search}" IN NATURAL LANGUAGE MODE) LIMIT ${page_size} OFFSET ${offset}`;
				const query2 = `SELECT id,image,name,location_name,pin,rating FROM chargestations where MATCH (location_name) AGAINST ("${search}" IN NATURAL LANGUAGE MODE) LIMIT ${page_size} OFFSET ${offset}`;

				queryResponse = await connection.promise().query(is_goec ? query1 : query2);
				data.data = queryResponse[0];

				for (let i = 0; i < data.data.length; i++) {
					queryResponse = await connection
						.promise()
						.query(`SELECT vehicle_name from vehicles where s_id = ${data.data[i]['id']}`);
					data.data[i].vehicles = queryResponse[0];
					queryResponse = await connection
						.promise()
						.query(`SELECT * from connectors where s_id = ${data.data[i]['id']}`);
					data.data[i].connectors = queryResponse[0];
				}

				connection.release();

				res.status(200).json(data);
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
