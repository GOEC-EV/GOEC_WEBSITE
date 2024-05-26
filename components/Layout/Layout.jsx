import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import ModalProvider from '../Modals/ModalProvider';

export default function Layout({ title, description, children }) {
	return (
		<>
			<Head>
				<title>{`${title || 'GOEC'}`}</title>
				<meta name='description' content={description}></meta>
			</Head>

			<NavBar />
			<main id='with'>{children}</main>
			<Footer />
			<ModalProvider />
		</>
	);
}
