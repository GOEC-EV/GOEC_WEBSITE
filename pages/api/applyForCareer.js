import { google } from 'googleapis';

export default async function handler(req, res) {
	if (req.method === 'POST') {
		try {
			// Setup Google Sheets API client
			const auth = new google.auth.GoogleAuth({
				credentials: {
					client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
					private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
				},
				scopes: ['https://www.googleapis.com/auth/spreadsheets'],
			});

			const sheets = google.sheets({ version: 'v4', auth });
			const spreadsheetId = process.env.SPREADSHEET_ID_CAREER;

			// Prepare data to append
			const { name, email, phone, city, state, resume } = req.body;
			const values = [
				[name, email, phone, city, state, resume, new Date().toDateString()],
			];

			// Append data to the sheet
			await sheets.spreadsheets.values.append({
				spreadsheetId,
				range: 'A1:D1', // Make sure this matches your Google Sheet's tab name
				valueInputOption: 'USER_ENTERED',
				requestBody: {
					values,
				}
			});

			res.status(200).json({ status: 'true', message: 'Data saved' });
		} catch (error) {
			console.error('Error saving data to Google Sheet:', error);
			res.status(500).json({ status: 'error', message: 'Failed to save data' });
		}
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${req.method} Not Allowed`);
	}
}
