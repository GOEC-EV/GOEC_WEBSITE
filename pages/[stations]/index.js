import ExploreChargersPage from '@/components/ExploreChargers/ExploreChargersPage';
import { State } from 'country-state-city';
import { useRouter } from 'next/router';

export default function Index() {
	const { stations } = useRouter().query;
	const currentUrl = stations?.toLowerCase();
	const states = State.getStatesOfCountry('IN');
	const urls = states.map(state => `ev-charging-stations-in-${state.name.replace(/[ -]+/g, '-').toLowerCase()}`);

	if (currentUrl === 'ev-charging-stations') return <ExploreChargersPage />;
	else if (urls.includes(currentUrl)) {
		const index = urls.indexOf(currentUrl);
		return <ExploreChargersPage state={states[index].name} />;
	}
	return <div>404 Error Page</div>;
}
