const mysql = require('mysql2');

const connection = mysql.createPool({
	host: 'database-2.cdctfmdnq0di.ap-south-1.rds.amazonaws.com',
	user: 'admin',
	password: '*G3c1(u[RSaX2D2T',
	database: 'goec',
	waitForConnections: true,
	connectionLimit: 150,
	queueLimit: 50,
});



module.exports = connection;
