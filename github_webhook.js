// const { exec } = require('child_process');
// var http = require('http');
// Replace the script path and secret code with your own values
// const scriptPath = './script.sh';
// const secretCode = 'welovetochargeourev';

// // Verify the secret code
// function verifySecretCode(code) {
//   return code === secretCode;
// }

// // Run the script if the secret code is correct
// function runScript() {
//   exec(scriptPath + ' '+ secretCode, (error, stdout, stderr) => {
//     console.log(`stdout: running script`);
//     if (error) {
//       console.error(`exec error: ${error}`);
//       return;
//     }

//     console.log(`stdout: ${stdout}`);
//     console.error(`stderr: ${stderr}`);
//   });
// }

// // HTTP endpoint to receive webhook events
// http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     let body = '';
//     req.on('data', chunk => {
//       body += chunk.toString();
//     });
//     req.on('end', () => {
//       const event = JSON.parse(body);
//     //   const secretCode = event.headers['X-Secret-Code'];
//     console.log(`stdout body: ${event.body}`);
//     console.log(`stdout req: ${req}`);

//       if (!verifySecretCode(secretCode)) {
//         res.write('Invalid secret code');
//         return;
//       }
//       res.write('hello\n');

//       runScript();
//       res.write('script ran');
//       res.end();
//     });
//   }
// }).listen(8080);

const http = require('http');
const crypto = require('crypto');
const { spawn } = require('child_process');
const SECRET = 'welovegoecevcharger';

const server = http.createServer((req, res) => {
	if (req.method === 'POST' && req.url === '/deploy.sh') {
		let body = [];
		req.on('data', chunk => {
			body.push(chunk);
		});
		req.on('end', () => {
			body = Buffer.concat(body).toString();
			const signature = `sha1=${crypto.createHmac('sha1', SECRET).update(body).digest('hex')}`;
			if (req.headers['x-hub-signature'] === signature) {
				const deploy = spawn('bash', ['./start.sh']);
				deploy.stdout.on('data', data => {
					console.log(data.toString());
				});
				deploy.stderr.on('data', data => {
					console.error(data.toString());
				});
				res.writeHead(200, { 'Content-Type': 'text/plain' });
				res.end('Deployed successfully!');
			} else {
				res.writeHead(401, { 'Content-Type': 'text/plain' });
				res.end('Unauthorized');
			}
		}); //hook
	} else {
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end('Not Found');
	}
});

server.listen(8080, () => {
	console.log('Listening on port 8080');
});
