export default function encodeTitle(title) {
	return title
		?.toLowerCase()
		?.replace(/[ -]+/g, '-')
		?.replace(/[^a-z0-9-]+/g, '');
}
