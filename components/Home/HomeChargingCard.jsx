import React from 'react';
// import { motion } from 'framer-motion';
// import { useScroll } from '../../Hook/useScroll';
// import { opacityUp } from '../../data/Animations';
import styles from './HomeChargingCard.module.css';
import cottage from './assets/cottage.png';
import apartment from './assets/apartment.png';
import garage from './assets/garage.png';
import storefront from './assets/storefront.png';
import Image from 'next/image';

export default function HomeChargingCard() {
	const CardList = [
		{
			id: '1',
			hading: 'HOME CHARGING',
			text: 'Hassle-free EV charging at home.',
			icon: cottage,
		},
		{
			id: '2',
			hading: 'WORKPLACE CHARGING',
			text: 'Upgrade your workplace with EV charging.',
			icon: apartment,
		},
		{
			id: '3',
			hading: 'FLEET CHARGING',
			text: 'Electrify your fleet with our smart Charging Solutions.',
			icon: garage,
		},
		{
			id: '4',
			hading: 'RETAIL CHARGING',
			text: 'Make your premisses EV friendly with smart charging.',
			icon: storefront,
		},
	];

	// const [element, controls] = useScroll();

	return (
		<div className={styles.warper}>
			<div className='container_wrapper'>
				<h1 className={styles.heading}>
					<span className={styles.blueText}>GO EC</span> EV Charging Solutions<span className={styles.dot}></span>
				</h1>
				<div className=' grid grid-cols-2  sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 my-8 '>
					{CardList.map((item, i) => (
						<div
							// initial='hidden'
							// animate={controls}
							// variants={opacityUp}
							// transition={{
							// 	delay: 0.3 * i,
							// 	ease: 'linear',
							// 	duration: 0.5,
							// }}
							key={item.id}
							className=' '>
							<div className=' w-[40px] h-[40px] flex items-center justify-center rounded-full ml-5 p-2 bg-[#2F80ED] mb-4 '>
								<Image src={item.icon} alt={item.hading} width={30} height={30} />
							</div>
							<h1
								className=' font-[500] text-[16px] md:text-[18px]  text-[#000000] mb-2  border-l-2 pl-5 border-[#007AFF]'
								style={{ fontFamily: 'var(--ff-head)' }}>
								{item.hading}
							</h1>
							<p className=' pl-5  text-[#333333] text-[14px] md:text-[16px]  '>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
