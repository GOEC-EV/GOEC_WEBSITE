import { Fragment } from 'react';

import Button from '../Utils/Button';
import poweringImage from './assets/goec-powering.jpg';
import BlogsCardPage from './BlogsCardPage';
import ContactUs from './ContactUs';
import ConvenientCharging from './ConvenientCharging';
import CountDownCard from './CountDownCard';
import HeroSection from './HeroSection';
import HomeBlogCard from './HomeBlogCard';
import HomeChargingCard from './HomeChargingCard';
import styles from './HomePage.module.css';
import HowToChargeCard from './HowToChargeCard';
import InvestCard from './InvestCard';
import LogoCard from './LogoCard';
import Testimonials from './Testimonials';

export default function HomePage() {
	return (
		<div className='w-screen'>
			<HeroSection />
			<CountDownCard />
			<div className={styles.blogCharge}>
				<HomeBlogCard
					img={poweringImage}
					text='Powering Future '
					subText='starts today'
					description1={
						<Fragment>
							GO EC is transforming the future of electric automobiles by building a strategic and collective
							network of Electric Vehicle (EV) charging stations across India.
						</Fragment>
					}
					description2={
						<Fragment>
							We envision a greener, more sustainable world and hope to achieve it through innovative and
							transparent operations by collaborating with organizations, individual landowners, malls and
							hotels, hospitals, restaurants, and so on
						</Fragment>
					}
				/>

				<HomeChargingCard />
			</div>
			<InvestCard />
			<ConvenientCharging />
			<div className={styles.warper}>
				<div className=' container_wrapper'>
					<p className={styles.Hading}>
						How to charge your EV with GO EC App<span className={styles.dot}></span>
					</p>
					<HowToChargeCard />
					<div className='flex justify-center'>
						<Button text='Read more' link='/about' />
					</div>
				</div>
			</div>
			<LogoCard />
			<BlogsCardPage />
			<Testimonials />
			<ContactUs />
		</div>
	);
}
