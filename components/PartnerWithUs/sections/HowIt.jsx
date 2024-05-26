import React from 'react';
import Image from 'next/image';
import styles from './HowIt.module.css';
import shadow from '../assets/coin-shadow.png';
import Button from '@/components/Utils/Button';

export default function HowIt({ data }) {
	return (
		<section className='pb-[90px]'>
			<main className='container_wrapper flex flex-col md:items-center'>
				<h1 className='font-head2 font-[500] leading-normal text-[24px] md:text-[28px] text-[#1B1B1B] mb-2 md:mb-4'>
					How it works
				</h1>
				<span className={styles.line}></span>
				<div className='w-full grid md:grid-cols-3 mt-[50px] gap-[18px]'>
					{data.map((item, index) => (
						<article className='p-[22px] w-full bg-[#333333] pt-[70px]' key={`howit-${index}`}>
							<figure className='flex items-center justify-center relative pb-8'>
								<Image
									src={item.icon}
									alt={item.title}
									height={170}
									width={170}
									className='h-[170px] w-[170px] object-contain'
								/>
								<Image src={shadow} alt='shadow' height={50} width={170} className={styles.shadow} />
							</figure>
							<h1 className='font-head2 font-[500] text-[18px] md:text-[23px] leading-normal text-[#FFFFFFF5] mt-[30px]'>
								{item.title}
							</h1>
							<p className='text-[15px] leading-normal text-[#E0E0E0] mt-2'>{item.description}</p>
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
