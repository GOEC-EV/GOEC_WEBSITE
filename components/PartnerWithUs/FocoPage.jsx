import Hero from './sections/Hero';
import Faqs from './sections/Faqs';
import HowIt from './sections/HowIt';
import howit1 from './assets/cup.png';
import howit2 from './assets/mic.png';
import WhoCan from './sections/WhoCan';
import React, { Fragment } from 'react';
import Contact from '@/components/Home/ContactUs';
import whocan from './assets/whocan1.png';
import styles from './FocoPage.module.css';
import Features from './sections/Features';
import howit3 from './assets/round-cap.png';
import Maintenance from './sections/Maintenance';
import Partnerships from './sections/Partnerships';

export default function FocoPage() {
	return (
		<Fragment>
			<Hero
				title={
					<Fragment>
						Franchise-owned company operated <br /> (FOCO)
					</Fragment>
				}
				description={<Fragment>Own a GO EC EV supercharging station and start earning from day one.</Fragment>}
			/>
			<div className={styles.gradBg}>
				<WhoCan
					image={whocan}
					title='Who can opt for FOCO'
					description='FOCO is the most profitable option for anyone who owns land close to a roadway. Convert your property into an EV supercharging station to attract high-value EV users.By setting up an EV supercharging station you get the option to get income from both the charging as well as from the additional amenities that you provide within your hub.'
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
							description: 'GO EC does the marketing to bring EV customers to your charging station.',
						},
						{
							icon: howit3,
							title: 'Earning',
							description: 'All the profit from the charging transaction is yours.',
						},
					]}
				/>
			</div>
			<Maintenance
				title='On-time setup cost and Zero maintenance'
				description={
					<Fragment>
						GO EC handles everything from feasibility study to Commissioning for a one-time set cost. The EV
						supercharging station is delivered to <br /> the franchise owners as a Turnkey project.
					</Fragment>
				}
			/>
			<Features />
			<Partnerships />
			<div>
				<Contact title='Interested in FOCO Partnerships?' />
				<Faqs />
			</div>
		</Fragment>
	);
}
