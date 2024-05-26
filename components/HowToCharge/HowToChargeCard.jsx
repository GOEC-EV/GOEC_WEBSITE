import Step from './steps/Step';
import React, { useEffect, useState } from 'react';
import steps from './steps/data/steps.json';
import styles from './HowToChargeCard.module.css';

export default function HowToChargeCard() {
	const [current, setCurrent] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrent(prev => {
				if (prev === steps.length - 1) return 0;
				return prev + 1;
			});
		}, 2000);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className={styles.warper}>
			<div className={styles.container_wrapper}>
				{steps.map((item, index) => (
					<Step
						key={item.name}
						name={item.name}
						text={item.text}
						image={item.image}
						count={item.count}
						active={index === current}
					/>
				))}
			</div>
		</div>
	);
}
