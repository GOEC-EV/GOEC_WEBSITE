import Hero from './sections/Hero';
import Faqs from './sections/Faqs';
import HowIt from './sections/HowIt';
import howit1 from './assets/cup.png';
import howit2 from './assets/mic.png';
import WhoCan from './sections/WhoCan';
import React, { Fragment } from 'react';
import Contact from '@/components/Home/ContactUs';
import whocan from './assets/whocan2.jpg';
import styles from './CocoPage.module.css';
import Features from './sections/Features';
import howit3 from './assets/round-cap.png';
import Maintenance from './sections/Maintenance';
import Partnerships from './sections/Partnerships';

export default function CocoPage() {
	return (
		<Fragment>
			<Hero
				title={
					<Fragment>
						Company-owned company operated <br /> (COCO)
					</Fragment>
				}
				description={
					<Fragment>
						Host EV Super Charging Stations at your premises for free and attract <br /> new customers to your
						business.
					</Fragment>
				}
			/>
			<div className={styles.gradBg}>
				<WhoCan
					image={whocan}
					title='Who can opt for COCO'
					description='The COCO model is a reliable option for restaurants, supermarkets, malls, theaters, petrol pumps hospitals, etc. Give your existing business a boost by attracting high-value customers with an EV supercharging station.'
				/>
				<HowIt
					data={[
						{
							icon: howit1,
							title: 'Ownership',
							description: 'The charging station is owned and operated by us.',
						},
						{
							icon: howit2,
							title: 'Marketing',
							description: 'GO EC does the marketing to bring EV customers to the charging station',
						},
						{
							icon: howit3,
							title: 'Earning',
							description: 'The company works on a profit-sharing basis with the host.',
						},
					]}
				/>
			</div>
			<Maintenance
				title='No Upfront Cost or Maintenance Expenses'
				description={
					<Fragment>
						GO EC handles everything from permitting and installation to maintenance, customer care, and marketing
						with <br /> zero upfront cost.
					</Fragment>
				}
			/>
			<Features />
			<Partnerships />
			<div className='flex flex-col-reverse md:flex-col'>
				<Contact title='Interested in COCO Partnerships?' />
				<Faqs />
			</div>
		</Fragment>
	);
}
