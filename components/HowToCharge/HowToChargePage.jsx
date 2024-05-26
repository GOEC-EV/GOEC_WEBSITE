import React, { useEffect, useState } from 'react';
import AccordionTab from '../AppLandingPage/AccordionTab';
import HowToChargeCard from './HowToChargeCard';
import HowToChargeHeroSection from './HowToChargeHeroSection';
import styles from './HowToChargePage.module.css';
import HowToChargeVideoCard from './HowToChargeVideoCard';
import { FAQTabItem } from '../../data/AccordionData';
export default function HowToChargePage() {
	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);
	return (
		<>
			{domLoaded && (
				<div>
					<HowToChargeHeroSection />
					<HowToChargeVideoCard />
					<HowToChargeCard />
					<div className=' container_wrapper'>
						<div className=' py-5'>
							<div className='flex mt-8 mb-4'>
								<p className={styles.FAQ}>FAQ</p>
							</div>
							<AccordionTab data={FAQTabItem} />
						</div>
						<div className=' grid grid-cols-1  md:grid-cols-5 lg:grid-cols-7 gap-20  my-10'>
							<div className='  md:col-span-3 lg:col-span-5 md:w-5/6 '>
								<p className={styles.ColorText}>
									If you need support that is not addressed here, our dedicated customer support team is here
									to help you.
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
