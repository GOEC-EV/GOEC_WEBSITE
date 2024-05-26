import React from 'react';
import styles from './OurValues.module.css';
// import { motion } from 'framer-motion';
// import { opacityUp } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';
export default function OurValues() {
	// const [element, controls] = useScroll();
	const CardList = [
		{
			id: '1',
			hading: 'FUTURE FOCUSED',
			text: 'We believe in joining hands today for a sustainable future. Our strategies are aligned with the requirements of the future and designing them in an efficient manner is the outline for all our operations.',
		},
		{
			id: '2',
			hading: 'HONESTY & TRANSPARENCY',
			text: 'We value honesty and transparency in all of our collaborations since it assures collective strength to bring about qualitative changes and maintain a productive and smooth operational network.',
		},
		{
			id: '3',
			hading: 'COLLABORATIVE POWER',
			text: 'We plan to harness the power of collaboration and profit sharing by associating with stakeholders who are committed to teamwork and share a common vision. A mutual understanding and cooperative culture is promoted.',
		},
	];
	return (
		<div className={styles.warper}>
			<div className=' container_wrapper'>
				<div className=' grid grid-cols-2  md:grid-cols-4 gap-16 my-8 '>
					<div
					// initial='hidden'
					// animate={controls}
					// variants={opacityUp}
					// transition={{
					// 	delay: 0,
					// 	ease: 'linear',
					// 	duration: 0.5,
					// }}
					>
						<p className={styles.hading}>
							Our
							<br /> values
						</p>
					</div>

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
							className=' pl-2 '>
							<div className=' w-12 h-12 flex items-center justify-center rounded-full ml-5 p-3  bg-blue-500 mb-4 '>
								<svg width='21' height='21' viewBox='0 0 21 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M2.07345 13.3525V17.4901C2.07345 18.4456 4.70003 19.2191 7.9401 19.2191C11.1802 19.2191 13.8068 18.4447 13.8068 17.4901V13.3525M7.9401 4.13342C4.2374 4.13342 1.23535 4.88352 1.23535 5.80961C1.23535 6.7357 4.2374 7.4858 7.9401 7.4858M1.23535 5.80961V10.0001C1.23535 10.8491 4.2374 11.6763 7.9401 11.6763M13.8068 13.3525C17.0116 13.3525 19.6734 12.5253 19.6734 11.6763V3.29533M8.06917 3.29533V11.8154M7.9401 7.4858C7.9401 8.33479 10.6664 9.16199 13.8713 9.16199C17.0753 9.16199 19.6734 8.33479 19.6734 7.4858M13.8068 13.3525C13.8068 12.4264 11.1802 11.6763 7.9401 11.6763C4.70003 11.6763 2.07345 12.4264 2.07345 13.3525C2.07345 14.2786 4.70003 15.0286 7.9401 15.0286C11.1802 15.0286 13.8068 14.2786 13.8068 13.3525ZM19.6734 3.29533C19.6734 2.36923 17.0753 1.61914 13.8713 1.61914C10.6664 1.61914 8.06917 2.36923 8.06917 3.29533C8.06917 4.22142 10.6673 4.97152 13.8713 4.97152C17.0753 4.97152 19.6734 4.22142 19.6734 3.29533Z'
										stroke='#13F2AD'
										strokeWidth='1.67619'
									/>
								</svg>
							</div>
							<h1 className=' font-bold  text-white py-1  border-l-4 border-blue-500  pl-5'>{item.hading}</h1>
							<p className=' pl-5  text-gray-400 '>{item.text}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
