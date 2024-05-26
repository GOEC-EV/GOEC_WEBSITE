import React, { useMemo } from 'react';
import styles from './AmenitiesCard.module.css';
import SocketTypeCard from './SocketTypeCard';

export default function AmenitiesCard({ data }) {

	console.log("amenities",data?.amenities)

	const vehicles = {
		'2 Wheelers': '/images/chargers/vehicles/2-wheelers.svg',
		'3 Wheelers': '/images/chargers/vehicles/3-wheelers.svg',
		'4 Wheelers': '/images/chargers/vehicles/4-wheelers.svg',
		'Heavy Vehicle': '/images/chargers/vehicles/heavy-vehicle.svg',
	};

	const amenities = {
		cafe: '/images/chargers/amenities/cafe.svg',
		mall: '/images/chargers/amenities/mall.svg',
		restaurant: '/images/chargers/amenities/restaurant.svg',
		hotel: '/images/chargers/amenities/hotel.svg',
		restRoom: '/images/chargers/amenities/hotel.svg',
	};

    const amenitiesArray = useMemo(() => {
        if (!data?.amenities) return [];
        return Object.entries(data.amenities)
            .map(([key, value]) => ({ name: key, available: value }))
            .filter(item => item.available);
    }, [data?.amenities]);


	return (
		<div className=' container_wrapper'>
			<div className='grid grid-cols-1  md:grid-cols-2  gap-6 mt-8  '>
				<div>
					<h1 className='text-[24px] text-[#4F4F4F] font-[600] mb-4'>Socket type</h1>
					<div className='grid grid-cols-1  md:grid-cols-2 gap-6 '>
						{data?.chargers?.map((item, index) => (
							<SocketTypeCard key={`socket-${index}`} data={item} />
						))}
					</div>
				</div>
				<div>
					<h1 className='text-[24px] text-[#4F4F4F] font-[600] mb-4'>Vehicles</h1>
					<div className='grid grid-cols-1  md:grid-cols-2 gap-6 '>
						{data?.chargers?.map((item, index) => (
							<div className={styles.cardBody} key={`vehicle-${index}`}>
								<div className={styles.cardIconSvg}>
									<img src={vehicles[item?.vehicleType]} alt={item?.vehicleType} />
								</div>
								<p className={styles.cardText}>{item?.vehicleType}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<p className=' text-[24px] font-[600] text-[#4F4F4F] mt-4 py-7'>Amenities</p>
			<div className='grid grid-cols-1  md:grid-cols-4 gap-6 '>
				{amenitiesArray?.map((item, index) =>
					item.available ? (
						<div className={styles.cardBody} key={`amenity-${index}`}>
							<div className={styles.cardIconSvg}>
								<img src={amenities[item?.name]} alt={item?.name} style={{ height: '45px', width: 'auto' }} />
							</div>
							<p className={styles.cardText}>{item?.name}</p>
						</div>
					) : (
						''
					)
				)}
			</div>
		</div>
	);
}
