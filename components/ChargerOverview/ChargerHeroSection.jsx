import Image from 'next/image';
import React from 'react';
import styles from './ChargerHeroSection.module.css';

export default function ChargerHeroSection({ data }) {
	return (
		<div className='relative'>
			{data?.coverImage?.length > 0 ? (
				<img
					src={data?.coverImage[0]?.public}
					alt={data?.coverImage[0]?.public}
					className='w-full h-[400px] object-cover absolute top-0 left-0'
				/>
			) : (
				<p>no cover image</p>
			)}

			<div className='pt-[200px] z-[2] relative'>
				<div className='container_wrapper flex gap-[60px]'>
					{data?.images?.length > 0 ? <img src={data?.images[0]?.public} alt={data?.images[0]?.public} className={styles.image} /> : <p>No image</p>}
					
					<aside>
						<div className='bg-[#FFFAEA] py-1 px-4 inline-flex rounded-full items-center gap-2'>
							<svg width='18' height='17' viewBox='0 0 18 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M3.90794 16.4893L5.27361 10.5854L0.693359 6.61448L6.74434 6.08922L9.09749 0.521484L11.4507 6.08922L17.5016 6.61448L12.9214 10.5854L14.287 16.4893L9.09749 13.3588L3.90794 16.4893Z'
									fill='#F2994A'
								/>
							</svg>
							<p className='text-[18px] leading-normal font-[500] text-[#F2994A]'>{data?.rating}</p>
						</div>
						<h1 className='text-[#FFFFFF] leading-normal text-[32px] font-[600] mt-3'>{data?.name}</h1>
						<p className='text-[#F2F2F2] leading-normal text-[24px] mt-1'>
							{data?.location_name} - <br /> {data?.pin}
						</p>
					</aside>
				</div>
			</div>
		</div>
	);
}
