import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';
import styles from './SliderImage.module.css';
import 'slick-carousel/slick/slick.css';

export default function SliderImage() {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		pauseOnHover: true,
		cssEase: 'linear',
	};
	return (
		<div className={styles.container}>
			<Slider {...settings}>
				<div>
					<Image src='/images/sliderPhon.png' width={700} height={500} alt='' className='w-full h-auto' />
				</div>
				<div>
					<Image src='/images/sliderPhon.png' width={700} height={500} alt='' className='w-full h-auto' />
				</div>
			</Slider>
		</div>
	);
}
