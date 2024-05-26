import React from 'react';
import Breadcrumbs from '../Utils/Breadcrumbs';
import CareersCard from './CareersCard';
import SendResume from './SendResume';
import TeamCard from './TeamCard';

export default function CareersPages() {
	return (
		<div>
			<Breadcrumbs
				mod='white'
				links={[
					{
						name: 'Home',
						link: '/',
					},
					{
						name: 'Careers',
						link: '/careers',
					},
				]}
			/>
			<CareersCard />
			<TeamCard />
			<SendResume />
		</div>
	);
}
