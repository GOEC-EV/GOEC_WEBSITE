import React from 'react';
import Image from 'next/image';
import icon1 from '../assets/bar-graph.png';
import icon2 from '../assets/group-support.png';
import icon3 from '../assets/settings.png';
import icon4 from '../assets/animal-coin.png';
import shadow from '../assets/coin-shadow.png';
import styles from './Charging.module.css';
import Button from '@/components/Utils/Button';

export default function Charging() {
	const data = [
		{
			icon: icon1,
			title: 'Growing Demand',
			description: 'With more and more people switching to EVs, the demand for charging stations is on the rise.',
		},
		{
			icon: icon2,
			title: 'Government Support',
			description:
				'The government is actively promoting the use of electric vehicles to reduce emissions and promote sustainability. ',
		},
		{
			icon: icon3,
			title: 'Low Operating Costs',
			description:
				'The operating costs of an EV charging station are relatively low compared to traditional gas stations as the charging process is automated.',
		},
		{
			icon: icon4,
			title: 'Long-Term Investment',
			description:
				'Unlike fixed deposits and SIPs, which only provide a fixed return, an EV charging station can provide a higher return as the demand for EVs increases.',
		},
	];

	return (
		<section className='py-[70px] md:py-[100px]'>
			<main className='container_wrapper'>
				<h1 className='font-head2 font-[500] leading-normal text-[24px] md:text-[28px] text-[#1B1B1B]'>
					Why should you invest in EV charging stations{' '}
					<span className='font-head2 font-[500] leading-normal text-[24px] md:text-[28px] text-[#13F2AD]'>?</span>
				</h1>
				<span className={styles.line}></span>
				<div className='w-full grid md:grid-cols-4 gap-[18px] mt-[50px] md:mt-[60px]'>
					{data.map((item, index) => (
						<article
							className='bg-[#13F2AD] w-full p-[25px] pt-[40px] flex flex-col items-center'
							key={`charging-${index}`}>
							<figure className='h-[180px] w-[180px] flex justify-center relative'>
								<Image
									src={item.icon}
									alt={item.title}
									height={200}
									width={200}
									className='h-[140px] w-auto object-contain'
								/>
								<Image src={shadow} alt='shadow' height={50} width={200} className={styles.shadow} />
							</figure>
							<figcaption className='w-full mt-8'>
								<h1 className='font-head2 font-[700] leading-normal text-[14px] text-[#1B1B1B] uppercase'>
									{item.title}
								</h1>
								<p className='text-[14px] text-[#333333] leading-normal mt-4'>{item.description}</p>
							</figcaption>
						</article>
					))}
				</div>
				<div className={`w-full flex items-center justify-center mt-[40px] ${styles.button}`}>
					<Button link='/contactUs' text='Talk to our Expert' />
				</div>
			</main>
		</section>
	);
}
