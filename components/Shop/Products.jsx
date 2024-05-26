import React from 'react';
import Product from './Product';
import styles from './Products.module.css';
import Breadcrumbs from '../Utils/Breadcrumbs';

export default function Products({ name, data }) {
	function getUrl() {
		return `/shop/${name.toLowerCase().replace(/[ ]+/g, '-')}`;
	}

	return (
		<section>
			<Breadcrumbs
				links={[
					{
						name: 'Home',
						link: '/',
					},
					{
						name: 'Shop',
						link: '/shop',
					},
					{
						name: name,
						link: getUrl(),
					},
				]}
			/>
			<div className='bg-[#2C2C2C] pt-[60px] pb-[100px]'>
				<div className='container_wrapper'>
					<div className='mb-10 flex  w-full justify-center items-center flex-col gap-2'>
						<h1 className='text-[32px] text-[#FFFFFF] font-head font-[500]'>
							{name}
							<span className='dot dot8'></span>
							<br />
							<span className={styles.line}></span>
						</h1>
					</div>
					<div className='  grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 grid-flow-row'>
						{data.map(item => (
							<Product key={item.id} ProductData={item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
