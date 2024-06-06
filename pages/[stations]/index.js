import ExploreChargersPage from '@/components/ExploreChargers/ExploreChargersPage';
import { State, City } from 'country-state-city';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Index() {
	const router = useRouter();
	const { stations } = router.query;
	const [state, setState] = useState('');
	const [city, setCity] = useState('');
	const [cordinates, setCordinates] = useState({
		lat: 10.013938,
		lng: 76.311999
	})

	useEffect(() => {
		if (stations) {
			if (stations === 'ev-charging-stations') {
				setState('');
				setCity('');
				return;
			}

			const states = State.getStatesOfCountry('IN');
			const stateMatch = states.find(state => `ev-charging-stations-in-${state.name.replace(/[ -]+/g, '-').toLowerCase()}` === stations.toLowerCase());
			if (stateMatch) {
				setState(stateMatch.name);

				let cord = {
					lat: stateMatch.latitude,
					lng: stateMatch.longitude
				}
				setCordinates(cord)
			} else {
				states.forEach(state => {
					const cities = City.getCitiesOfState('IN', state.isoCode);
					const cityMatch = cities.find(city => `ev-charging-stations-in-${city.name.replace(/[ -]+/g, '-').toLowerCase()}` === stations.toLowerCase());

					if (cityMatch) {
						setCity(cityMatch.name);
						setState(state.name);
					}
				});
			}
		}
	}, [stations]);

	if (state || city || stations === 'ev-charging-stations') {
		return <ExploreChargersPage state={state} city={city} cordinates={cordinates} />;
	}

	return <div>404 Error Page</div>;
}
