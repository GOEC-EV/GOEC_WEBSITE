import React, { useEffect } from 'react';
import styles from './NewsMenu.module.css';
import { HiOutlineSearch } from 'react-icons/hi';
import { useCategories, useType } from '@/hooks/api';

export default function NewsMenu({ filter, setFilter }) {
	const { data: typeData } = useType({ slug: 'news' });
	const categoriesApi = useCategories({ parent: typeData?.[0]?.id });

	useEffect(() => {
		if (categoriesApi.data?.length && filter === undefined) setFilter(categoriesApi.data[0].id);
	}, [categoriesApi]);

	return (
		<div className={styles.warper}>
			<div className=' container_wrapper  '>
				<div className=' flex justify-between items-center w-full mb-4 '>
					<p className={styles.Text}>GOEC News</p>
				</div>
			</div>
			<div className={styles.menuWarper}>
				<div className=' container_wrapper  '>
					<div className=' block md:hidden mt-6  relative'>
						<input className={styles.search} type='text' placeholder='Search' />
						<div className={styles.searchIcon}>
							<HiOutlineSearch />
						</div>
					</div>
					<div className=' flex w-full  '>
						<ul className={styles.menu}>
							{categoriesApi.data?.map((item, index) => (
								<li
									key={`category-${index}`}
									onClick={() => setFilter(item.id)}
									className={`${styles.menuItem} ${filter === item.id ? styles.active : ''}`}>
									{item.name}
								</li>
							))}
						</ul>
						<div className=' hidden md:block  relative'>
							<input className={styles.search} type='text' placeholder='search' />
							<div className={styles.searchIcon}>
								<HiOutlineSearch />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
