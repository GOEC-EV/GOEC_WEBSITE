import React from 'react';
import styles from './TeamCard.module.css';
export default function TeamCard() {
	const TeamList = [
		{ id: '1', text: 'Innovative Way of Thinking' },
		{ id: '2', text: 'Exciting and Challenging Work' },
		{ id: '3', text: 'Opportunities for Career Growth' },
		{ id: '4', text: 'Being Part of a Community' },
		{ id: '5', text: 'exposure to Cutting-Edge Technology' },
		{ id: '6', text: 'Flexibility and Autonomy' },
		{ id: '7', text: 'Potential for Stock Options' },
		{ id: '8', text: 'Comprehensive Health Plans' },
	];
	return (
		<div className={styles.warper}>
			<div className=' container_wrapper  '>
				<p className={styles.hading}> Join our team</p>
				<p className={styles.subTitle}>
					{`At GO EC, the industry's most talented engineers, designers, and thought leaders are shaping the future
					of transportation.`}
				</p>
				<div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-4 gap-x-16'>
					{TeamList.map(item => (
						<div key={item.id} className=' flex items-center gap-4'>
							<div className={styles.icon}>
								<svg width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										fillRule='evenodd'
										clipRule='evenodd'
										d='M11.615 1.20566L4.46001 8.12066L2.57001 6.08066C2.39125 5.92471 2.16495 5.83389 1.92797 5.823C1.691 5.8121 1.45732 5.88177 1.26501 6.02066C1.07894 6.15137 0.948211 6.34668 0.898296 6.56852C0.848381 6.79037 0.882858 7.02285 0.995008 7.22066L3.24501 10.8957C3.47001 11.2257 3.86001 11.4357 4.28001 11.4357C4.70001 11.4357 5.07501 11.2257 5.30001 10.8957C5.66001 10.4307 12.53 2.22566 12.53 2.22566C13.43 1.32566 12.335 0.500658 11.63 1.20566H11.615Z'
										fill='#635BFF'
									/>
								</svg>
							</div>

							<p className={styles.IconText}>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
