import getDate from '@/utilities/getDate';
import React, { Fragment, useEffect } from 'react';
import Button from '../Utils/Button';
import LatestUpdatesCard from './LatestUpdatesCard';
import styles from './LatestUpdatesPase.module.css';
import SliderImage from './SliderImage';
import textToHtml from 'html-react-parser';
import encodeTitle from '@/utilities/encodeTitle';
import { usePosts, useType } from '@/hooks/api';

export default function LatestUpdatesPase({ setIsLoading }) {
	const { data } = useType({ slug: 'news' });
	const newsApi = usePosts({ category: data?.[0]?.id, limit: 100, page: 1 });

	useEffect(() => {
		setIsLoading(newsApi.isLoading);
	}, [newsApi.isLoading]);

	return (
		<div className={styles.warper}>
			<div className=' container_wrapper  '>
				<div className=' grid mt-8 grid-cols-1 md:grid-cols-2  lg:grid-cols-7 md:gap-8 lg:gap-16 '>
					<div className='  lg:col-span-4'>
						{newsApi.data?.length ? (
							<Fragment>
								{newsApi.data.slice(0, 1).map((item, index) => (
									<MainNews key={`news-${index}`} data={item} />
								))}
							</Fragment>
						) : null}
					</div>
					<div className=' mt-8 md:mt-0  lg:col-span-3'>
						<p className={styles.UpdatesText}>Latest Updates</p>
						{newsApi.data?.length ? (
							<div
								className={`grid grid-cols-2 md:grid-cols-1 max-h-[405px] overflow-x-hidden overflow-y-auto ${styles.newsList}`}>
								{newsApi.data.slice(1).map((item, index) => (
									<LatestUpdatesCard key={`news-${index}`} data={item} />
								))}
							</div>
						) : null}
						<div className='h-[80px]'></div>
						<SliderImage />
					</div>
				</div>
			</div>
		</div>
	);
}

function MainNews({ data }) {
	return (
		<div className={styles.Card}>
			<div className=' overflow-hidden '>
				<div className={styles.CardsImg}>
					<img
						// src={data?.jetpack_featured_media_url}
						src={data?.images.large}
						alt=''
						className='w-full h-auto'
					/>
				</div>
			</div>
			<div className=' flex gap-5 py-3 '>
				<p className={styles.name}>
					By :<a className={styles.nameLink}> {data._embedded.author[0].name}</a>
				</p>
				<p className={styles.name}>Date : {getDate(data?.date)}</p>
			</div>
			<div className={styles.Text}>{textToHtml(data?.title?.rendered)}</div>
			<div className={`${styles.body} html-body`}>{textToHtml(data?.content?.rendered)}</div>
			<div className={`flex items-center justify-center mt-8 ${styles.button}`}>
				<Button link={`/news/${data?.id}_${encodeTitle(`${data?.title?.rendered}`)}`} text='Read more' />
			</div>
		</div>
	);
}
