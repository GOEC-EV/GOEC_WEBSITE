import Head from 'next/head';
import HomePage from '@/components/Home/HomePage';

export default function Home() {
	return (
		<main className=' '>
			<Head>
				<title>GO EC | EV Charging Stations in India</title>
				<meta
					name='description'
					content="Discover GO EC, India's trusted EV charging station network for fast and reliable charging. With cutting-edge technology and a commitment to excellence, we provide the best EV charging experience possible"
				/>
			</Head>
			<HomePage />
		</main>
	);
}
