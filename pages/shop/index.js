import React from 'react';
import Head from 'next/head';
import ShopPage from '@/components/Shop/ShopPage';

export default function Shop() {
	return (
		<div>
			<Head>
				<title>Shop the Best EV Chargers, and Smartcards at GO EC</title>
				<meta
					name='description'
					content="Enjoy hassle-free charging with GO EC's collection of top-rated EV chargers and smartcards. Shop now and experience a world of convenience, reliability"
				/>
			</Head>
			<ShopPage />
		</div>
	);
}
