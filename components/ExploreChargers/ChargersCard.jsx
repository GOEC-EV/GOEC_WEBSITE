import encodeTitle from '@/utilities/encodeTitle';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsStarFill } from 'react-icons/bs';
import styles from './ChargersCard.module.css';
import Router, { useRouter } from 'next/router';

export default function ChargersCard({ data, pathSlice = undefined }) {
	const { asPath, push } = useRouter();

	console.log(asPath);

	const sockets = {
		CSS: '/images/chargers/sockets/css.svg',
		CHAdeMO: '/images/chargers/sockets/chademo.svg',
		'GB/T Gun': '/images/chargers/sockets/gbt-gun.svg',
		'Type 2': '/images/chargers/sockets/type-2.svg',
		'16 Amp Socket': '/images/chargers/sockets/16-amp-socket.svg',
		'AC Type 1 ': '/images/chargers/sockets/ac-type-1.svg',
	};

	const vehicles = {
		'2 Wheelers': '/images/chargers/vehicles/2-wheelers.svg',
		'3 Wheelers': '/images/chargers/vehicles/3-wheelers.svg',
		'4 Wheelers': '/images/chargers/vehicles/4-wheelers.svg',
		'Heavy Vehicle': '/images/chargers/vehicles/heavy-vehicle.svg',
	};

	return (
		<div className={styles.warper}>
			<div className=' overflow-hidden relative'>
				<div className={styles.CardsImg}>
					<img className={styles.img} src={data?.images[0]?.public} alt={data?.stationName} />
				</div>
				<div className={styles.CardsStar}>
					<BsStarFill />
					{data?.rating}
				</div>
			</div>

			<div className={styles.cardBody}>
				<div className={styles.cardTextBody}>
					<p className={styles.cardText}>{data?.stationName}</p>
					<p className={styles.cardSubText}>
						{data?.location?.address} - {data?.location?.city}
					</p>
				</div>
				<div className={styles.cardIconBody}>
					<div className={styles.cardIconDiv}>
						<p className={styles.cardIconText}>Socket type</p>
						<div className={styles.cardIcons}>
							{data?.chargers?.map((item, index) => (
								<img key={`socket-${index}`} src={sockets[item?.socketType]} alt={item?.type} />
							))}
						</div>
					</div>
					<div className={styles.cardIconDiv}>
						<p className={styles.cardIconText}>Vehicle type</p>
						<div className={styles.cardIcons} style={{ justifyContent: 'flex-end' }}>
							{data?.chargers?.map((item, index) => (
								<img key={`vehicle-${index}`} src={vehicles[item?.vehicleType]} alt={item?.vehicle_name} />
							))}
						</div>
					</div>
				</div>
				<Link
					href={`${asPath.split('/').slice(0, pathSlice).join('/')}/${encodeTitle(
						`${data?.stationName}-${data?._id}`
					)}`}>
					<button  className={styles.btn}>View Details</button>
				</Link>
			</div>
		</div>
	);
}
