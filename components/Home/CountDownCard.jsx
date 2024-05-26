import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import styles from './CountDownCard.module.css';

export default function CountDownCard() {
	const [domLoaded, setDomLoaded] = useState(false);

	const CardList = [
		{
			id: '1',
			hading: '125',
			add: '+',
			text: 'Charging stations',
		},
		{
			id: '2',
			hading: '85000',
			add: '+',
			text: 'Hours of charging',
		},
		{
			id: '3',
			hading: '25000',
			add: '+',
			text: 'Active users',
		},
		{
			id: '4',
			hading: '21',
			add: '+',
			text: 'Cities',
		},
	];

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	return (
		<>
			{domLoaded && (
				<div className={styles.warper}>
					<div className='container_wrapper'>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[35px] md:gap-10 my-4 md:my-8 '>
							{CardList.map(item => (
								<div key={item.id} className=' '>
									<h1 className='font-[500] font-head text-black text-[24px] md:text-[40px] border-l-4 border-[#007AFF] pl-5'>
										<CountUp
											end={item.hading}
											decimal=','
											className={styles.value}
											formattingFn={n => n.toLocaleString('en-IN')}
										/>
										{item.add}
									</h1>
									<p className='border-l-4 border-transparent pl-5 pt-3 text-gray-600 text-[14px] md:text-[17px] '>
										{item.text}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	);
}
