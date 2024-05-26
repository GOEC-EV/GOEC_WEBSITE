import React from 'react';
import Head from 'next/head';
import ThanksPage from '@/components/Thanks/ThanksPage';

export default function Thanks() {
	return (
		<div>
			<Head>
				<title>GOEC - Thank you!</title>
				<meta name='description' content='next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<ThanksPage />
		</div>
	);
}
