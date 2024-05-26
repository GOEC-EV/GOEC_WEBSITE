import Link from 'next/link';

import textToHtml from 'html-react-parser';
import { useState } from 'react';
import styles from './BlogsSanction.module.css';
// import LearnMoreBtn from '../Utils/LearnMoreBtn';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
// import { GrLinkPrevious, GrLinkNext } from 'react-icons/gr';
// import { motion } from 'framer-motion';
// import { opacityUp } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';
import getDate from '@/utilities/getDate';
import encodeTitle from '@/utilities/encodeTitle';

export default function BlogsSanction({ data }) {
	// const [element, controls] = useScroll();

	const total = 1;
	const [active, setActive] = useState(0);

	// function onPrevHandler() {
	// 	setActive(curr => (curr === 0 ? total - 1 : curr - 1));
	// }

	// function onNextHandler() {
	// 	setActive(curr => (curr === total - 1 ? 0 : curr + 1));
	// }

	return (
		<div className={styles.warper}>
			<div className=' container_wrapper'>
				<div className=' w-full flex py-12'>
					<h1 className={styles.hadarText}>Blogs</h1>
				</div>
				<Link href={`/blogs/${data?.id}_${encodeTitle(`${data?.title?.rendered}`)}`} className='flex items-center'>
					<div
						// initial='hidden'
						// animate={controls}
						// variants={opacityUp}
						// transition={{
						// 	delay: 0,
						// 	ease: 'linear',
						// 	duration: 0.8,
						// }}
						className={`grid grid-cols-1 md:grid-cols-2  gap-16 ${styles.container}`}>
						<div className={styles.images}>
							{[...new Array(total)].map((item, index) => (
								<img
									key={`image-${index}`}
									// src={data.jetpack_featured_media_url}
									src={data.images.large}
									className={`${styles.logo} ${index === active ? styles.active : ''}`}
									alt=''
								/>
							))}
							{/* <div className={styles.imageSlider}>
							<span onClick={onPrevHandler} className={styles.prevIcon}>
								<GrLinkPrevious />
							</span>
							<div className={styles.dots}>
								{[...new Array(total)].map((item, index) => (
									<span
										key={`dot-${index}`}
										className={`${styles.dot} ${index === active ? styles.active : ''}`}
										onClick={() => setActive(index)}></span>
								))}
							</div>
							<span onClick={onNextHandler} className={styles.nextIcon}>
								<GrLinkNext />
							</span>
						</div> */}
						</div>
						<div
							className={`cursor-pointer flex flex-col justify-center gap-8 min-h-[250px] ${styles.blogTexts}`}>
							<div>
								<p className={styles.dateText}>{getDate(data.date)}</p>
								<h1 className={styles.cardHadingText}>{data.title.rendered}</h1>
								<p className={styles.cardNameText}>By {data._embedded.author[0].name}</p>
							</div>
							<div className={styles.dictationText}>{textToHtml(data.excerpt.rendered)}</div>
							<div className={styles.linkTextBtn}>
								<p className={styles.CardBtnText}>Learn more</p>
								<div className={styles.CardBtnIcon}>
									<HiOutlineArrowUpRight />
								</div>
							</div>
						</div>
					</div>
				</Link>
			</div>
		</div>
	);
}
