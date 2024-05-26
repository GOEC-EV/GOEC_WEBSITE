import { Pool } from 'pg';
import { completeContactFormSchema } from '@/utilities/validation';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL, // Your database connection string
    ssl: { // Uncomment if your database requires SSL
        rejectUnauthorized: false,
    },
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            if (!completeContactFormSchema.isValidSync(req.body)) {
                return res.status(400).json({ status: 'error', message: 'Invalid data' });
            }

            const data = completeContactFormSchema.validateSync(req.body);

            const client = await pool.connect();

            const name = data.last_name ? `${data.first_name} ${data.last_name}` : data.first_name;

            const queryText = `
                INSERT INTO apply_for_charger (name, email, phone, city, state, pincode, person_type, property_type, have_land, willing_to_invest, more_than_10_lakh, file_url, submitted_at)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, NOW())
            `;

            const queryParams = [
                name, data.email, data.phone, data.city, data.gst, data.pincode, data.personType, data.propertyType, data.haveLand, data.willingToInvest, data.moreThan10Lakh, data.fileUrl
            ];

            const result = await client.query(queryText, queryParams);

            if(result.rowCount === 0) {
                return res.status(400).json({ status: 'error', message: 'Invalid data' });
            }

            client.release(); // Release the client back to the pool

            res.status(200).json({ status: 'success', message: 'submitted successfully' });
        } catch (error) {
            console.error('Error saving data to PostgreSQL database:', error);
            res.status(500).json({ status: 'error', message: 'internel server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
