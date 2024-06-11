import React from 'react';
import styles from './SocketTypeCard.module.css';
import { HiOutlineCurrencyRupee } from 'react-icons/hi';

export default function SocketTypeCard({ data }) {
	const sockets = {
		'CCS': '/images/chargers/sockets/css.svg',
		'CHAdeMO': '/images/chargers/sockets/chademo.svg',
		'GB/T Gun': '/images/chargers/sockets/gbt-gun.svg',
		'Type 2': '/images/chargers/sockets/type-2.svg',
		'16 Amp Socket': '/images/chargers/sockets/16-amp-socket.svg',
		'AC Type 1': '/images/chargers/sockets/ac-type-1.svg',
	};
console.log('sdasdd',data)
	return (
		<div className={styles.cardBody}>
			<div className={styles.cardIconSvg}>
				<img src={sockets[data?.socketType]} alt={data?.socketType} />
			</div>
			<div className='mt-2'>
				<div className=' grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2  gap-2  items-center'>
					<div className=' flex items-center'>
						<span>
							<HiOutlineCurrencyRupee color='#219653' />
						</span>
						<p className=' pl-1 text-[#4F4F4F] text-[14px] leading-normal '>Rs.{data?.rateUnit}/unit</p>
					</div>
					<div className=' flex items-center gap-2'>
						<img src='/images/chargers/sockets/thunder.svg' alt='Thunder' />
						<p className='text-[#4F4F4F] text-[14px] leading-normal '>{data?.outputPower} kWh</p>
					</div>
				</div>
				<p className='mt-2 text-[#1B1B1B] text-[14px] leading-normal font-[600] text-center'>{data?.socketType}</p>
			</div>
		</div>
	);
}
