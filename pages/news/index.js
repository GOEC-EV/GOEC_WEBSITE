import React from 'react';
import Head from 'next/head';
import NewsPage from '@/components/News/NewsPage';

export default function news() {
	return (
		<div>
			<Head>
				<title>GO EC News | Keep Up with the Latest EV Trends</title>
				<meta
					name='description'
					content='Stay up-to-date on the latest trends, market trends, and insights in the electric vehicle industry with GO EC News. subscribe to GO EC News Today'
				/>
			</Head>
			<NewsPage />
		</div>
	);
}
