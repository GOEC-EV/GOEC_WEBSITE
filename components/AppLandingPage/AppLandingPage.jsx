import React, { useEffect, useState } from 'react';
import AccordionTab from './AccordionTab';
import HowToChargeCard from '../Home/HowToChargeCard';
import styles from './AppLandingPage.module.css';
import AppCard from './AppCard';
import AppHeroSection from './AppHeroSection';
import AppIntroducing from './AppIntroducing';
import { FAQTabItem } from '@/data/AccordionData';

export default function AppLandingPage() {
	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);
	return (
		<>
			{domLoaded && (
				<div className={styles.warper3}>
					<AppHeroSection />
					<AppIntroducing />
					<div className=' container_wrapper '>
						<div className=' pt-12 pb-44'>
							<p className={styles.AppHading}>
								Our app also includes a variety of{' '}
								<span className='inline-block h-[8px] w-[8px] md:h-[12px] md:w-[12px] bg-[#007AFF] mb-6'></span>{' '}
								<br /> features to make your{' '}
								<span className='text-[#007AFF]'>
									charging <br /> experience
								</span>{' '}
								even better.
							</p>
							<AppCard mod='left' text='Locate  chargers near you' Img='/images/mobile/mobile1.png' />
							<AppCard mod='' text='Resereve chargers' Img='/images/mobile/mobile22.png' />
							<AppCard mod='left' text='Start and stop charging' Img='/images/mobile/mobile2.png' />
							<AppCard mod='' text='View charging progress' Img='/images/mobile/mobile23.png' />
							<AppCard mod='left' text='Pay with ease' Img='/images/mobile/mobile3.png' />
						</div>
					</div>

					<div className={styles.warper}>
						<div className=' container_wrapper pt-8'>
							<p className={styles.Hading}>How to charge your EV with GO EC App</p>
							<HowToChargeCard />
						</div>
					</div>
					<div className=' container_wrapper'>
						<div className=' py-5'>
							<div className=' flex mb-4 mt-8'>
								<p className={styles.FAQ}>FAQ</p>
							</div>
							<AccordionTab data={FAQTabItem} />
						</div>
						<div className=' grid grid-cols-1  md:grid-cols-5 lg:grid-cols-7 gap-20  my-10'>
							<div className='  md:col-span-3 lg:col-span-5   md:w-5/6 '>
								<p className={styles.ColorText}>
									If you need support that is not addressed here, our dedicated customer support team is here
									to help you..
								</p>
							</div>
							<div className=' col-span-2'>
								<p className={styles.hading}>Make a Call to :</p>
								<p className={styles.ColorBtn}>+91 8281100520</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
