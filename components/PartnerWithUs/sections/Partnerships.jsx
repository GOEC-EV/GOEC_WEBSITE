import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import image1 from '../assets/partner1.png';
import image2 from '../assets/partner2.png';
import image3 from '../assets/partner3.png';
import styles from './Partnerships.module.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Partnerships() {
	const settings = {
		className: `w-full mt-[60px] md:mt-[80px] ${styles.slider}`,
		centerMode: true,
		infinite: true,
		slidesToShow: 1,
		variableWidth: true,
		speed: 500,
		dots: true,
		arrows: false,
		dotsClass: styles.slideDot,
	};

	return (
		<section className={`pb-[90px] md:pt-[20px] ${styles.container}`}>
			<main className='container_wrapper'>
				<h1 className='font-head2 font-[500] leading-normal text-[24px] md:text-[28px] text-[#1B1B1B] mb-2'>
					Some Examples of Successful GO EC FOCO Partnerships
				</h1>
				<span className={styles.line}></span>
			</main>
			<Slider {...settings}>
				<figure className='h-auto w-[75vw] md:w-[1000px] aspect-[2/1] border-none outline-none'>
					<Image src={image1} alt='Partners' width={1200} height={630} className='h-full w-full object-cover' />
				</figure>
				<figure className='h-auto w-[75vw] md:w-[1000px] aspect-[2/1] border-none outline-none'>
					<Image src={image2} alt='Partners' width={1200} height={630} className='h-full w-full object-cover' />
				</figure>
				<figure className='h-auto w-[75vw] md:w-[1000px] aspect-[2/1] border-none outline-none'>
					<Image src={image3} alt='Partners' width={1200} height={630} className='h-full w-full object-cover' />
				</figure>
			</Slider>
		</section>
	);
}
