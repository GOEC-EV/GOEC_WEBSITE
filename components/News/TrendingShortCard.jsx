import React from 'react';
import Image from 'next/image';
import styles from './TrendingShorts.module.css';
import Link from 'next/link';
import getDate from '@/utilities/getDate';

export default function TrendingShortCard({ data }) {
	return (
		<Link href={`https://www.youtube.com/shorts/${data?.id?.videoId}`} target='_blank'>
			<div className={styles.Card}>
				<div className=' overflow-hidden '>
					<div className={styles.CardsImg}>
						<img src={data?.snippet?.thumbnails?.large?.url} alt='' />
					</div>
				</div>
				<div className={styles.TextSection}>
					<p className={styles.Text}>{data?.snippet?.title}</p>
					<p className={styles.SubText}>{data?.snippet?.description}</p>
					<p className={styles.DateText}>Date : {getDate(data?.snippet?.publishTime)}</p>
				</div>
			</div>
		</Link>
	);
}
