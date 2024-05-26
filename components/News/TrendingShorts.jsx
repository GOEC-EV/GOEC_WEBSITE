import React, { useEffect } from 'react';
import { GrNext, GrPrevious } from 'react-icons/gr';
import 'slick-carousel/slick/slick.css';
import Slider from 'react-slick';
import TrendingShortCard from './TrendingShortCard';
import styles from './TrendingShorts.module.css';
import { useYoutube } from '@/hooks/api';

export default function TrendingShorts({ setIsLoading }) {
	const { data, isLoading } = useYoutube();

	const settings = {
		dots: false,
		centerMode: true,
		infinite: true,
		centerPadding: '50px',
		speed: 500,
		slidesToShow: 4,
		autoplay: false,
		autoplaySpeed: 1500,
		pauseOnHover: true,
		cssEase: 'linear',
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	useEffect(() => {
		setIsLoading(isLoading);
	}, [isLoading]);

	return (
		<div className={styles.warper}>
			<div className=' container_wrapper pt-4 pb-4 md:pb-12 '>
				<p className={styles.hading}>
					<svg width='33' height='20' viewBox='0 0 33 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M2.41875 19.6875L0.1875 17.4563L11.9812 5.58281L18.3562 11.9578L26.6438 3.75H22.5V0.5625H32.0625V10.125H28.875V5.98125L18.3562 16.5L11.9812 10.125L2.41875 19.6875Z'
							fill='#007AFF'
						/>
					</svg>
					Trending Shorts
				</p>
				<div>
					<Slider {...settings}>
						{data?.shorts?.map((item, index) => (
							<TrendingShortCard key={`short-${index}`} data={item} />
						))}
					</Slider>
				</div>
			</div>
		</div>
	);
}

function SampleNextArrow(props) {
	const { onClick } = props;
	return (
		<div className={styles.nextArrow} onClick={onClick}>
			<GrNext />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { onClick } = props;
	return (
		<div className={styles.prevArrow} onClick={onClick}>
			<GrPrevious />
		</div>
	);
}
