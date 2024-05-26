import React from 'react';
import Head from 'next/head';
import BlogsPage from '@/components/Blog/BlogsPage';

export default function Blogs() {
	return (
		<div>
			<Head>
				<title>Charging Forward: Insights & Tips on EV Charging | GO EC Blog</title>
				<meta
					name='description'
					content='Our expert insights and practical tips on EV charging will help you stay ahead of the curve in the rapidly evolving world of sustainable energy.'
				/>
			</Head>
			<BlogsPage />
		</div>
	);
}
