import React from 'react';
import Head from 'next/head';
import ApplyForChargerPage from '@/components/ApplyForCharger/ApplyForChargerPage';

export default function ApplyForCharger() {
	return (
		<div>
			<Head>
				<title>Get Your EV Charger Now - Apply online | GO EC </title>
				<meta
					name='description'
					content='Apply for an EV charger from GO EC and experience the ease and convenience of charging'
				/>
			</Head>
			<ApplyForChargerPage />
		</div>
	);
}
