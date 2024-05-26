import ContactUsPage from '@/components/ContactUs/ContactUsPage';
import Head from 'next/head';
import React from 'react';

export default function ContactUs() {
	return (
		<div>
			<Head>
				<title>Contact us | GO EC</title>
				<meta
					name='description'
					content="Contact GO EC for assistance with your questions, comments, or concerns. Fill out our form and we'll get back to you as soon as possible. "
				/>
			</Head>
			<ContactUsPage />
		</div>
	);
}
