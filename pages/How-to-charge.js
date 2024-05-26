import HowToChargePage from '@/components/HowToCharge/HowToChargePage';
import Head from 'next/head';
import React from 'react';

export default function HowToCharge() {
	return (
		<div>
			<Head>
				<title>How to charge your EV using GO EC App</title>
				<meta
					name='description'
					content='Learn how to conveniently charge your electric vehicle using the GO EC App. Our step-by-step guide helps you find our nearest charging stations.'
				/>
			</Head>
			<HowToChargePage />
		</div>
	);
}
