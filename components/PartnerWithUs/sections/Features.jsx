import React from 'react';
import Image from 'next/image';
import icon1 from '../assets/thunder.svg';
import styles from './Features.module.css';
import Button from '@/components/Utils/Button';

export default function Features() {
	const data = [
		{
			icon: icon1,
			description: 'End to End-charging solutions for all-electric vehicles',
		},
		{
			icon: icon1,
			description: 'Designed for different EV categories, Makes, and Models',
		},
		{
			icon: icon1,
			description: 'High efficient and least power loss machines',
		},
		{
			icon: icon1,
			description: 'Well-connected app & software support',
		},
		{
			icon: icon1,
			description: 'Smart online payment gateway and user-friendly interfaces',
		},
		{
			icon: icon1,
			description: 'Pre-planned slot booking & smart charging facilities',
		},
		{
			icon: icon1,
			description: '24x7 Hardware and software monitoring',
		},
		{
			icon: icon1,
			description: 'GO EC manages everything from permitting and installation to maintenance',
		},
		{
			icon: icon1,
			description: 'Man-less operating machine concept',
		},
		{
			icon: icon1,
			description: 'Product & project warranty',
		},
		{
			icon: icon1,
			description: 'Turnkey project implementation',
		},
		{
			icon: icon1,
			description: '24x7 Customer support',
		},
	];

	return (
		<section className='pb-[90px] md:pt-[20px]'>
			<main className='container_wrapper flex flex-col md:items-center'>
				<h1 className='font-head2 font-[500] leading-normal text-[24px] md:text-[28px] text-[#1B1B1B] mb-2 md:mb-3'>
					GO EC Features
				</h1>
				<span className={styles.line}></span>
				<div className='w-full grid grid-cols-2 md:grid-cols-4 mt-[60px] md:mt-[80px] gap-2'>
					{data.map((item, index) => (
						<article
							key={`feature-${index}`}
							className={`${styles.borders} p-[18px] flex flex-col justify-center gap-3 bg-[#ffffff] h-[160px] w-full z-[1] hover:shadow-xl hover:z-[2]`}>
							<Image
								src={item.icon}
								alt={item.icon}
								height={50}
								width={50}
								className='h-[23px] md:h-[36px] w-[23px] md:w-[36px]'
							/>
							<p className='text-[12px] md:text-[14px] leading-normal text-[#000000] font-[500]'>
								{item.description}
							</p>
						</article>
					))}
				</div>
				<div className={`w-full flex items-center justify-center mt-[60px] ${styles.button}`}>
					<Button link='/contactUs' text='Talk to our Expert' />
				</div>
			</main>
		</section>
	);
}
