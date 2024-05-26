import React from 'react';
import Breadcrumbs from '../Utils/Breadcrumbs';
import AboutUs from './AboutUs';
import HeroAbout from './HeroAbout';
import OurValues from './OurValues';
import Overview from './Overview';
import OverviewCard from './OverviewCard';
import TeamMeet from './TeamMeet';
import Contact from '../Home/ContactUs';

export default function AboutPages() {
	return (
		<div>
			<Breadcrumbs
				links={[
					{
						name: 'Home',
						link: '/',
					},
					{
						name: 'About us',
						link: '/about',
					},
				]}
			/>
			<HeroAbout />
			<AboutUs />
			<Overview />
			<OverviewCard />
			<OurValues />
			<TeamMeet />
			<Contact />
		</div>
	);
}
