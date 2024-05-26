import React from 'react';
import Head from 'next/head';
import FocoPage from '@/components/PartnerWithUs/FocoPage';

export default function Foco() {
	return (
		<div>
			<Head>
				<title>
					Unlock the Potential of Your Land with FOCO - GO EC&apos;s Turnkey EV Charging Solution for Franchise
					Owners
				</title>
				<meta
					name='description'
					content='Apply for an EV charger from GO EC and experience the ease and convenience of charging'
				/>
			</Head>
			<FocoPage />
		</div>
	);
}
