import Link from 'next/link';
// import { motion } from 'framer-motion';
import styles from './HeroSection.module.css';
// import { useScroll } from '../../Hook/useScroll';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

export default function HeroSection() {
	// const [element, controls] = useScroll();

	return (
		<div className={styles.wrapper}>
			<video className={styles.bgVideo} muted loop autoPlay>
				<source src='https://goecbucket.s3.ap-south-1.amazonaws.com/heroVideo.mp4' type='video/mp4' />
			</video>
			<div className={styles.content}>
				<div className={styles.container_wrapper}>
					<div
						// initial='hidden'
						// animate={controls}
						// variants={opacityUp}
						// transition={{
						// 	delay: 0,
						// 	ease: 'linear',
						// 	duration: 0.5,
						// }}
						className={`${styles.topArea} container_wrapper`}>
						<h1 className={styles.TextBody}>
							<span> Electric </span>
							<br className=' hidden md:block' />
							<span className=' pr-2 md:block'> charging </span> made easy
							<br className=' hidden md:block' /> with <span className={styles.TextBodyColor2}>GO EC</span>
						</h1>
					</div>
					<div className={`${styles.bottomArea} `}>
						<div className='grid grid-cols-1 md:grid-cols-2 container_wrapper'>
							<div className={styles.SubtitleText}>
								<p className='hidden md:block'>
									We are dedicated to providing innovative and sustainable charging solutions through our
									user-friendly app and reliable charging network designed to enhance your EV experience.
								</p>
							</div>
							<div
								// initial='hidden'
								// animate={controls}
								// variants={opacityUp}
								// transition={{
								// 	delay: 1,
								// 	ease: 'linear',
								// 	duration: 0.5,
								// }}
								className='grid grid-cols-2'>
								<Link href='/app-page'>
									<div className={styles.btn1}>
										<p className={styles.CardBtnText}>Download the App</p>
										<div className={styles.CardBtnIcon}>
											<HiOutlineArrowUpRight />
										</div>
									</div>
								</Link>
								<Link href='/apply-for-charger'>
									<div className={styles.btn2}>
										<p className={styles.CardBtnText}>Partner with us</p>
										<div className={styles.CardBtnIcon}>
											<HiOutlineArrowUpRight />
										</div>
									</div>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
