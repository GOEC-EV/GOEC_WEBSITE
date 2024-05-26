import React from 'react';
import Head from 'next/head';
import CocoPage from '@/components/PartnerWithUs/CocoPage';

export default function Coco() {
	return (
		<div>
			<Head>
				<title>Get More High - Paying EV Owners to Your Strategic Location | GO EC | COCO model</title>
				<meta
					name='description'
					content='Attract high-paying EV owners to your strategic location with COCO, the Company Owned Company Operated charging model. Benefit from increased foot traffic and business revenue with this innovative solution. Learn more now!'
				/>
			</Head>
			<CocoPage />
		</div>
	);
}
