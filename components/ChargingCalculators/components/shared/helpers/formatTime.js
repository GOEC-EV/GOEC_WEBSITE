export function formatTime(decimalTime) {
	const hours = Math.floor(decimalTime);
	const minutes = Math.round((decimalTime - hours) * 60);

	const formattedTime = `${hours} hrs ${minutes} mins`;

	return formattedTime;
}
