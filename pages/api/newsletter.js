import { ApiClient, ContactsApi, CreateContact } from 'sib-api-v3-sdk';

// Create client instance
let apiClient = ApiClient.instance;

// Set api key
let apiKey = apiClient.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_KEY;

// Create contacts api instance
let apiInstance = new ContactsApi();

export default async function handler(req, res) {
	const { method } = req;

	if (method == 'POST') {
		const { email } = req.body;

		// create new contact
		let createContact = new CreateContact();
		createContact.email = email;
		createContact.listIds = [1];

		try {
			// create new contact by calling api

			const apiRes = await apiInstance.createContact(createContact);
			return res.status(200).json({ success: true });
		} catch (e) {
			// Return error if creating acontact failed

			return res
				.status(e.status)
				.json({ success: false, message: JSON.parse(e.response?.text ?? '').message ?? 'Cannot create contact' });
		}
	} else {
		res.setHeader('Allow', ['POST']);
		res.status(405).end(`Method ${method} Not Allowed`);
	}
}
