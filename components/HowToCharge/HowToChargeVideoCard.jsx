import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import ReactPlayer from 'react-player';
import styles from './HowToChargeVideoCard.module.css';

export default function HowToChargeVideoCard() {
	const [domLoaded, setDomLoaded] = useState(false);
	useEffect(() => {
		setDomLoaded(true);
	}, []);
	return (
		<>
			{domLoaded && (
				<div className={styles.warper}>
					<div className=' container_wrapper'>
						<div className=' grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4'>
							<div className=' md:col-span-2 lg:col-span-1'>
								<p className={styles.AppHading}>
									See how to <span className='inline-block h-[10px] w-[10px] bg-[#007AFF] mb-4'></span> <br />{' '}
									<span className='text-[#007AFF]'>charge</span> in this <br /> 30-second <br /> video.
								</p>
							</div>

							<div className=' w-full h-[200%] md:col-span-3 lg:col-span-3 md:translate-y-20 border-b-4  border-[#13F2AD]'>
								<ReactPlayer
									width='100%'
									height='100%'
									controls='true'
									url='https://www.youtube.com/watch?v=fC5gQUp1i0w'
								/>
								{/* <Image
              src="/images/video.jpg"
              width={800}
              height={500}
              alt=""
              className="w-full h-auto"
            /> */}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
