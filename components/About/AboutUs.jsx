import Image from 'next/image';
import styles from './AboutUs.module.css';
// import { motion } from 'framer-motion';
// import { opacityUp } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';
export default function AboutUs() {
	// const [element, controls] = useScroll();
	// const [element2, controls2] = useScroll();
	return (
		<div className={styles.warper}>
			<div className='bg-[#F7F8FB] '>
				<div
					// initial='hidden'
					// animate={controls}
					// variants={opacityUp}
					// transition={{
					// 	ease: 'linear',
					// 	duration: 0.8,
					// }}
					className='container_wrapper py-20 flex flex-col items-start gap-16'>
					<h1 className={styles.About}>About us</h1>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
						<p className={styles.text}>
							We are a future-centric company that is an amalgamation of a skilled workforce, industry experts
							who have the experience, knowledge, and commitment to the revolution of the EV industry. Our
							platform integrates people, possibilities, technology and integrates that with our expertise into a
							systematic network designed to deliver optimized solutions around the world. Steered forward with
							the experience & vision of the management, we are redefining ourselves to match the future needs of
							a sustainable world through GO EC.
						</p>
						<p className={styles.text}>
							A commitment to a cleaner and greener environment, and a complete solution for the electric vehicle
							industry with a diverse focus on manufacturing, infrastructure, and technology.
							<br />
							<br /> GO EC is transforming the future of electric automobiles through a strategic and collective
							network of Electric Vehicle (EV) charging stations across world.
						</p>
					</div>
				</div>
			</div>
			<div>
				<div
					// initial='hidden'
					// animate={controls2}
					// variants={opacityUp}
					// transition={{
					// 	ease: 'linear',
					// 	duration: 0.8,
					// }}
					className='grid grid-cols-1 md:grid-cols-2 gap-16 container_wrapper '>
					<div className='flex flex-col items-start justify-center gap-16'>
						<div className='flex'>
							<h1 className={styles.About}>What we do?</h1>
						</div>
						<p className={styles.text}>
							GO EC Charging is building the infrastructure required to enable EV Revolution in India. We are
							installing electric vehicle chargers in strategic locations all over the nation, enabling EV owners
							to go long distances without worrying about running out of energy. We are partnering with
							businesses that are frequented by EV owners such as restaurants, shopping malls, and other
							commercial locations to install chargers in their parking lots., As charging stations become more
							prevalent, car buyers will be more confident in purchasing EVs as charger worries are resolved.
						</p>
					</div>
					<div className=' overflow-hidden  my-16 '>
						<div className={styles.CardsImg}>
							<Image src='/images/Rectangle2.jpg' className='  ' width={600} height={600} alt='' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
