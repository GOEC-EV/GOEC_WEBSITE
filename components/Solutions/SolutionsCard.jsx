import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { opacityUp } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';
import styles from './SolutionsCard.module.css';
export default function SolutionsCard({ mod, img, text, description }) {
	// const [element, controls] = useScroll();
	return (
		<div className={styles.warper}>
			<div className=' container_wrapper'>
				<div className=' grid grid-cols-1 md:grid-cols-2  gap-16 '>
					{mod == 'left' ? (
						<>
							<div
								// initial='hidden'
								// animate={controls}
								// variants={opacityUp}
								// transition={{
								// 	delay: 0.5,
								// 	ease: 'linear',
								// 	duration: 0.5,
								// }}
								className='col-span-1'>
								<div className=' overflow-hidden rounded-md'>
									<div className={styles.CardsImg}>
										<Image src={img} className='w-full h-auto ' width={550} height={500} alt='' />
									</div>
								</div>
							</div>
							<div
								// initial='hidden'
								// animate={controls}
								// variants={opacityUp}
								// transition={{
								// 	delay: 0.5,
								// 	ease: 'linear',
								// 	duration: 0.5,
								// }}
								className=' flex flex-col justify-center'>
								<div className=' flex pb-10'>
									<h1 className={styles.hadarText}>
										{text}
										<span className={styles.dot}></span>
									</h1>
								</div>

								<p className={styles.subText}>{description}</p>
							</div>
						</>
					) : (
						<>
							<div
								// initial='hidden'
								// animate={controls}
								// variants={opacityUp}
								// transition={{
								// 	delay: 0.5,
								// 	ease: 'linear',
								// 	duration: 0.5,
								// }}
								className=' flex flex-col justify-center'>
								<div className=' flex pb-10'>
									<h1 className={styles.hadarText}>{text}</h1>
								</div>

								<p className={styles.subText}>{description}</p>
							</div>
							<div
								// initial='hidden'
								// animate={controls}
								// variants={opacityUp}
								// transition={{
								// 	delay: 0.5,
								// 	ease: 'linear',
								// 	duration: 0.5,
								// }}
								className='col-span-1'>
								<div className=' overflow-hidden rounded-md'>
									<div className={styles.CardsImg}>
										<Image src={img} className='w-full h-auto ' width={550} height={500} alt='' />
									</div>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
