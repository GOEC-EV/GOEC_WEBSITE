import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import image1 from './assets/feedback1.png';
import image2 from './assets/feedback2.png';
import image3 from './assets/feedback3.png';
import styles from './Testimonials.module.css';
import TestimonialsCard from './TestimonialsCard';
import { GrNext, GrPrevious } from 'react-icons/gr';

export default function Testimonials() {
	const settings = {
		dots: false,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
	};

	const data = [
		{
			name: 'Ashly binu',
			role: 'EV User',
			comment: `“Really impressed by the quality of their service and the recommended EV charging device. Also appreciating the team personally for a proper site inspection at the premises. The entire project was smooth, transparent, and satisfactory”`,
			image: image1,
		},
		{
			name: 'Magesh Cochin',
			role: 'EV User',
			comment: `“It's very amazing , excellent service and best station seen ever before. Expecting more GOEV stations to be open to satisfy the customer. All the very best”`,
			image: image2,
		},
		{
			name: 'Rakesh Ramakrishnan',
			role: 'EV User',
			comment: `“Electric charging helps people in charging cars . Going forward when the number of electric cars increase. We need more charging points. All the good work of GO EC will be beneficial to people.”`,
			image: image3,
		},
	];

	return (
		<div className={styles.warper}>
			<div className=' container_wrapper relative'>
				<div className=' flex justify-center pb-16 '>
					<p className={styles.hading}>Testimonials</p>
				</div>
				<div>
					<Slider {...settings}>
						{data.map((item, index) => (
							<TestimonialsCard
								key={`feedback-${index}`}
								name={item.name}
								role={item.role}
								comment={item.comment}
								image={item.image}
							/>
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
