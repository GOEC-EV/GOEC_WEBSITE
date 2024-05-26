import SolutionsPage from '@/components/Solutions/SolutionsPage';
import Head from 'next/head';
import React from 'react';

export default function solutions() {
	return (
		<>
			<Head>
				<title>GO EC | Customized ev chargers for diverse Charging Needs</title>
				<meta
					name='description'
					content="Discover GO EC's customized EV chargers for all your charging needs. Our solutions include home, fleet, public, and apartment charging options and many more"
				/>
			</Head>
			<SolutionsPage />
		</>
	);
}
