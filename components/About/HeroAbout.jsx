import Image from 'next/image';
import React from 'react';
import styles from './HeroAbout.module.css';
// import { motion } from 'framer-motion';
// import { opacityUp } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';
export default function HeroAbout() {
	// const [element, controls] = useScroll();
	return (
		<div className={styles.warper}>
			<div
				// initial='hidden'
				// animate={controls}
				// variants={opacityUp}
				// transition={{
				// 	ease: 'linear',
				// 	duration: 0.8,
				// }}
				className='  container_wrapper  '>
				<div className=' flex'>
					<Image
						src='/images/whitelogo.png'
						className=' w-24 h-24 md:w-40  md:h-40 mr-4 md:mr-12 '
						width={100}
						height={100}
						alt=''
					/>
					<div>
						<p className={styles.HeroText}>GO EC</p>
						<p className={styles.HeroSubText}>Powering the Future</p>
					</div>
				</div>
			</div>
		</div>
	);
}
