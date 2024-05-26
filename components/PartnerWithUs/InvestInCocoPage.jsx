import Hero from './sections/Hero';
import Faqs from './sections/Faqs';
import HowIt from './sections/HowIt';
import howit1 from './assets/cup.png';
import howit2 from './assets/mic.png';
import WhoCan from './sections/WhoCan';
import React, { Fragment } from 'react';
import Contact from '@/components/Home/ContactUs';
import whocan from './assets/whocan2.jpg';
import Features from './sections/Features';
import Charging from './sections/Charging';
import howit3 from './assets/round-cap.png';
import styles from './InvestInCocoPage.module.css';

export default function InvestInCocoPage() {
	return (
		<Fragment>
			<Hero
				title={
					<Fragment>
						Invest in Company-owned company <br /> operated (COCO)
					</Fragment>
				}
				description={
					<Fragment>
						Invest in strategically located company-owned company-operated EV <br /> Super Charging Stations and
						earn high returns!
					</Fragment>
				}
			/>
			<div className={styles.gradBg}>
				<WhoCan
					image={whocan}
					title='Who can opt to Invest in COCO'
					description='This is a good investment option for anyone in the world who has no land for setting up a charging station. If you are looking for a highly profitable and long-term investment option, investing in our COCO pool can yield you high returns. Plus, the added benefit of being part of a futuristic business.'
				/>
				<HowIt
					data={[
						{
							icon: howit1,
							title: 'Ownership',
							description:
								'You can buy from a pool of charging stations that are owned by us and operated by us.',
						},
						{
							icon: howit2,
							title: 'Marketing',
							description: 'GO EC does the marketing to bring EV customers to your charging station',
						},
						{
							icon: howit3,
							title: 'Earning',
							description:
								'All the earning from the station belongs to you and you can resell your station in the future',
						},
					]}
				/>
			</div>
			<Charging />
			<Features />
			<div>
				<Contact title='Interested in Investing in COCO?' />
				<Faqs />
			</div>
		</Fragment>
	);
}
