import Image from 'next/image';
import React from 'react';
import styles from './Overview.module.css';
// import { motion } from 'framer-motion';
// import { opacityUp } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';
export default function Overview() {
	// const [element, controls] = useScroll();
	return (
		<div className={styles.warper}>
			<div className=' container_wrapper'>
				<div
					// initial='hidden'
					// animate={controls}
					// variants={opacityUp}
					// transition={{
					// 	ease: 'linear',
					// 	duration: 0.8,
					// }}
					className=' grid grid-cols-1 md:grid-cols-2 gap-16  '>
					<div style={{ border: '5px solid #fff' }} className=' overflow-hidden '>
						<div className={styles.CardsImg}>
							<Image
								src='/images/Rectangleshop.jpg'
								width={600}
								height={500}
								alt=''
								className={styles.img}
								style={{ width: '100%', height: 'auto' }}
							/>
						</div>
					</div>
					<div className=' flex flex-col justify-center'>
						<h1 className={styles.HadingText}>Overview</h1>
						<p className={styles.dictationText}>
							GO EC Auto Tech PVT LTD is on a mission to build the foundation for the EV Revolution in India. 
							We're strategically placing electric vehicle chargers nationwide, making it convenient for EV drivers to 
							travel long distances without the fear of running out of battery power. Partnering with a variety of 
							businesses we're installing chargers in their properties. As our network of charging stations expands, 
							the EV market in India is surging, reducing concerns about charging accessibility and driving increased 
							EV adoption..
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
