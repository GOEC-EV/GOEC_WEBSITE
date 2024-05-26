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
		let { is_goec, page, page_size, search, vehicle, socket, state } = req.query;
		const offset = (page - 1) * page_size;
		const isNotSearch = search == undefined || search === '';
		const isNotState = state == undefined || state === '';
		const isNotVehicle = vehicle == undefined || vehicle === '';
		const isNotSocket = socket == undefined || socket === '';
		console.log(req.query);
		if (is_goec === undefined || is_goec === '') {
			is_goec = false;
			console.log('not assigned is_goec');
		}
		var query1;
		db.getConnection(async (err, connection) => {
			if (err) {
				res.status(419).json({ 'Database connection error': err });
			}

			//Your Api logic from here
			try {
				var queryResponse,
					data = {};
				if (is_goec == true) {
					console.log('AAAA');
					query1 = `SELECT id,image,name,location_name,state,city,pin,rating FROM chargestations${
						isNotSocket ? `` : ` natural join connectors`
					}${isNotVehicle ? `` : ` natural join vehicles`}${
						!is_goec && isNotState && isNotSocket && isNotVehicle
							? ``
							: ` where${
									isNotSocket ? `` : ` chargestations.id = connectors.s_id and connectors.type = "${socket}"`
							  }${
									isNotVehicle
										? ``
										: `${
												isNotSocket ? `` : ` and`
										  } vehicles.s_id = chargestations.id and vehicles.vehicle_name = "${vehicle}"`
							  }${!is_goec ? `` : `${isNotSocket && isNotVehicle ? `` : ` and`} is_goec = ${is_goec}`}${
									isNotState
										? ``
										: `${isNotSocket && isNotVehicle && !is_goec ? `` : ` and`} state = "${state}"`
							  }`
					}${
						isNotSearch
							? ``
							: `${
									!is_goec && isNotState && isNotVehicle && isNotSocket ? ` where` : ` and`
							  } (MATCH (name) AGAINST ("${search}" IN NATURAL LANGUAGE MODE) or MATCH (location_name) AGAINST ("${search}" IN NATURAL LANGUAGE MODE))`
					} LIMIT ${page_size} OFFSET ${offset}`;
				} else {
					console.log('BBBB');
					query1 = `SELECT id,image,name,location_name,state,city,pin,rating FROM chargestations${
						isNotSocket ? `` : ` natural join connectors`
					}${isNotVehicle ? `` : ` natural join vehicles`}${
						isNotState && isNotSocket && isNotVehicle
							? ``
							: ` where${
									isNotSocket ? `` : ` chargestations.id = connectors.s_id and connectors.type = "${socket}"`
							  }${
									isNotVehicle
										? ``
										: `${
												isNotSocket ? `` : ` and`
										  } vehicles.s_id = chargestations.id and vehicles.vehicle_name = "${vehicle}"`
							  }${isNotState ? `` : `${isNotSocket && isNotVehicle ? `` : ` and`} state = "${state}"`}`
					}${
						isNotSearch
							? ``
							: `${
									isNotState && isNotVehicle && isNotSocket ? ` where` : ` and`
							  } (MATCH (name) AGAINST ("${search}" IN NATURAL LANGUAGE MODE) or MATCH (location_name) AGAINST ("${search}" IN NATURAL LANGUAGE MODE))`
					} LIMIT ${page_size} OFFSET ${offset}`;
				}
				console.log(is_goec);
				queryResponse = await connection.promise().query(`SELECT COUNT(*) as totalItems FROM chargestations`);
				data = queryResponse[0][0];
				data.totalPage = Math.ceil(data['totalItems'] / page_size);

				console.log(query1);
				queryResponse = await connection.promise().query(query1);
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
					queryResponse = await connection
						.promise()
						.query(`SELECT * from amenities where s_id = ${data.data[i]['id']}`);
					data.data[i].amenities = queryResponse[0];
				}

				connection.release();

				res.status(200).json(data);
			} catch (err) {
				// connection.release();
				res.status(419).json({ Error: err });
			}
		});
	} else {
		res.setHeader('Allow', ['GET']);
		res.status(405).end(`Method ${method} Not Allowed`);
	}
}
