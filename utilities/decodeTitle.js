export default function decodeTitle(title) {
	const splitted = title.split('_');
	return { id: Number(splitted[0]), title: splitted[1] };
}
