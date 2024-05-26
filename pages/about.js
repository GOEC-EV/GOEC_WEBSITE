import React from 'react';
import Head from 'next/head';
import AboutPages from '@/components/About/AboutPages';

export default function about() {
	return (
		<div>
			<Head>
				<title>Get to Know more about GO EC | About us</title>
				<meta name='description' content='Get to Know more about GO EC | About us' />
			</Head>
			<AboutPages />
		</div>
	);
}
