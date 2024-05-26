export default function getDate(date) {
	const parsed = new Date(date);
	const day = parsed.toLocaleDateString('en-US', { day: '2-digit' });
	const month = parsed.toLocaleDateString('en-US', { month: 'short' });
	const year = parsed.getFullYear();
	return `${day} ${month} ${year}`;
}
