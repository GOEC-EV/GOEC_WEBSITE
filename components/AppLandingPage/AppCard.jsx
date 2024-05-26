import Image from 'next/image';
import React from 'react';
import { GoLocation } from 'react-icons/go';
import styles from './AppCard.module.css';
import { motion } from 'framer-motion';
import { reveal, veal } from '../../data/Animations';
import { useScrollMobile } from '../../hooks/useScrollMobile';
export default function AppCard({ mod, Img, text }) {
	const [element, controls] = useScrollMobile();
	return (
		<div ref={element} className={`${mod === 'left' ? styles.warper2 : styles.warper}`}>
			<div>
				{mod === 'left' ? (
					<motion.div
						className={styles.warperDiv}
						initial='hidden'
						animate={controls}
						variants={reveal}
						transition={{
							ease: 'linear',
							duration: 1,
						}}>
						<div className={styles.img}>
							<Image src={Img} width={750} height={500} alt='' />
						</div>
						<div className={styles.LefIconDiv}>
							<div className={styles.icon}>
								<GoLocation />
							</div>
							<p className={styles.text}>{text}</p>
						</div>
					</motion.div>
				) : (
					<motion.div
						className={styles.warperDiv}
						initial='hidden'
						animate={controls}
						variants={veal}
						transition={{
							ease: 'linear',
							duration: 1,
						}}>
						<div className={styles.iconDiv}>
							<div className={styles.icon}>
								<GoLocation />
							</div>
							<p className={styles.text}>{text}</p>
						</div>
						<div className={styles.img}>
							<Image src={Img} width={750} height={500} alt='' />
						</div>
					</motion.div>
				)}
			</div>
		</div>
	);
}
