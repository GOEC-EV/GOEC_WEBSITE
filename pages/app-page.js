import React from 'react';
import Head from 'next/head';
import AppLandingPage from '@/components/AppLandingPage/AppLandingPage';

export default function appPage() {
	return (
		<div>
			<Head>
				<title>GO EC | Charge Your EVs with India&apos;s fast and reliable Charging App</title>
				<meta
					name='description'
					content='GO EC provides fast and reliable charging for your electric vehicles.Download our app today and experience the convenience of charging on-the-go'
				/>
			</Head>
			<AppLandingPage />
		</div>
	);
}
