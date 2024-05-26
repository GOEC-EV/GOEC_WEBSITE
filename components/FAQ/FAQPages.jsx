import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
	COCOTabItem,
	FOCOTabItem,
	GeneralTabItem,
	GOECAppTabItem,
	HowToChargeTabItem,
	InvestInCOCOTabItem,
} from '../../data/AccordionData';
import Breadcrumbs from '../Utils/Breadcrumbs';
import FAQDropdown from './FAQDropdown';
import FAQMenu from './FAQMenu';
import styles from './FAQPages.module.css';
export default function FAQPages() {
	const [domLoaded, setDomLoaded] = useState(false);

	useEffect(() => {
		setDomLoaded(true);
	}, []);
	const [menuOpen, setMenuOpen] = useState('General');
	return (
		<>
			{domLoaded && (
				<div>
					<Breadcrumbs
						links={[
							{
								name: 'Home',
								link: '/',
							},
							{
								name: 'Help centre',
								link: '/faqs',
							},
						]}
					/>
					<Image className=' ' src='/images/helpBg.jpg' width={2600} height={500} alt='' />
					<div className={styles.warper}>
						<div className=' grid grid-cols-1 md:grid-cols-5 lg:grid-cols-6'>
							<div className=' '>
								<FAQMenu setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
							</div>
							<div className='  md:col-span-4 lg:col-span-5 flex px-4 md:px-6 lg:px-16 items-center'>
								{menuOpen === 'General' ? <FAQDropdown DropdownData={GeneralTabItem} /> : null}
								{menuOpen === 'COCO' ? <FAQDropdown DropdownData={COCOTabItem} /> : null}
								{menuOpen === 'FOCO' ? <FAQDropdown DropdownData={FOCOTabItem} /> : null}
								{menuOpen === 'InvestInCOCO' ? <FAQDropdown DropdownData={InvestInCOCOTabItem} /> : null}
								{menuOpen === 'GOECApp' ? <FAQDropdown DropdownData={GOECAppTabItem} /> : null}
								{menuOpen === 'HowToCharge' ? <FAQDropdown DropdownData={HowToChargeTabItem} /> : null}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
