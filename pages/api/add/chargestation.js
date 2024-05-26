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
		const { name, location_name, pin, lattitude, longitude, city, state, image, cover_image, is_goec, rating } =
			req.body;
		try {
			db.getConnection(async (err, connection) => {
				if (err) {
					res.status(419).json({ 'Database connection error': err });
				}

				//Your Api logic from here

				var queryResponse = await connection
					.promise()
					.query(
						`INSERT INTO chargestations(name,location_name,pin,lattitude,longitude,city,state,image,cover_image,is_goec,rating)values("${name}","${location_name}","${pin}",${lattitude},${longitude},"${city}","${state}","${image}","${cover_image}",${is_goec},${rating})`
					);
				var new_id = await connection.promise().query(`SELECT LAST_INSERT_ID();`);
				// var subAPI = await callAPi('add/connectors',{
				// 	"s_id": 2,
				// 	"type": "Type 2",
				// 	"energy": 3,
				// 	"price": 17},token)
				console.log(new_id);
				connection.release();
				res.status(200).json({
					id: new_id[0][0]['LAST_INSERT_ID()'],
					message: 'Chargestation added Successfully',
				});
			});
		} catch (err) {
			connection.release();
			res.status(419).json({ Error: err });
		}
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${method} Not Allowed`);
	}
}

// async function callAPi(endpoint,data,token){
// 	const dev = process.env.NODE_ENV !== 'production';

// 	const server = dev ? 'http://localhost:3000/api/' : 'https://goecworld.com/api/';
// 	try{
// 	var response = await fetch(server + endpoint, {
// 		method: 'POST',

// 		headers: {
// 		  'Content-Type': 'application/json',
// 		  'token': token
// 		},
// 		body: JSON.stringify(data),
// 	  })
// 	  console.log(response.status)
// 	  return true
// 	} catch(err){
// 		return false;
// 	}
// }
