import React from 'react';
import Head from 'next/head';
import Jafar from '@/components/jafar/Jafar';

export default function apjafar() {
	return (
		<div>
			<Head>
				<title>A.P. Jafar: Revolutionizing Renewable Energy and Green Farming</title>
				<meta
					name='description'
					content="Discover A.P. Jafar's impact on renewable energy and sustainable development. His ventures, from green farming to eco-friendly infrastructure, are reshaping India's approach to environmental sustainability"
				/>
			</Head>
			<Jafar />
		</div>
	);
}
