import Image from 'next/image';
import React from 'react';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import styles from './HowToChargeHeroSection.module.css';

export default function HowToChargeHeroSection() {
	return (
		<div className={styles.warper}>
			<div className=' container_wrapper'>
				<div className=' grid grid-cols-1  md:grid-cols-5  relative'>
					<div className=' flex  col-span-2 md:col-span-2  flex-col justify-center'>
						<h1 className={styles.Hading}>How to charge your EV with GO EC APP</h1>
						<div className='  flex  gap-4 py-4 '>
							<a
								className='h-[40px] w-auto'
								href='https://apps.apple.com/in/app/goec/id1600027947'
								target='_blank'
								rel='noreferrer'>
								<Image
									className='h-[40px] w-auto'
									src='/images/logo/appStore1.png'
									width={100}
									height={80}
									alt=''
								/>
							</a>
							<a
								className='h-[40px] w-auto mb-5 cursor-pointer '
								href='https://play.google.com/store/apps/details?id=com.namp.azadpower'
								target='_blank'
								rel='noreferrer'>
								<Image
									className='h-[40px] w-auto'
									src='/images/logo/googlePlay1.png'
									width={100}
									height={80}
									alt=''
								/>
							</a>
						</div>
					</div>
					<div className=' w-full mx-auto scale-[1.2] md:scale-[1] col-span-1 md:col-span-3 z-50'>
						<Image src='/images/mobile/twoPhones.png' width={800} height={800} alt='' />
					</div>
					<div className={styles.colorDiv}></div>
				</div>
			</div>
			<div className={styles.BtnWarper}>
				<div className={styles.containerWrapper}>
					<a href='https://onelink.to/y3xt8j' target='_blank' rel='noreferrer' className={styles.Btn}>
						<p>Download Now</p>
						<HiOutlineArrowUpRight />
					</a>
				</div>
			</div>
		</div>
	);
}
