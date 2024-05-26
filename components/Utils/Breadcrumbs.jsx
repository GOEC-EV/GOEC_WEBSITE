import Link from 'next/link';
import React, { Fragment } from 'react';
import styles from './Breadcrumbs.module.css';

export default function Breadcrumbs({ mod, links }) {
	return (
		<div className={` w-screen ${mod === 'white' ? ' bg-white' : 'bg-[#333333] '} `}>
			<div className=' container_wrapper pt-0 '>
				<div className={`${styles.links} ${mod === 'white' ? styles.white : styles.black}`}>
					{links?.map((item, index) => (
						<Fragment key={`link-${index}`}>
							<Link href={item?.link} className={styles.link}>
								{item?.name}
							</Link>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-5 h-5'
								viewBox='0 0 20 20'
								height='auto'
								width='auto'
								fill='currentColor'>
								<path
									fillRule='evenodd'
									d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
									clipRule='evenodd'
								/>
							</svg>
						</Fragment>
					))}
				</div>
			</div>
		</div>
	);
}
