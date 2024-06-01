import Image from 'next/image';
import React from 'react';
import styles from './OverviewCard.module.css';
// import { motion } from 'framer-motion';
// import { fromUp } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';
export default function OverviewCard() {
	// const [element, controls] = useScroll();
	const CardList = [
		{
			id: '1',
			number: 'Vision',
			img: '/images/eye.png',
			icon: '/images/vision_icon.png',
			bg: '/images/vision_block.png',
			text: 'Our vision is to operate a chain of EV Charging Stations across India and positioning GOEC as an authentic player in the EV industry by offering the best service to the end-user with guaranteed quality.',
		},

		{
			id: '2',
			number: 'Mission',
			img: '/images/gole.png',
			icon: '/images/vision_icon.png',
			bg: '/images/mission_block.png',
			text: 'Our mission is to develop a highly successful and profitable electric vehicle charging station business with the state of an art facility and technology; a business that will meet the needs of our clients and supersede their expectations.',
		},
	];
	return (
		<div className={styles.warper}>
			<div className=' container_wrapper'>
				<div className=' grid grid-cols-1  md:grid-cols-2 gap-10 my-8 '>
					{CardList.map(item => (
						<div
							// initial='hidden'
							// animate={controls}
							// variants={fromUp}
							// transition={{
							// 	delay: 0.3 * item.id,
							// 	ease: 'linear',
							// 	duration: 0.5,
							// }}
							key={item.id}
							className={styles.CardBody}>
							<Image
								src={item.bg}
								width={220}
								height={220}
								alt=''
								style={{ position: 'absolute', right: 0, top: 0 }}
							/>
							<div className={styles.CardIcon}>
								{/* <Image src={item.img} width={100} height={100} alt='' /> */}
							</div>
							<h1 className={styles.CardNumber}>
								<Image src={item.icon} width={36} height={36} alt='' />
								{item.number}
							</h1>
							<p className={styles.CardText}>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
