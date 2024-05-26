import FAQPages from '@/components/FAQ/FAQPages';
import Head from 'next/head';
import React from 'react';

export default function faqs() {
	return (
		<div>
			<Head>
				<title>Frequently Asked Questions (FAQs) | GO EC </title>
				<meta
					name='description'
					content="Find answers to all your burning questions about EV charging stations with GO EC's FAQs page!"
				/>
			</Head>
			<FAQPages />
		</div>
	);
}
