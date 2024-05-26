import Image from 'next/image';
import Breadcrumbs from '../Utils/Breadcrumbs';
import ContactFrom from '../Utils/ContactFrom';
import AcCharge from './AcCharge';
import styles from './ContactUsPage.module.css';
export default function ContactUsPage() {
	return (
		<div>
			<Breadcrumbs
				links={[
					{
						name: 'Home',
						link: '/',
					},
					{
						name: 'Contact us',
						link: '/contactUs',
					},
				]}
			/>

			<Image className=' ' src='/images/bg/ContactUsBg.jpg' width={2600} height={500} alt='' />

			<div className={styles.warper}>
				<div className='container_wrapper grid md:grid-cols-2 z-[3]'>
					<AcCharge />
					<ContactFrom />
				</div>
			</div>
		</div>
	);
}
