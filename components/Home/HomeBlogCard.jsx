import React from 'react';
import Image from 'next/image';
import styles from './HomeBlogCard.module.css';
// import { motion } from 'framer-motion';
// import { opacityUp, veal } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';

export default function HomeBlogCard({ img, text, subText, description1, description2 }) {
	// const [element, controls] = useScroll();

	return (
		<div className={styles.warper}>
			<div className='container_wrapper'>
				<div className='grid grid-cols-1 md:grid-cols-2  gap-20 '>
					<div
						// initial='hidden'
						// animate={controls}
						// variants={opacityUp}
						// transition={{
						// 	ease: 'linear',
						// 	duration: 1,
						// }}
						className='col-span-1'>
						<div className=' overflow-hidden rounded-md'>
							<div className={styles.CardsImg}>
								{/* <iframe 
									className='rounded-md w-full'
									width="550" 
									height="360" 
									src="https://www.youtube.com/embed/r-T7wN33QEw?controls=0&autoplay=1" 
									title="YouTube video player" 
									frameborder="0" 
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
								</iframe> */}
								<iframe
									src='https://www.youtube.com/embed/r-T7wN33QEw?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1&loop=1&playlist=r-T7wN33QEw'
									width='560'
									height='315'
									frameBorder='0'
									allowFullScreen></iframe>
							</div>
						</div>
					</div>
					<div className='flex flex-col justify-center'>
						<h1 className={styles.hadarSubText}>{text}</h1>
						<h3 className={styles.hadarText}>
							{subText}
							<span className={styles.dot}></span>
						</h3>
						<span className={styles.line}></span>
						<p
							// initial='hidden'
							// animate={controls}
							// variants={opacityUp}
							// transition={{
							// 	ease: 'linear',
							// 	duration: 1,
							// }}
							className={styles.subText}>
							{description1}
						</p>
						<p
							// initial='hidden'
							// animate={controls}
							// variants={opacityUp}
							// transition={{
							// 	ease: 'linear',
							// 	duration: 1,
							// }}
							className={styles.subText}>
							{description2}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
