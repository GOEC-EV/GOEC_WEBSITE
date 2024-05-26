import React from 'react';
import Button from '../Utils/Button';
import styles from './ThanksPage.module.css';
import HelpSection from '../shared/HelpSection';
import AccordionTab from '../AppLandingPage/AccordionTab';

export default function ThanksPage() {
	return (
		<main className={styles.container}>
			<section className={styles.heroSection}>
				<article className={`${styles.heroContent} container_wrapper`}>
					<h1 className={styles.title}>
						Thank You<span className={styles.dot}></span>
					</h1>
					<p className={styles.description}>
						GO EC is transforming the future of electric automobiles by building a strategic and collective
						network of Electric Vehicle (EV) charging stations across India.
					</p>
					<Button text='Return to home' link='/' />
				</article>
			</section>
			<section className={styles.faqSection}>
				<div className='container_wrapper'>
					<h1 className={styles.sectionTitle}>
						FAQ<span className={styles.dot}></span>
					</h1>
					<AccordionTab />
					<div className={styles.button}>
						<Button text='Go to Help center' link='/help-center' />
					</div>
				</div>
			</section>
			<HelpSection />
		</main>
	);
}
