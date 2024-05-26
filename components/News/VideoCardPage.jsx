import React, { useEffect, useState } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import VideoCard from './VideoCard';
import styles from './VideoCardPage.module.css';
import ReactPlayer from 'react-player';
import { useYoutube } from '@/hooks/api';

export default function VideoCardPage({ setIsLoading }) {
	const { data, isLoading } = useYoutube();
	const [current, setCurrent] = useState('');
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(true);
	}, []);

	useEffect(() => {
		if (data?.videos?.[0]?.id?.videoId) {
			if (!current) setCurrent(data?.videos?.[0]?.id?.videoId);
		}
	}, [data]);

	useEffect(() => {
		setIsLoading(isLoading);
	}, [isLoading]);

	return (
		<div className={styles.warper}>
			<div className=' container_wrapper  '>
				<div className='  grid grid-cols-1 md:grid-cols-2  lg:grid-cols-7  '>
					<div className={`lg:col-span-4 ${styles.player}`}>
						{isLoaded ? (
							<ReactPlayer url={`https://www.youtube.com/watch?v=${current}`} width='100%' height='100%' />
						) : null}
					</div>
					<div className='  lg:col-span-3 mt-6 md:mt-0 '>
						<p className={styles.UpdatesText}>
							<BsPlayFill />
							GOEC Latest News on
							<img src='/images/icons/youtube-icon.png' alt='YouTube' className='h-[25px] w-auto ml-2' />
						</p>
						<div className='max-h-[500px] overflow-x-hidden overflow-y-auto'>
							{data?.videos?.map((item, index) => (
								<VideoCard
									key={`video-${index}`}
									data={item}
									onClick={() => setCurrent(item?.id?.videoId)}
									active={current === item?.id?.videoId}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
