import React from 'react';
import Head from 'next/head';
import InvestInCocoPage from '@/components/PartnerWithUs/InvestInCocoPage';

export default function InvestInCoco() {
	return (
		<div>
			<Head>
				<title>Get higher returns than FD&apos;s | Invest in COCO | GO EC</title>
				<meta
					name='description'
					content='Invest in COCO with GO EC to maximize your profits. Learn more about our investment opportunities and become our partner today.'
				/>
			</Head>
			<InvestInCocoPage />
		</div>
	);
}
