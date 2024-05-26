import { google } from 'googleapis';
import jwt from 'jsonwebtoken';

const youtube = google.youtube({
	version: 'v3',
	auth: process.env.YOUTUBE_API_KEY,
});

export default async function handler(req, res) {
	const { method } = req;
	const { token } = req.headers;
	if (method != 'GET') res.status(405).end(`Method ${method} Not Allowed`);
	jwt.verify(token, process.env.SECRET_KEY, (err, token) => {
		if (err) res.status(401).json('Unauthenticated');
	});

	//API Starts from here
	const channelId = process.env.YOUTUBE_CHANNEL;
	try {
		// Fetch videos
		const videoResults = await youtube.search.list({
			channelId,
			type: 'video',
			part: 'snippet',
			maxResults: 10, // adjust the number of results as per your requirement
		});

		// Fetch shorts
		const shortsResults = await youtube.search.list({
			channelId,
			type: 'video',
			part: 'snippet',
			maxResults: 10, // adjust the number of results as per your requirement
			q: '',
			videoDefinition: 'any',
			videoDuration: 'short',
		});

		const videos = videoResults.data.items;
		const shorts = shortsResults.data.items;

		// Combine both videos and shorts and send the response
		res.status(200).json({
			videos,
			shorts,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
}

//test the webhook again
