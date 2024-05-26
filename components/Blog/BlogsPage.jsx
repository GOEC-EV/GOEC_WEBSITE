// import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumbs from '../Utils/Breadcrumbs';
import BlogsCard from './BlogsCard';
import BlogsSanction from './BlogsSanction';
import styles from './BlogsPage.module.css';
// import { motion } from 'framer-motion';
// import { veal, fromUp } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';
import LoadingCircle from '../Utils/LoadingCircle';
import { usePosts, useType } from '@/hooks/api';

export default function BlogsPage() {
	// const [element, controls] = useScroll();
	const [page, setPage] = useState(1);
	const [blogs, setBlogs] = useState([]);
	const { data: typeData } = useType({ slug: 'blogs' });
	const { data, isLoading } = usePosts({ category: typeData?.[0]?.id, limit: 10, page });

	useEffect(() => {
		if (data?.length) setBlogs(prev => [...prev, ...data]);
	}, [data]);

	return (
		<div className=''>
			{isLoading ? <LoadingCircle /> : null}
			<Breadcrumbs
				links={[
					{
						name: 'Home',
						link: '/',
					},
					{
						name: 'Blogs',
						link: '/blogs',
					},
				]}
			/>
			{blogs?.length ? (
				<Fragment>
					<BlogsSanction data={blogs[0]} />
					<div style={{ backgroundColor: '#2C2C2C', padding: '60px 0' }}>
						<div className=' grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-12  container_wrapper  '>
							{blogs.map((item, index) => (
								<div
									key={`blog-${index}`}
									// initial='hidden'
									// animate={controls}
									// variants={fromUp}
									// className='h-full'
									// transition={{
									// 	delay: 0.5,
									// 	ease: 'linear',
									// 	duration: 0.5,
									// }}
								>
									<BlogsCard data={item} />
								</div>
							))}
						</div>
						<div className=' flex justify-center py-5 pt-12 w-screen'>
							<p className={styles.linkText} onClick={() => setPage(prev => prev + 1)}>
								<span className={styles.CardBtnText}>View More</span>
							</p>
						</div>
					</div>
				</Fragment>
			) : null}
		</div>
	);
}
