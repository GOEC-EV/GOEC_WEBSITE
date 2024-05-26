import TermsAndConditionsPage from '@/components/TermsAndConditions/TermsAndConditionsPage';
import Head from 'next/head';
import React from 'react';

export default function TermsAndConditions() {
	return (
		<div>
			<Head>
				<title>GO EC | Terms and condition</title>
				<meta
					name='description'
					content="Get familiar with GO EC's terms and conditions to ensure a smooth and hassle-free experience when using our EV charging stations"
				/>
			</Head>
			<TermsAndConditionsPage />
		</div>
	);
}
