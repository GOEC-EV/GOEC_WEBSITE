import React from 'react';
import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { fromUp } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';
import styles from './HowToChargeCard.module.css';

export default function HowToChargeCard() {
	const CardList = [
		{
			id: '1',
			number: '01',
			img: '/images/XMLID1.svg',
			text: 'Locate your nearest charging station from the GO EC app.',
		},
		{
			id: '2',
			number: '02',
			img: '/images/XMLID2.svg',
			text: 'CONNECT THE CHARGER TO YOUR EV',
		},
		{
			id: '3',
			number: '03',
			img: '/images/XMLID3.svg',
			text: 'USE THE GO EC APP / RFID CARD TO START CHARGING.',
		},
		{
			id: '4',
			number: '04',
			img: '/images/XMLID4.svg',
			text: 'Charge and pay conveniently.',
		},
	];

	// const [element, controls] = useScroll();

	return (
		<div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] py-[3rem] '>
			{CardList.map((item, i) => (
				<div
					// initial='hidden'
					// animate={controls}
					// variants={fromUp}
					// transition={{
					// 	delay: 0.3 * i,
					// 	ease: 'linear',
					// 	duration: 0.5,
					// }}
					key={item.id}
					className={styles.CardBody}>
					<div className={styles.CardIcon}>
						<Image src={item.img} width={200} height={300} alt='' />
					</div>
					<div className='mt-[50px] flex flex-col justify-between'>
						<h1 className={styles.CardNumber}>{item.number}</h1>
						<p className={styles.CardText}>{item.text}</p>
					</div>
				</div>
			))}
		</div>
	);
}
