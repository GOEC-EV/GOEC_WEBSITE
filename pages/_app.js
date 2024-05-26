import Layout from '@/components/Layout/Layout';
import LoadingCircle from '@/components/Utils/LoadingCircle';
import '@/styles/globals.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Router } from 'next/router';
import { useEffect, useState } from 'react';
import TagManager from 'react-gtm-module';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }) {
	const [client] = useState(() => new QueryClient());
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const start = () => {
			setLoading(true);
		};
		const end = () => {
			setLoading(false);
		};
		Router.events.on('routeChangeStart', start);
		Router.events.on('routeChangeComplete', end);
		Router.events.on('routeChangeError', end);
		return () => {
			Router.events.off('routeChangeStart', start);
			Router.events.off('routeChangeComplete', end);
			Router.events.off('routeChangeError', end);
		};
	}, []);

	useEffect(() => {
		TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_TAG_MANAGER_ID });
	}, []);

	return (
		<>
			{loading && <LoadingCircle />}
			<Layout>
				<QueryClientProvider client={client}>
					<Component {...pageProps} />
				</QueryClientProvider>
				<ToastContainer />
			</Layout>
		</>
	);
}
