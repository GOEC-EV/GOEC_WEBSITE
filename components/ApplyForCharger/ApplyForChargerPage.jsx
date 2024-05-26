import React from 'react';
import Hero from './sections/Hero';
import Button from '../Utils/Button';
import Features from './sections/Features';
import InvestCard from '../Home/InvestCard';
import HelpSection from '../shared/HelpSection';
import CountDownCard from '../Home/CountDownCard';
import styles from './ApplyForChargerPage.module.css';
import HomeChargingCard from '../Home/HomeChargingCard';
import AccordionTab from '../AppLandingPage/AccordionTab';

export default function ApplyForChargerPage() {
	return (
		<main className={styles.container}>
			<Hero />
			<CountDownCard />
			<div className={styles.features}>
				<Features />
				<div className='h-[50px] md:h-[80px]'></div>
				<HomeChargingCard />
				<div className={`flex items-center justify-center pb-[70px] md:pb-[80px] ${styles.button}`}>
					<Button text='Apply Now' link='/' />
				</div>
			</div>
			<InvestCard />
			<div className={`flex items-center justify-center pb-[50px] md:pb-[80px] -mt-16 md:-mt-10 ${styles.button}`}>
				<Button text='Apply Now' link='/' />
			</div>
			<div className='container_wrapper pt-4 pb-[40px] md:pb-[80px]'>
				<h1 className='font-head font-[500] text-[32px] text-[#1B1B1B] text-center mb-[50px]'>
					FAQ<span className={styles.dot}></span>
				</h1>
				<AccordionTab
					opened={[1, 2, 3, 4]}
					data={[
						{
							id: 1,
							question: 'What is the ideal battery charge level to maintain?',
							answer:
								'For optimal battery life, it is always preferable to keep the battery life of electric vehicles between 20% and 80%. so, be certain that the battery charge does not drop to 0% or remains at 100% all the time, as this may cause damage to the battery.',
						},
						{
							id: 2,
							question: 'Do DC chargers charge more quickly than AC?',
							answer:
								'Yes, The onboard charger in an electric vehicle converts AC to DC during AC charging because the battery only stores DC. It, therefore, takes time to covert. Whereas, DC charging speeds up the process by avoiding the converter and charging the battery directly.',
						},
						{
							id: 3,
							question: 'Does GOEC provide fast charging facility?',
							answer:
								'Goec provides quick charging, allowing your vehicle to charge in less than an hour whereas AC charging takes  6-8 hours. DC chargers are usually preferred in ev charging stations located within cities or on highways.',
						},
						{
							id: 4,
							question: 'How am I going to pay for the charge?',
							answer: `You can pay using your GOEC app's e-wallet by charging it with the appropriate top up plan`,
						},
					]}
				/>
			</div>
			<HelpSection />
		</main>
	);
}
