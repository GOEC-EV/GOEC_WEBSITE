import React, { useState } from 'react';
import Breadcrumbs from '../Utils/Breadcrumbs';
import LoadingCircle from '../Utils/LoadingCircle';
import LatestUpdatesPase from './LatestUpdatesPase';
import NewsCardPage from './NewsCardPage';
import NewsMenu from './NewsMenu';
import TrendingShorts from './TrendingShorts';
import VideoCardPage from './VideoCardPage';

export default function NewsPage() {
	const [filter, setFilter] = useState();
	const [isLoading, setIsLoading] = useState(false);

	return (
		<div style={{ backgroundColor: 'var(--bgDark)' }}>
			{isLoading ? <LoadingCircle /> : null}
			<Breadcrumbs
				links={[
					{
						name: 'Home',
						link: '/',
					},
					{
						name: 'News',
						link: '/news',
					},
				]}
			/>
			<NewsMenu filter={filter} setFilter={setFilter} />
			<NewsCardPage filter={filter} setIsLoading={setIsLoading} />
			<TrendingShorts setIsLoading={setIsLoading} />
			<LatestUpdatesPase setIsLoading={setIsLoading} />
			<VideoCardPage setIsLoading={setIsLoading} />
		</div>
	);
}
