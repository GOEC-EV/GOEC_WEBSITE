import React, { useEffect, useLayoutEffect, useState } from 'react';
import AmenitiesCard from './AmenitiesCard';
import Breadcrumbs from '../Utils/Breadcrumbs';
import ChargerHeroSection from './ChargerHeroSection';
import ChargersCard from '../ExploreChargers/ChargersCard';
import { useRouter } from 'next/router';
import LoadingCircle from '../Utils/LoadingCircle';
import Head from 'next/head';
// import { useStation, useStations } from '@/hooks/api';
import useStationStore from '@/stores/stationStore';
import { useStationById } from '@/hooks/api';

export default function ChargerOverviewPage() {
	const router = useRouter();
	const { name } = router.query;
	const [id, setId] = useState('');
	const [selectedStation, setSelectedStation] = useState([]);

	const { stations } = useStationStore();

	const { data } = useStationById({ id });

	useEffect(() => {
		if (data) {
			setSelectedStation(data.data);
		}
	}, [data]);

	console.log(selectedStation);

	function parseUrl() {
		const splitted = router.asPath.split('/');
		const stateT = splitted[1]?.replace('ev-charging-stations-in-', '');
		const state = stateT?.replace('ev-charging-stations', '');
		const station = name?.replace(/[-]+/g, ' ')?.split(' ')?.slice(0, -1)?.join(' ');
		return {
			station: station?.charAt(0)?.toUpperCase() + station?.slice(1)?.toLowerCase(),
			state: state?.charAt(0)?.toUpperCase() + state?.slice(1)?.toLowerCase(),
		};
	}

	useEffect(() => {
		if (name) {
			setId(name.split('-').at(-1));
		}
	}, [name]);

	return (
		<div style={{ background: '#F7F8FB' }}>
			<Head>
				<title>{`GOEC - ${parseUrl().station} charging station in ${parseUrl().state || 'India'}`}</title>
			</Head>
			{/* {stations?.data?.length != 0 ? <LoadingCircle /> : null} */}
			<Breadcrumbs
				mod='white'
				links={[
					{
						name: 'Home',
						link: '/',
					},
					{
						name: 'Explore chargers',
						link: '/ev-charging-stations',
					},
					{
						name: `${name?.split('-')[0]}`,
						link: router.asPath,
					},
				]}
			/>
			<ChargerHeroSection data={selectedStation} />
			<div className='h-[25px]'></div>
			<AmenitiesCard data={selectedStation} />

			<div className=' container_wrapper pb-8'>
				<p className=' text-[24px] font-[600] text-[#4F4F4F] mt-16'>Nearby Chargers</p>
				<div className='grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-8 '>
					{stations?.data
						?.filter(item => item?.id !== Number(name?.split('-')?.at(-1)))
						?.slice(0, 3)
						?.map((item, index) => (
							<ChargersCard key={`station-${index}`} data={item} pathSlice={-1} />
						))}
				</div>
			</div>
		</div>
	);
}
