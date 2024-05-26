import React from 'react';
import Image from 'next/image';
import styles from './WhoCan.module.css';

export default function WhoCan({ title, description, image }) {
	return (
		<section className='py-[60px] md:py-[100px]'>
			<main className='container_wrapper grid md:grid-cols-2 gap-[40px] md:gap-[85px]'>
				<figure className='w-full flex items-center justify-center'>
					<Image src={image} alt={title} height={714} width={1000} className='w-full h-auto aspect-[1.4/1]' />
				</figure>
				<figcaption className='flex flex-col justify-center items-start'>
					<h1 className='text-[24px] md:text-[32px] leading-normal text-[#1B1B1B] font-head2 font-[500] mb-2 md:mb-4'>
						{title}
						<span className='text-[24px] md:text-[32px] leading-normal text-[#13F2AD]'>?</span>
					</h1>
					<span className={styles.line}></span>
					<p className='text-[#333333] text-[18px] leading-normal mt-8 md:mt-10'>{description}</p>
				</figcaption>
			</main>
		</section>
	);
}
