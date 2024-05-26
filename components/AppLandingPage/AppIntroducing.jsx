import Image from 'next/image';
import React from 'react';
import styles from './AppIntroducing.module.css';
import { motion } from 'framer-motion';
import { fromUp } from '../../data/Animations';
import { useScroll } from '../../hooks/useScroll';
export default function AppIntroducing() {
	const [element, controls] = useScroll();
	const AppDate = [
		{ id: '1', img: '/images/mobile/hand1.png', text: 'Find & book chargers' },
		{
			id: '2',
			img: '/images/mobile/hand2.png',
			text: 'Monitor charging sessions & book chargers',
		},
		{ id: '3', img: '/images/mobile/hand3.png', text: 'Pay Conveniently' },
	];
	return (
		<div className={styles.warper}>
			<div ref={element} className=' container_wrapper'>
				<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					<div>
						<p className={styles.deception}>
							Introducing the GO EC charging app, the easiest and most convenient way to charge your electric
							vehicle on the go! With our app, you can find and pay for charging stations quickly and easily, all
							from the comfort of your phone. Plus, with our extensive network 200+ of charging stations across
							the country, you ll never be out of charge again!
						</p>
					</div>
					{AppDate.map(item => (
						<motion.div
							initial='hidden'
							animate={controls}
							variants={fromUp}
							transition={{
								delay: 0.3 * item.id,
								ease: 'linear',
								duration: 0.5,
							}}
							key={item.id}
							className={styles.CardWarper}>
							<div className={styles.CardImg}>
								<Image src={item.img} className=' mb-5 ' width={250} height={120} alt='' />
							</div>
							<div className={styles.colorDiv}></div>
							<p className={styles.CardText}>{item.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</div>
	);
}
