import Link from 'next/link';
import React from 'react';
import textToHtml from 'html-react-parser';
import styles from './NewsCard.module.css';
import getDate from '@/utilities/getDate';
import encodeTitle from '@/utilities/encodeTitle';
import { useCategory } from '@/hooks/api';

export default function NewsCard({ data, filter }) {
	const categoryApi = useCategory({ id: filter });

	return (
		<Link href={`/news/${data?.id}_${encodeTitle(`${data?.title?.rendered}`)}`}>
			<div className={styles.warper}>
				<div className='w-[200px] md:w-[250px] shrink-0'>
					<div className='h-full overflow-hidden relative '>
						<span className={styles.badge}>{categoryApi.data?.name}</span>
						<span className={styles.date}>Date : {getDate(data?.date)}</span>
						<div className={styles.CardsImg}>
							<img
								// src={data?.jetpack_featured_media_url}
								src={data?.images.large}
								alt=''
							/>
						</div>
					</div>
				</div>
				<div className='flex-1 overflow-hidden'>
					<div className={styles.titleDiv}>
						<div className={styles.title}>{textToHtml(data?.title?.rendered || '')}</div>
						<div className={styles.subtitle}>{textToHtml(data?.excerpt?.rendered || '')}</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
