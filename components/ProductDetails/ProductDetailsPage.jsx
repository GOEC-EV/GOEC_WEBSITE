import Image from 'next/image';
import Button from '../Utils/Button';
import { useRouter } from 'next/router';
import { ProductDetails } from '../../data/shopData';
import React, { useEffect, useState } from 'react';

import styles from './ProductDetailsPage.module.css';
import Head from 'next/head';

export default function ProductDetailsPage() {
	const { asPath } = useRouter();
	const [active, setActive] = useState(0);
	const router = useRouter();
	const ProductId = router.query.id;
	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);
	function getLastPath(asPath) {
		const splitted = asPath.split('/');
		splitted.pop();
		return splitted.join('/');
	}

	return (
		<>
			{domLoaded && (
				<main className={styles.container}>
					<Head>
						<title>{`GOEC - ${ProductDetails[`${ProductId}`]?.name}`}</title>
					</Head>
					<div className='container_wrapper md:hidden pb-6'>
						<h1 className={`${styles.title} ${styles.mobtitle}`}>
							{ProductDetails[`${ProductId}`]?.name}
							<span className='text-[#007AFF]'>.</span>
						</h1>
						<span className={`${styles.line} ${styles.mobline}`}></span>
					</div>
					<section className='container_wrapper grid md:grid-cols-2 gap-8 md:gap-16 md:items-center'>
						<figure className={styles.imageArea}>
							<aside className={styles.smallImages}>
								{ProductDetails[`${ProductId}`]?.img.map((item, k) => (
									<div
										onClick={() => setActive(k)}
										key={k}
										className={`${styles.smallImg} ${active == k ? styles.active : ''}`}>
										<Image src={`/images/shop/${item}`} width={200} height={200} alt='Product' />
									</div>
								))}
							</aside>
							<article className={styles.largeImages}>
								<Image
									src={`/images/shop/${ProductDetails[`${ProductId}`]?.img[active]}`}
									alt='Product'
									width={500}
									height={300}
								/>
							</article>
						</figure>
						<aside className={styles.textArea}>
							<h1 className={styles.title}>
								{ProductDetails[`${ProductId}`]?.name}
								<span className='text-[#007AFF]'>.</span>
							</h1>
							<span className={styles.line}></span>
							{ProductDetails[`${ProductId}`]?.CHARGER_CAPACITY && (
								<p className={styles.para}>
									CHARGER CAPACITY: <span>{ProductDetails[`${ProductId}`]?.CHARGER_CAPACITY}</span>
								</p>
							)}
							{ProductDetails[`${ProductId}`]?.POWER_OUTPUT && (
								<p className={styles.para}>
									POWER OUTPUT: <span>{ProductDetails[`${ProductId}`]?.POWER_OUTPUT}</span>
								</p>
							)}
							{ProductDetails[`${ProductId}`]?.CONNECTOR ? (
								<p className={styles.para}>
									CONNECTOR: <span>{ProductDetails[`${ProductId}`]?.CONNECTOR}</span>
								</p>
							) : null}
							{ProductDetails[`${ProductId}`]?.CONNECTOR_TYPE && (
								<p className={styles.para}>
									CONNECTOR TYPE: <span>{ProductDetails[`${ProductId}`]?.CONNECTOR_TYPE}</span>
								</p>
							)}
							{ProductDetails[`${ProductId}`]?.CONNECTIVITY && (
								<p className={styles.para}>
									CONNECTIVITY: <span>{ProductDetails[`${ProductId}`]?.CONNECTIVITY}</span>
								</p>
							)}

							<p className={styles.para}>
								OUTPUT CONNECTOR: <span>{ProductDetails[`${ProductId}`]?.OUTPUT_CONNECTOR}</span>
							</p>
							<p className={styles.para}>
								OUTPUT VOLTAGE: <span>{ProductDetails[`${ProductId}`]?.OUTPUT_VOLTAGE}</span>
							</p>
							<p className={styles.para}>
								OUTPUT CURRENT: <span>{ProductDetails[`${ProductId}`]?.OUTPUT_CURRENT}</span>
							</p>
							{ProductDetails[`${ProductId}`]?.IP_PROTECTION && (
								<p className={styles.para}>
									IP PROTECTION: <span>{ProductDetails[`${ProductId}`]?.IP_PROTECTION}</span>
								</p>
							)}

							<p className={styles.para}>
								COMMUNICATION PROTOCOL: <span>{ProductDetails[`${ProductId}`]?.COMMUNICATION_PROTOCOL}</span>
							</p>
							<p className={styles.para}>
								AUTHORIZATION: <span>{ProductDetails[`${ProductId}`]?.AUTHORIZATION}</span>
							</p>
							<div className={styles.button}>
								<Button
									text='Book Now'
									link={`${getLastPath(asPath)}/booking?id=${ProductDetails[`${ProductId}`]?.bookingId}`}
								/>
							</div>
						</aside>
					</section>
				</main>
			)}
		</>
	);
}
