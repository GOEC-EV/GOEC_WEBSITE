import Link from 'next/link';
import React from 'react';
import styles from './LatestUpdatesCard.module.css';
import textToHtml from 'html-react-parser';
import getDate from '@/utilities/getDate';
import encodeTitle from '@/utilities/encodeTitle';

export default function LatestUpdatesCard({ data }) {
	return (
		<Link href={`/news/${data?.id}_${encodeTitle(`${data?.title?.rendered}`)}`}>
			<div className={styles.warper}>
				<div className=' grid grid-cols-1 md:grid-cols-4 gap-5 pb-4'>
					<div className=' col-span-1'>
						<div className=' overflow-hidden h-full'>
							<div className={` ${styles.CardsImg}  mx-3 md:mx-0 h-full flex items-center w-full`}>
								<img
									// src={data?.jetpack_featured_media_url}
									src={data?.images.large}
									alt=''
									className='w-full h-full object-cover'
								/>
							</div>
						</div>
					</div>
					<div className=' md:col-span-3 flex flex-col justify-between pl-3 '>
						<div className={styles.title}>{textToHtml(data?.title?.rendered)}</div>
						<div className=' flex gap-5 py-3 '>
							<p className={styles.name}>
								By :<a className={styles.nameLink}> {data._embedded.author[0].name} </a>
							</p>
							<p className={styles.name}>Date : {getDate(data?.date)}</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
