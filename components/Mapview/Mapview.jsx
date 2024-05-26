import React, { useEffect, useState } from 'react';
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import { useQuery } from 'react-query';
import Link from 'next/link';
import { useRouter } from 'next/router';
import encodeTitle from '@/utilities/encodeTitle';

const Mapview = ({ data }) => {
	console.log('data', data);
	const { asPath } = useRouter();
	const [selectedCenter, setSelectedCenter] = useState(null);
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyCGj0hRgN-cr02TaGzHjCY9QilpB5nsMAs',
	});

	const mapStyles = {
		height: '75vh',
		width: '100%',
	};

	const defaultCenter = {
		lat: 10.013938,
		lng: 76.311999,
	};

	console.log(selectedCenter);

	return (
		<div>
			{isLoaded ? (
				<GoogleMap
					mapContainerStyle={mapStyles}
					zoom={13}
					center={defaultCenter}
					streetViewControl={false}
					onClick={() => setSelectedCenter(null)}>
					{data.map(station => {
						const position = {
							lat: parseFloat(station.location.coordinates.latitude),
							lng: parseFloat(station.location.coordinates.longitude),
							// lat: parseFloat('10.1765776'),
							// lng: parseFloat('76.3724106'),
						};

						return (
							<Marker
								key={station._id}
								position={position}
								onClick={() => setSelectedCenter({ position, ...station })}
								icon={{
									url: !station.goecOnly ? '/images/icons/goec.svg' : '/images/icons/station.svg',
									scaledSize: new window.google.maps.Size(35, 35), // Scale the icon size
									anchor: new window.google.maps.Point(10, 10), // Anchor the icon
								}}
							/>
						);
					})}

					{selectedCenter && (
						<InfoWindow
							onCloseClick={() => {
								setSelectedCenter(null);
							}}
							position={{
								lat: parseFloat('10.1765776'),
								lng: parseFloat('76.3724106'),
							}}>
							<div>
								<h2 className='font-medium text-base text-gray-700 text-center'>
									{selectedCenter?.stationName}
								</h2>
								<Link
									href={`${asPath.split('/').slice(0, 2).join('/')}/${encodeTitle(
										`${selectedCenter?.stationName}-${selectedCenter?._id}`
									)}`}>
									<p className=' font-semibold text-sm text-[#007AFF] underline'>View station</p>
								</Link>
							</div>
						</InfoWindow>
					)}
				</GoogleMap>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default Mapview;
