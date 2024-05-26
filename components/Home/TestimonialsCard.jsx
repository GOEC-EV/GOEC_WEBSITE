import React from 'react';
import Image from 'next/image';

import styles from './Testimonials.module.css';
// import { motion } from 'framer-motion';
// import { useScroll } from '../../Hook/useScroll';
// import { opacityUp } from '../../data/Animations';

export default function TestimonialsCard({ name, role, comment, image }) {
	// const [element, controls] = useScroll();

	return (
		<div
			// ref={element}
			// initial='hidden'
			// animate={controls}
			// variants={opacityUp}
			// transition={{
			// 	delay: 0,
			// 	ease: 'linear',
			// 	duration: 0.8,
			// }}
			className=' grid grid-cols-1 md:grid-cols-2 gap-16'>
			<div className='  order-2 md:order-1  flex flex-col'>
				<p className={styles.subtitle}>our customers</p>
				<span className={styles.line}></span>
				<p className={styles.dateless}>{comment}</p>
				<div>
					<p className={styles.title}>{name}</p>
					<p className={styles.job}>{role}</p>
				</div>
				<div></div>
			</div>
			<div className=' order-1 md:order-2'>
				<Image src={image} width={680} height={500} alt={name} className='w-full h-full object-cover' />
			</div>
		</div>
	);
}
