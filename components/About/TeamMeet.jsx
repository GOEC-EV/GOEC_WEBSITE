import Image from 'next/image';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { ImLinkedin } from 'react-icons/im';
// import { motion } from 'framer-motion';
// import { opacityUp } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';
import styles from './TeamMeet.module.css';
export default function TeamMeet() {
	// const [element, controls] = useScroll();
	const CardList = [
		{
			id: '1',
			img: '/images/profile/MrParambil.jpg',
			name: 'Mr. A P Jafar Parambil',
			position: 'Chairman & Founder',
			link: 'https://www.goecworld.com/apjafar',
		},
		{
			id: '2',
			img: '/images/profile/MrRamnath.jpg',
			name: 'Mr. P G Ramnath',
			position: 'CEO & Co-founder ',
			link: 'https://www.linkedin.com/in/p-g-ramnath-097349192/',
		},
		{
			id: '3',
			img: '/images/profile/B.jpg',
			name: 'Ms. Zara Elizabeth',
			position: 'Director',
			link: 'https://www.linkedin.com/in/neena-elizabeth/',
		},
	];
	return (
		<div className={styles.warper}>
			<div className='  container_wrapper   '>
				<h1 className={styles.hading}>Meet the Team</h1>
				<div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 '>
					{CardList.map(item => (
						<div
							// initial='hidden'
							// animate={controls}
							// variants={opacityUp}
							// transition={{
							// 	delay: 0.3 * item.id,
							// 	ease: 'linear',
							// 	duration: 0.5,
							// }}
							key={item.id}
							className={styles.Card}>
							<div className=' overflow-hidden h-[320px]'>
								<div className={styles.CardsImg}>
									<Image src={item.img} className=' ' width={500} height={500} alt='' />
								</div>
							</div>
							<div className={styles.Linkedin}>
								<ImLinkedin />
							</div>
							<a href={item.link} target='_blank' className={styles.CardLink} rel='noreferrer'>
								View more <HiOutlineArrowUpRight />
							</a>

							<p className={styles.name}>{item.name}</p>
							<p className={styles.position}>{item.position}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
