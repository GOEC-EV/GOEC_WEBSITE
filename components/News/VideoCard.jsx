import React from 'react';
import getDate from '@/utilities/getDate';
import styles from './VideoCard.module.css';

export default function VideoCard({ active, data, onClick }) {
	return (
		<div className={`${styles.warper} ${active ? styles.active : ''}`} onClick={onClick}>
			<div className='w-1/4'>
				<img
					src={data?.snippet?.thumbnails?.high?.url}
					alt={data?.snippet?.title}
					className='h-full w-full object-cover'
				/>
			</div>
			<div className={styles.titleDiv}>
				<div>
					<p className={styles.title}>{data?.snippet?.title}</p>
					<div className=' flex gap-1 py-2'>
						{/* <p className={styles.subtitle}>473k Views</p>
						<p className={styles.subtitle}>&bull;</p> */}
						<p className={styles.subtitle}>{getDate(data?.snippet?.publishedAt)}</p>
					</div>
				</div>
				{/* <p className={styles.subtitle}>2:03</p> */}
			</div>
		</div>
	);
}
