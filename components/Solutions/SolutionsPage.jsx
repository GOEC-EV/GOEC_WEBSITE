import React from 'react';
import ContactUs from '../Home/ContactUs';
import Breadcrumbs from '../Utils/Breadcrumbs';
import ChargingCard from './ChargingCard';
import SolutionsCard from './SolutionsCard';
import { motion } from 'framer-motion';
import { opacityUp } from '../../data/Animations';
import { useScroll } from '../../hooks/useScroll';
import Contact from '../Home/ContactUs';
export default function SolutionsPage() {
	const [element, controls] = useScroll();
	return (
		<div className=' -mb-6'>
			<Breadcrumbs
				mod='white'
				links={[
					{
						name: 'Home',
						link: '/',
					},
					{
						name: 'Solutions',
						link: '/solutions',
					},
				]}
			/>
			<img src='/images/bg/solutions.png' alt='Solutions' className='w-full h-[380px] object-cover mb-6' />
			<SolutionsCard
				img='/images/Rectanglegasstan.jpg'
				text='GOEC Exclusive'
				mod='left'
				description='GOEC Exclusive is a comprehensive infrastructure-based model. It includes an EV charging station with infrastructure like a supermarket, food court, space for two shops and one bank ATM, parking area, restroom, toilets, etc. The highlight of this model is that it is a fully assisted turnkey project from GOEC. Once the land and budget are confirmed, GOEC takes care of all the stages from purchasing & installing EV machines, infrastructure design & development, liaisoning with Panchayat & Corporation offices & taking necessary approvals to finally, giving the key after all the works are over. An experiential center goes a long way in helping our brand associates get valuable interactions with customers waiting to charge their EVs.'
			/>
			<div ref={element} className=' container_wrapper '>
				<motion.div
					initial='hidden'
					animate={controls}
					variants={opacityUp}
					transition={{
						delay: 0,
						ease: 'linear',
						duration: 0.8,
					}}
					className=' grid grid-cols-1 md:grid-cols-2 py-7 gap-16 pb-20'>
					{/* <p className=''>
						The highlight of this model is that it is a fully assisted turnkey project from GOEC. Once the land
						and budget is confirmed, GOEC takes care of all the stages from purchasing & installing EV machines,
						infrastructure design & development, liasoning with Panchayat & Corporation offices & taking necessary
						approvals to finally, giving the key after all the works are over. An experiential center goes a long
						way in helping our brand associates get valuable interactions with customers waiting to charge their
						EVs.
					</p>
					<p className=''>
						Make your parking slot EV ready and attract your potential customers. Specially designed EV Chargers
						for shopping malls, showrooms, retail outlets, Hotels /Restaurants, Hospitals , etc
					</p> */}
				</motion.div>
			</div>
			<div className=' flex py-10 pb-24 mx-auto w-72 '>
				<h1 className='sectionText whitespace-nowrap '>GO EC Segments</h1>
			</div>
			<SolutionsCard
				img='/images/Rectanglehouse.jpg'
				text='GO EC Hub'
				mod=''
				description='GO EC Hub is a comprehensive infrastructure based model. It includes EV charging station with infrastructure like supermarket, food court, space for two shops and one bank ATM, parking area, restroom, toilets etc. The highlight of this model is that it is a fully assisted turnkey project from GO EC. Once the land and budget are confirmed, GOEC manages all stages of the project, from purchasing and installing EV machines, designing and developing infrastructure, liaising with Panchayat and Corporation offices and obtaining necessary approvals, to finally handing over the keys once all the work is completed. An experiential center goes a long way in helping our brand associates get valuable interactions with customers waiting to charge their EVs.'
			/>
			<SolutionsCard
				img='/images/Rectanglecar.jpg'
				text='Home residential charging'
				mod='left'
				description='Easy-to-install EV chargers for home, with all the components needed for smart-home integration and all available from a single trusted supplier. GO EC home chargers are integrated with safety features for protection of people and their electric vehicles.'
			/>
			<SolutionsCard
				img='/images/Rectanglecarhome.jpg'
				text='Apartment, hotel & workplace destination charging'
				mod=''
				description='An increased interest in reducing pollution is driving consumers to make more environmental friendly choices in how they live and where they work. Building owners can attract new tenants by offering smart electric vehicle charging. With pre-engineered modular infrastructure solutions, building owners can invest in 1 or 2 chargers immediately and scale up later as more consumers adopt electric vehicles.'
			/>
			<SolutionsCard
				img='/images/Rectanglecharg.jpg'
				text='Public commercial parking'
				mod='left'
				description='Installing electric vehicle chargers at your business can attract new loyal and typically higher-earning customers that differentiating you from competitors. you can also generate revenue through per-charge pricing and advertising. GO EC can help you to find the right charging solution that also simplifies future expansion as the demand for electric vehicle increases.'
			/>
			<SolutionsCard
				img='/images/Rectangletuck.jpg'
				text='Commercial fleet'
				mod=''
				description='As battery technology advances, major truck and heavy-duty vehicle manufacturers are already releasing their lineups of low-noise, low-carbon producing electric vehicles. However, these high-power vehicles need high-power infrastructure, with a strong focus on safety. GO EC offers future-proof integrated charger and grid connection solutions that reduce installation costs while meeting the highest safety standards.'
			/>
			<SolutionsCard
				img='/images/Rectanglebus.jpg'
				text='Industrial fleet'
				mod='left'
				description={`Heavy-duty trucks require intelligent high-power charging infrastructure. Migrating to an electrical vehicle fleet can generate significant operational savings by eliminating fuel costs and reducing vehicle maintenance costs, while ensuring ongoing access to zero-emission zones in urban areas. Choosing the right charging solution is vital when efficiency and productivity are critical to operations. GO EC's portfolio of overnight depot and fast-charging products will help keep your fleet running at all times.`}
			/>
			<SolutionsCard
				img='/images/Rectanglebussan.jpg'
				text='Bus Charging'
				mod=''
				description={`Sustainable and emission-free transportation is critical to improving the quality of life in smart cities. Emission-free public transportation such as electric buses improves local air quality and reduces noise pollution. Transitioning to an electric vehicle fleet, however, can present new challenges, especially regarding choosing the right infrastructure to support the fleet's operational needs. GO EC can help you address these challenges with smart technologies that are quickly deployable and have lower operational costs than traditional bus systems.`}
			/>

			<ChargingCard />

			<Contact />
		</div>
	);
}
