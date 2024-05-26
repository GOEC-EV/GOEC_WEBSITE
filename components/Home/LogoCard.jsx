import React from 'react';
import Image from 'next/image';
import styles from './LogoCard.module.css';

export default function LogoCard() {
	const brands = [
		'/images/brands/kseb.png',
		'/images/brands/aerocare.jfif',
		'/images/brands/ashok-leyland.png',
		// '/images/brands/cgh-earth.png',
		'/images/brands/luku.jfif',
		'/images/brands/mahavitaran.jfif',
		'/images/brands/mg.png',
		'/images/brands/municipal-corporation.jfif',
		'/images/brands/oberon.png',
		'/images/brands/southern-power.png',
		'/images/brands/tata.png',
	];

	return (
		<div className={styles.warper}>
			<div className=' w-full flex justify-center mb-[80px]'>
				<div className=' relative'>
					<p className={styles.hading}>
						our associate partners
						<span className='absolute left-2/4 top-full mt-3 -translate-x-2/4  h-1 w-32 bg-[#007AFF]'> </span>
					</p>
				</div>
			</div>
			<div className={styles.slideContainer}>
				<div className={styles.slideContent}>
					<div className={styles.slide}>
						{brands.map(item => (
							<div className={styles.image} key={item}>
								<Image src={item} alt='Partners' height={350} width={500} />
							</div>
						))}
					</div>
					<div className={styles.slide}>
						{brands.map(item => (
							<div className={styles.image} key={item}>
								<Image src={item} alt='Partners' height={350} width={500} />
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='h-8'></div>
			<div className={styles.slideContainer}>
				<div className={styles.slideContent}>
					<div className={styles.slide} style={{ animationDirection: 'reverse' }}>
						{brands.map(item => (
							<div className={styles.image} key={item}>
								<Image src={item} alt='Partners' height={350} width={500} />
							</div>
						))}
					</div>
					<div className={styles.slide} style={{ animationDirection: 'reverse' }}>
						{brands.map(item => (
							<div className={styles.image} key={item}>
								<Image src={item} alt='Partners' height={350} width={500} />
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
