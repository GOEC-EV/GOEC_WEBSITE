import React, { useEffect } from 'react';
import textToHtml from 'html-react-parser';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import NewsCard from './NewsCard';
import styles from './NewsCardPage.module.css';
import Link from 'next/link';
import getDate from '@/utilities/getDate';
import encodeTitle from '@/utilities/encodeTitle';
import { usePosts } from '@/hooks/api';

export default function NewsCardPage({ filter, setIsLoading }) {
	const newsApi = usePosts({ category: filter, limit: 4, page: 1 });

	useEffect(() => {
		setIsLoading(newsApi.isLoading);
	}, [newsApi.isLoading]);

	return (
		<div className={styles.warper}>
			<div className=' container_wrapper  '>
				{!newsApi.isLoading ? (
					<div className=' grid mt-8 grid-cols-1 md:grid-cols-2  lg:grid-cols-5 md:gap-8 lg:gap-16 '>
						<div className='lg:col-span-3'>
							<MainNews data={newsApi.data?.[0]} filter={filter} />
						</div>
						<div className=' mt-12 md:mt-0  lg:col-span-2'>
							{newsApi.data?.slice(1, 4)?.map((item, index) => (
								<NewsCard key={`news-${index}`} data={item} filter={filter} />
							))}
						</div>
					</div>
				) : null}
			</div>
		</div>
	);
}

function MainNews({ data }) {
	return (
		<Link href={`/news/${data?.id}_${encodeTitle(`${data?.title?.rendered}`)}`}>
			<div className={styles.Card}>
				<div className=' overflow-hidden relative '>
					<div className={styles.CardsImg}>
						<img
							// src={data?.jetpack_featured_media_url}
							src={data?.images.large}
							alt=''
							className='w-full h-auto aspect-[1.75] object-cover'
						/>
					</div>
					<p className={styles.Industrial}>{data?._embedded['wp:term'][0][0].name}</p>
					<div className=' absolute left-0 bottom-0 px-5  z-50 hidden md:block'>
						
						<div className=' w-full flex justify-between py-5'>
							<p className={styles.DateTitle}>Date : {getDate(data?.date)}</p>
							
						</div>
					</div>
				</div>
				<div style={{ padding: '5px' }} className={styles.title}>{textToHtml(data?.title?.rendered || '')}</div>
				
				<div className='md:hidden mt-6'>
					<p className={styles.DateTitle}>Date : {getDate(data?.date)}</p>
					<br />
					<div className={styles.title}>{textToHtml(data?.title?.rendered || '')}</div>
				</div>
				<p className={styles.Text}>By : {data?._embedded.author[0].name}</p>
				<div className={styles.SubText}>{textToHtml(data?.excerpt?.rendered || '')}</div>
				<div className={styles.button}>
					<Link href={`/news/${data?.id}_${encodeTitle(`${data?.title?.rendered}`)}`}>
						Read More <HiOutlineArrowUpRight />
					</Link>
				</div>
				<div className={styles.More} style={{ paddingTop: '5px' }}>
								<p>Read More</p>
								<HiOutlineArrowUpRight />
							</div>
			</div>
		</Link>
	);
}
