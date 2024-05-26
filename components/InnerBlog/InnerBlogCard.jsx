import getDate from '@/utilities/getDate';
import Image from 'next/image';
import React from 'react';
import styles from './InnerBlogCard.module.css';
import textToHtml from 'html-react-parser';
import Link from 'next/link';
import encodeTitle from '@/utilities/encodeTitle';

export default function InnerBlogCard({ data, type }) {
	return (
		<Link href={`/${type.toLowerCase()}/${data?.id}_${encodeTitle(`${data?.title?.rendered}`)}`}>
			<div className={styles.warper}>
				<div className=' overflow-hidden rounded-md '>
					<div className={styles.CardsImg}>
						<img
							// src={data.jetpack_featured_media_url}
							src={data.images.large}
							className='w-full h-auto aspect-[1.5] object-cover'
							alt=''
						/>
					</div>
				</div>
				<p className=' text-sm text-blue-700 pt-3'>{getDate(data.date)}</p>
				<div className=' text-[16px] font-[700] leading-normal text-white mt-2'>
					{textToHtml(data.title.rendered)}
				</div>
			</div>
		</Link>
	);
}
