import CareersPages from '@/components/Careers/CareersPages';
import Head from 'next/head';
import React from 'react';

export default function careers() {
	return (
		<div>
			<Head>
				<title>Join Our Team | Exciting Careers awaits you at GO EC</title>
				<meta
					name='description'
					content="Join our team at GO EC and embark on an exciting career in electric mobility! We're on a mission to make EV charging accessible to all."
				/>
			</Head>
			<CareersPages />
		</div>
	);
}
