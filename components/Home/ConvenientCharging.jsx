import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import ChargingSlider from './ChargingSlider';
// import { motion } from 'framer-motion';
// import { useScroll } from '../../Hook/useScroll';
// import { opacityUp } from '../../data/Animations';
import styles from './ConvenientCharging.module.css';

export default function ConvenientCharging() {
	// const [element, controls] = useScroll();
	// const [element2, controls2] = useScroll();

	return (
		<div>
			<svg
				className='-mb-10'
				width='100%'
				style={{ transform: 'scale(1.1)', position: 'relative', zIndex: 1 }}
				height='auto'
				viewBox='0 0 1441 151'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M0.5 42.9472L120.5 30.9472C240.5 18.9472 480.5 -5.05285 720.5 0.947151C960.5 6.94715 1200.5 42.9472 1320.5 60.9472L1440.5 78.9472V150.947H1320.5C1200.5 150.947 960.5 150.947 720.5 150.947C480.5 150.947 240.5 150.947 120.5 150.947H0.5V42.9472Z'
					fill='#333333'
				/>
			</svg>
			<div className={styles.warper}>
				<Image src='/images/thunder.svg' width={350} height={300} alt='' className={styles.thunder} />
				<div className=' container_wrapper z-[2] relative flex flex-col h-full'>
					<div className='  grid grid-cols-1 md:grid-cols-2 gap-16 py-10 pt-0'>
						<div
							// initial='hidden'
							// animate={controls}
							// variants={opacityUp}
							// transition={{
							// 	delay: 0,
							// 	ease: 'linear',
							// 	duration: 0.5,
							// }}
							className='  flex flex-col pt-8'>
							<p className={styles.title}>
								Setup an <span className={styles.titleColor}>EV super charging</span> <br /> station with GO EC
								and earn <br /> high returns<span className={styles.dot}></span>
							</p>
						</div>
						<div
						// initial='hidden'
						// animate={controls}
						// variants={opacityUp}
						// transition={{
						// 	delay: 0.5,
						// 	ease: 'linear',
						// 	duration: 0.5,
						// }}
						>
							<ChargingSlider />
						</div>
					</div>
					<div className=' grid grid-cols-1 md:grid-cols-2 gap-16 pt-10 mt-auto'>
						<div
							// initial='hidden'
							// animate={controls2}
							// variants={opacityUp}
							// transition={{
							// 	delay: 0,
							// 	ease: 'linear',
							// 	duration: 0.5,
							// }}
							className='overflow-hidden order-2 md:order-1 '>
							<img src='/images/mobile/mobileHand.svg' alt='' className={styles.mobile} />
						</div>
						<div
							// initial='hidden'
							// animate={controls2}
							// variants={opacityUp}
							// transition={{
							// 	delay: 0.5,
							// 	ease: 'linear',
							// 	duration: 0.5,
							// }}
							className=' order-1 md:order-2  flex flex-col justify-end items-start md:pb-[150px] '>
							<p className={styles.codeSubTitle}>the goec app</p>
							<p className={styles.codeHading}>
								Convenient Charging with
								<span className={styles.titleColor}>
									GO EC App<span className={styles.dot}></span>
								</span>
							</p>
							<div className={styles.codeDiv}>
								<h1 className={styles.codeTitle}>
									Locate chargers . Monitor charging sessions . Pay conveniently
								</h1>
								<div className='flex pt-[2rem]'>
									<img className='h-[100px] w-[100px]' src='/images/icons/qr-code.png' alt='' />
									<div className='pl-4'>
										<Link href='https://apps.apple.com/in/app/goec/id1600027947' target='_blank'>
											<img
												src='/images/icons/app-store.svg'
												alt=''
												className='h-[45px] w-auto cursor-pointer'
											/>
										</Link>
										<Link
											href='https://play.google.com/store/apps/details?id=com.namp.azadpower'
											target='_blank'>
											<img
												src='/images/icons/google-play.svg'
												alt=''
												className='h-[45px] w-auto mt-2 cursor-pointer'
											/>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
