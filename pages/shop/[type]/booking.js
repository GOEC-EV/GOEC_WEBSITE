import React from 'react';
import Head from 'next/head';
import ProductBookingPage from '@/components/ProductBooking/ProductBookingPage';

export default function ProductBooking() {
	return (
		<div>
			<Head>
				<title>GOEC - Product Booking</title>
			</Head>
			<ProductBookingPage />
		</div>
	);
}
