import { HiArrowUpRight } from 'react-icons/hi2';
import styles from './ChargingSlider.module.css';
import React, { useEffect, useState } from 'react';

export default function ChargingSlider() {
	const [timer, setTimer] = useState();
	const [clicks, setClicks] = useState(0);
	const [active, setActive] = useState([0]);

	const data = [
		{
			title: 'Station management with GO EC CMS',
			text: 'GO EC charging station CMS allows users to Manage and monitor their charging stations easily from anywhere in the world.',
			link: '/',
			image: '/images/home/slider1.jfif',
		},
		{
			title: 'Hassle-free charging experience',
			text: 'Find, locate, reserve, and charge conveniently with GO EC charging App.',
			link: '/',
			image: '/images/home/slider2.jfif',
		},
		{
			title: 'Turnkey Project Implementation',
			text: 'From charging station paper works to project completion, our team of industry experts takes care of anything and everything.',
			link: '/',
			image: '/images/home/slider3.jfif',
		},
		{
			title: 'Digital marketing, 24/7 customer support',
			text: 'GOEC offers effective digital marketing to bring customers to your charging station with unparallel customer support.',
			link: '/',
			image: '/images/home/slider4.jfif',
		},
		{
			title: 'OCPP-compliant Chargers',
			text: 'GO EC manufactures its state-of-the-art Fast & slow charges, certified by ARAI and OCPP 1.6 compliant.',
			link: '/',
			image: '/images/home/slider5.jfif',
		},
	];

	useEffect(() => {
		if (timer) clearInterval(timer);
		setTimer(
			setInterval(() => {
				setActive(prev => {
					if (prev.at(-1) === data.length - 1) return [...prev, 0];
					return [...prev, prev.at(-1) + 1];
				});
			}, 2000)
		);
		return () => clearInterval(timer);
	}, [clicks]);

	return (
		<div className=''>
			<div className={styles.chargingSliders}>
				{data.map((item, index) => (
					<Slider
						active={index === active.at(-1)}
						vanish={index === active.at(-2)}
						key={`slide-${index}`}
						title={item.title}
						text={item.text}
						image={item.image}
						link={item.link}
					/>
				))}
			</div>
			<p className={styles.chargingSliderButtons}>
				{data.map((item, index) => (
					<span
						className={active.at(-1) === index ? styles.active : ''}
						onClick={() => {
							setActive(prev => [...prev, index]);
							setClicks(prev => prev + 1);
						}}
						key={`slide-btn-${index}`}></span>
				))}
			</p>
		</div>
	);
}

function Slider({ active, vanish, title, text, link, image }) {
	return (
		<summary className={`${styles.slider} ${active ? styles.active : ''} ${vanish ? styles.vanish : ''}`}>
			<aside className={styles.textArea}>
				<h1 className={styles.sliderTitle}>{title}</h1>
				<p className={styles.sliderPara}>{text}</p>
				<button className={styles.Sliderbutton} onClick={() => {}}>
					<p>Learn more</p>
					<HiArrowUpRight />
				</button>
			</aside>
			<aside className={styles.imageArea}>
				<img src={image} alt='Slider' className='h-full w-auto object-cover' />
			</aside>
		</summary>
	);
}
