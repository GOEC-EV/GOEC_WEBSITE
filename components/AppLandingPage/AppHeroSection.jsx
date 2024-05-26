import Image from 'next/image';
import React from 'react';
import styles from './AppHeroSection.module.css';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

export default function AppHeroSection() {
	return (
		<div className={styles.warper}>
			<div className=' container_wrapper'>
				<div className=' grid grid-cols-1 md:grid-cols-2  relative'>
					<div className=' flex  flex-col justify-center'>
						<h1 className={styles.Hading}>
							“India’s Most reliable
							<br /> EV Charging App“
						</h1>
						<div className='  flex  gap-4 lg:py-12 '>
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
					<div className={styles.img}>
						<Image src='/images/mobile/Recovered.png' width={600} height={200} alt='' />
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
