import React from 'react';
import styles from './Hero.module.css';

export default function Hero({ title, description }) {
	return (
		<section className={`bg-[#333333] py-[60px] md:py-[100px] ${styles.container}`}>
			<main className='container_wrapper flex flex-col justify-center items-start relative z-[2]'>
				<h1 className='font-head2 font-[500] text-[32px] md:text-[64px] leading-tight text-[#FFFFFF]'>{title}</h1>
				<p className='text-[#FFFFFF] text-[14px] md:text-[18px] leading-normal mt-8'>{description}</p>
			</main>
		</section>
	);
}
