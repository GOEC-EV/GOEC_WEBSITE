import React from 'react';
import styles from './HelpSection.module.css';

export default function HelpSection() {
	return (
		<section className={`md:pb-[80px] pb-[60px] overflow-hidden ${styles.container}`}>
			<div className='container_wrapper grid md:grid-cols-4 gap-8 md:gap-16'>
				<aside className={`flex items-center col-span-4 md:col-span-3 relative md:h-[160px] ${styles.bgArt}`}>
					<p className='font-head font-[500] text-[#1B1B1B] text-[24px] leading-normal relative z-[2] p-4 md:p-0'>
						If you need support that is not addressed here, our <br /> dedicated customer support team is here to
						help you.
					</p>
				</aside>
				<aside className='flex flex-col justify-end items-start col-span-4 md:col-span-1'>
					<h3 className='font-head font-[500] text-[#000000] text-[18px] leading-normal md:text-end w-full'>
						Make a Call to :
					</h3>
					<a
						href='tel:+918281100520'
						className='bg-[#007AFF] h-[89px] md:w-full flex items-center justify-center mt-[12px] font-[700] text-[24px] text-[#FFFFFF] px-8 md:px-0'>
						+91 8281100520
					</a>
				</aside>
			</div>
		</section>
	);
}
