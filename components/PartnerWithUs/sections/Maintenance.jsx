import React, { Fragment } from 'react';
import Image from 'next/image';
import arrow from '../assets/arrow.svg';
import icon1 from '../assets/friend.svg';
import icon2 from '../assets/drawing-compass.svg';
import icon3 from '../assets/charger.svg';
import icon4 from '../assets/customer-support.svg';
import icon5 from '../assets/electric-factory.svg';
import icon6 from '../assets/clipboard.svg';
import icon7 from '../assets/Wrench.svg';
import icon8 from '../assets/support.svg';
import styles from './Maintenance.module.css';
import Button from '@/components/Utils/Button';

export default function Maintenance({ title, description }) {
	const data1 = [
		{
			icon: icon1,
			title: (
				<Fragment>
					Initial <br /> Consultation
				</Fragment>
			),
		},
		{
			icon: icon2,
			title: (
				<Fragment>
					Site <br /> Design
				</Fragment>
			),
		},
		{
			icon: icon3,
			title: (
				<Fragment>
					Equipment <br /> Procurement
				</Fragment>
			),
		},
		{
			icon: icon4,
			title: (
				<Fragment>
					Site <br /> Construction
				</Fragment>
			),
		},
	];

	const data2 = [
		{
			icon: icon5,
			title: (
				<Fragment>
					Utility <br /> Interconnection
				</Fragment>
			),
		},
		{
			icon: icon6,
			title: (
				<Fragment>
					Site <br /> Commissioning
				</Fragment>
			),
		},
		{
			icon: icon7,
			title: (
				<Fragment>
					Ongoing <br /> Maintanence
				</Fragment>
			),
		},
		{
			icon: icon8,
			title: (
				<Fragment>
					Customer <br /> care
				</Fragment>
			),
		},
	];

	return (
		<section className='py-[70px] md:py-[90px]'>
			<main className='container_wrapper'>
				<h1 className='font-head2 font-[500] leading-normal text-[24px] md:text-[28px] text-[#1B1B1B] mb-2'>
					{title}
				</h1>
				<span className={styles.line}></span>
				<p className='text-[18px] leading-normal text-[#333333] mt-8'>{description}</p>
				<article className='bg-[#F5F5F5] mt-[40px] md:mt-[60px] flex flex-col gap-[70px] p-[23px] px-0 md:p-[70px]'>
					<div className={styles.features}>
						{data1.map((item, index) => (
							<Fragment key={`feature-${index}`}>
								<div>
									<div className='h-[100px] w-[100px] bg-[#0245B8] flex items-center justify-center'>
										<Image
											src={item.icon}
											alt={item.title}
											height={100}
											width={100}
											className='h-[50px] w-[50px]'
										/>
									</div>
									<p className='w-[100px] font-head2 font-[500] leading-normal text-[#4F4F4F] text-[14px] text-center mt-4'>
										{item.title}
									</p>
								</div>
								<div className='h-[100px] w-[100px] flex items-center justify-center'>
									<Image src={arrow} alt='Right Arrow' height={6} width={100} className='h-auto w-[80px]' />
								</div>
							</Fragment>
						))}
					</div>
					<div className={styles.features}>
						{data2.map((item, index) => (
							<Fragment key={`feature-${index}`}>
								<div>
									<div className='h-[100px] w-[100px] bg-[#0245B8] flex items-center justify-center'>
										<Image
											src={item.icon}
											alt={item.title}
											height={100}
											width={100}
											className='h-[50px] w-[50px]'
										/>
									</div>
									<p className='font-head2 font-[500] leading-normal text-[#4F4F4F] text-[14px] text-center mt-4'>
										{item.title}
									</p>
								</div>
								<div className='h-[100px] w-[100px] flex items-center justify-center'>
									<Image src={arrow} alt='Right Arrow' height={6} width={100} className='h-auto w-[80px]' />
								</div>
							</Fragment>
						))}
					</div>
				</article>
				<div className={`w-full flex items-center justify-center mt-[40px] ${styles.button}`}>
					<Button link='/contactUs' text='Talk to our Expert' />
				</div>
			</main>
		</section>
	);
}
