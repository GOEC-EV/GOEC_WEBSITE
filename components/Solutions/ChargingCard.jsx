import Image from 'next/image';
import React from 'react';
import styles from './ChargingCard.module.css';
// import { motion } from 'framer-motion';
// import { opacityUp } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';
import { ChargingCardList } from '../../data/ChargingCardData';
export default function ChargingCard() {
	// const [element, controls] = useScroll();

	return (
		<div className={styles.warper}>
			<div className=' container_wrapper'>
				<h1 className=' text-[32px] font-[500] text-white py-5 font-head'>
					GO EC EV Charging Solutions <span className='inline-block h-[8px] w-[8px] bg-[#2F80ED] -mb-1'></span>
				</h1>
				<div className=' grid grid-cols-2  md:grid-cols-4 gap-20 my-8 '>
					{ChargingCardList.map(item => (
						<div
							// initial='hidden'
							// animate={controls}
							// variants={opacityUp}
							// transition={{
							// 	delay: 0.15 * item.id,
							// 	ease: 'linear',
							// 	duration: 0.5,
							// }}
							key={item.id}
							className=' '>
							<div className=' w-12 h-12 flex items-center justify-center rounded-full ml-5 p-3  bg-blue-900 mb-4 '>
								<Image
									src={`/images/Solutions/${item.img}`}
									width={50}
									height={50}
									alt=''
									className=' h-auto '
								/>
							</div>
							<h1 className=' font-bold  text-white py-1  border-l-4 border-blue-500  pl-5'>{item.hading}</h1>
							{/* <p className=' pl-5  text-gray-400 '>{item.text}</p> */}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
