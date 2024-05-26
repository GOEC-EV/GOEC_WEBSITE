/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	output: 'standalone',
};

module.exports = {
	async redirects() {
		return [
			{
				source: '/blog/ev-charging-stations-in-kerala',
				destination: 'https://goecworld.com/ev-charging-stations-in-kerala',
				permanent: true,
			},

			// Add more redirections as needed
		];
	},
};
