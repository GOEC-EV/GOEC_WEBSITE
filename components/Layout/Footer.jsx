import Link from 'next/link';
import { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { HiArrowUpRight } from 'react-icons/hi2';
// import { motion } from 'framer-motion';
// import { opacityUp } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';
import styles from './Footer.module.css';
import WhatsApp from '@/components/whatsapp/whatsapp';
export default function Footer() {
	// const [element, controls] = useScroll();
	const [email, setEmail] = useState('');

	const submitEmail = async e => {
		e.preventDefault();
		const res = await fetch('/api/newsletter', {
			method: 'POST',
			body: JSON.stringify({
				email,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = await res.json();
		console.log(data);
	};

	const location1 = [
		{
			name: 'Ev charging station in Andhra Pradesh',
			url: 'https://www.goecworld.com/ev-charging-stations-in-andhra-pradesh',
		},
		{
			name: 'Ev charging station in Arunachal Pradesh',
			url: 'https://www.goecworld.com/ev-charging-stations-in-arunachal-pradesh',
		},
		{
			name: 'Ev charging station in Assam',
			url: 'https://www.goecworld.com/ev-charging-stations-in-assam',
		},
		{
			name: 'Ev charging station in Bihar',
			url: 'https://www.goecworld.com/ev-charging-stations-in-bihar',
		},
		{
			name: 'Ev charging station in Chhattisgarh',
			url: 'https://www.goecworld.com/ev-charging-stations-in-chhattisgarh',
		},
		{
			name: 'Ev charging station in Goa',
			url: 'https://www.goecworld.com/ev-charging-stations-in-goa',
		},
		{
			name: 'Ev charging station in Gujarat',
			url: 'https://www.goecworld.com/ev-charging-stations-in-gujarat',
		},
		{
			name: 'Ev charging station in Haryana',
			url: 'https://www.goecworld.com/ev-charging-stations-in-haryana',
		},
		{
			name: 'Ev charging station in Himachal Pradesh',
			url: 'https://www.goecworld.com/ev-charging-stations-in-himachal-pradesh',
		},
	];

	const location2 = [
		{
			name: 'Ev charging station in Jharkhand',
			url: 'https://www.goecworld.com/ev-charging-stations-in-jharkhand',
		},
		{
			name: 'Ev charging station in Karnataka',
			url: 'https://www.goecworld.com/ev-charging-stations-in-karnataka',
		},
		{
			name: 'Ev charging station in Kerala',
			url: 'https://www.goecworld.com/ev-charging-stations-in-kerala',
		},
		{
			name: 'Ev charging station in Madhya Pradesh',
			url: 'https://www.goecworld.com/ev-charging-stations-in-madhya-pradesh',
		},
		{
			name: 'Ev charging station in Maharashtra',
			url: 'https://www.goecworld.com/ev-charging-stations-in-maharashtra',
		},
		{
			name: 'Ev charging station in Manipur',
			url: 'https://www.goecworld.com/ev-charging-stations-in-manipur',
		},
		{
			name: 'Ev charging station in Meghalaya',
			url: 'https://www.goecworld.com/ev-charging-stations-in-meghalaya',
		},
		{
			name: 'Ev charging station in Nagaland',
			url: 'https://www.goecworld.com/ev-charging-stations-in-nagaland',
		},
		{
			name: 'Ev charging station in West Bengal',
			url: 'https://www.goecworld.com/ev-charging-stations-in-west-bengal',
		},
	];

	const location3 = [
		{
			name: 'Ev charging station in Odisha',
			url: 'https://www.goecworld.com/ev-charging-stations-in-odisha',
		},
		{
			name: 'Ev charging station in Punjab',
			url: 'https://www.goecworld.com/ev-charging-stations-in-punjab',
		},
		{
			name: 'Ev charging station in Rajasthan',
			url: 'https://www.goecworld.com/ev-charging-stations-in-rajasthan',
		},
		{
			name: 'Ev charging station in Tamil Nadu',
			url: 'https://www.goecworld.com/ev-charging-stations-in-tamil-nadu',
		},
		{
			name: 'Ev charging station in Telegana',
			url: 'https://www.goecworld.com/ev-charging-stations-in-telangana',
		},
		{
			name: 'Ev charging station in Tripura',
			url: 'https://www.goecworld.com/ev-charging-stations-in-tripura',
		},
		{
			name: 'Ev charging station in Uttar Pradesh',
			url: 'https://www.goecworld.com/ev-charging-stations-in-uttar-pradesh',
		},
		{
			name: 'Ev charging station in Uttarakhand',
			url: 'https://www.goecworld.com/ev-charging-stations-in-uttarakhand',
		},
		{
			name: 'Ev charging station in Delhi',
			url: 'https://www.goecworld.com/ev-charging-stations-in-delhi',
		},
	];

	const location4 = [
		{
			name: 'Ev charging station in Chandigarh',
			url: 'https://www.goecworld.com/ev-charging-stations-in-chandigarh',
		},
		{
			name: 'Ev charging station in Jaipur',
			url: 'https://www.goecworld.com/ev-charging-stations-in-rajasthan',
		},
		{
			name: 'Ev charging station in Ahmedabad',
			url: 'https://www.goecworld.com/ev-charging-stations-in-gujarat',
		},
		{
			name: 'Ev charging station in Chennai',
			url: 'https://www.goecworld.com/ev-charging-stations-in-tamil-nadu',
		},
		{
			name: 'Ev charging station in Bangalore',
			url: 'https://www.goecworld.com/ev-charging-stations-in-karnataka',
		},
		{
			name: 'Ev charging station in Mumbai',
			url: 'https://www.goecworld.com/ev-charging-stations-in-maharashtra',
		},
		{
			name: 'Ev charging station in Hyderabad',
			url: 'https://www.goecworld.com/ev-charging-stations-in-telangana',
		},
		{
			name: 'Ev charging station in Pune',
			url: 'https://www.goecworld.com/ev-charging-stations-in-maharashtra',
		},
		{
			name: 'Ev charging station in Kolkata',
			url: 'https://www.goecworld.com/ev-charging-stations-in-west-bengal',
		},
	];

	return (
		<div className={styles.wrapper}>
			<div>
				<div className='py-[60px]'>
					<div className={` container_wrapper grid grid-cols-1 lg:grid-cols-2 gap-16`}>
						<div
						// initial='hidden'
						// animate={controls}
						// variants={opacityUp}
						// transition={{
						// 	delay: 0,
						// 	ease: 'linear',
						// 	duration: 1,
						// }}
						>
							<div className='  grid grid-cols-2 gap-x-16 gap-y-8 '>
								<div className=' '>
									<Link href='/'>
										<img src='/images/icons/footer-logo.svg' className={styles.logo} alt='' />
									</Link>
									<div className='pt-8 pb-6'>
										<h1 className={styles.hadingText}>India Address:</h1>
										<p className={styles.subHadingText}>
										GO EC Auto tech PVT LTD. <br /> 7th Floor, KB Square Vytilla, <br /> Kochi, Kerala – 682019.
										</p>
										<h1 className={styles.hadingText}>+91 9447536644</h1>
									</div>
									<div>
										<h1 className={styles.hadingText}>UAE Address:</h1>
										<p className={styles.subHadingText}>
											P5-ELOB Office No. E-42 G-21 Hamriyah, <br /> Free Zone, Sharjah United Arab Emirates
										</p>
									</div>
								</div>
								<div className='flex flex-col h-full'>
									<div className=''>
										<h1 className=' text-lg text-gray-50'>Download the App</h1>
										<div className='  flex py-3 '>
											<img src='/images/icons/qr-code.png' alt='' className='h-[70px] w-[70px]' />
											<div className='pl-4 flex flex-col justify-between items-start'>
												<Link href='https://apps.apple.com/in/app/goec/id1600027947' target='_blank'>
													<img
														src='/images/icons/app-store.svg'
														alt=''
														className='h-[30px] w-auto cursor-pointer'
													/>
												</Link>
												<Link
													href='https://play.google.com/store/apps/details?id=com.namp.azadpower'
													target='_blank'>
													<img
														src='/images/icons/google-play.svg'
														alt=''
														className='h-[30px] w-auto mt-auto cursor-pointer'
													/>
												</Link>
											</div>
										</div>
									</div>
									<div className='mt-auto'>
										<h1 className=' text-lg text-gray-50 pb-2 '>Find us here</h1>
										<div className=' flex  gap-3'>
											<a
												href='https://www.facebook.com/goecworldindia'
												target='_blank'
												rel='noreferrer'
												className={styles.socialLink}>
												<FaFacebookF />
											</a>
											<a
												href='https://twitter.com/goecworld'
												target='_blank'
												rel='noreferrer'
												className={styles.socialLink}>
												<FaTwitter />
											</a>
											<a
												href='https://www.instagram.com/goec.official/'
												target='_blank'
												rel='noreferrer'
												className={styles.socialLink}>
												<FaInstagram />
											</a>
											<a
												href='https://www.linkedin.com/company/goecofficial '
												target='_blank'
												rel='noreferrer'
												className={styles.socialLink}>
												<FaLinkedin />
											</a>
											<a
												href='https://youtube.com/@goec-thecompleteevsupercha4661'
												target='_blank'
												rel='noreferrer'
												className={styles.socialLink}>
												<FaYoutube />
											</a>
										</div>
									</div>
								</div>
								<div className=' col-span-2 w-full '>
									<h1 className=' text-lg text-white pb-3'>Join our newsletter</h1>
									<form className=' flex gap-2' onSubmit={submitEmail}>
										<input
											type='email'
											value={email}
											onChange={e => setEmail(e.target.value)}
											className={styles.emailInput}
											placeholder='Email ID'
										/>
										<button className={styles.btn}>
											<span>Submit</span>
											<HiArrowUpRight />
										</button>
									</form>
								</div>
							</div>
						</div>
						<div
							// initial='hidden'
							// animate={controls}
							// variants={opacityUp}
							// transition={{
							// 	delay: 0.5,
							// 	ease: 'linear',
							// 	duration: 0.5,
							// }}
							className=' grid grid-cols-2 gap-16 gap-y-8 lg:gap-y-0'>
							<div className='flex flex-col gap-2 items-start'>
								<h1 className={`${styles.listHadar} mb-2`}>Discover</h1>
								<Link href='/ev-charging-stations' className={styles.listText}>
									Explore Chargers
								</Link>
								<Link href='/partner-with-us/invest-in-coco' className={styles.listText}>
									Partner with us
								</Link>
								<Link href='/careers' className={styles.listText}>
									Careers
								</Link>
							</div>
							<div className='flex flex-col gap-2 items-start'>
								<h1 className={`${styles.listHadar} mb-2`}>Misc</h1>
								<Link href='/app-page' className={styles.listText}>
									GOEC application
								</Link>
								<Link href='/solutions' className={styles.listText}>
									Solutions
								</Link>
								<Link href='/shop' className={styles.listText}>
									Shop
								</Link>
								<Link href='/apply-for-charger' className={styles.listText}>
									Apply for charging station
								</Link>
							</div>
							<div className='flex flex-col gap-2 items-start'>
								<h1 className={`${styles.listHadar} mb-2`}>Resources</h1>
								<Link href='/blogs' className={styles.listText}>
									Blogs
								</Link>
								<Link href='/How-to-charge' className={styles.listText}>
									How to charge
								</Link>
								<Link href='/news' className={styles.listText}>
									News
								</Link>
								<Link href='/faqs' className={styles.listText}>
									Help centre
								</Link>
							</div>
							<div className='flex flex-col gap-2 items-start'>
								<h1 className={`${styles.listHadar} mb-2`}>Company</h1>
								<Link href='/about' className={styles.listText}>
									About us
								</Link>
								<Link href='/contactUs' className={styles.listText}>
									Contact us
								</Link>
								<Link href='/privacy-policy' className={styles.listText}>
									Privacy policy
								</Link>
								<Link href='/terms-and-conditions' className={styles.listText}>
									Terms & conditions
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div
					// initial='hidden'
					// animate={controls}
					// variants={opacityUp}
					// transition={{
					// 	delay: 1,
					// 	ease: 'linear',
					// 	duration: 0.5,
					// }}
					className={`container_wrapper pb-10`}>
					<p className={styles.title}>Find GO EC near you</p>
					<div className='mt-4 grid md:grid-cols-2 2xl:grid-cols-4'>
						<div className='flex flex-col items-start'>
							{location1.map((item, index) => (
								<Link href={item.url} className={styles.LinkText} key={`location1-${index}`}>
									{item.name}
								</Link>
							))}
						</div>
						<div className='flex flex-col items-start'>
							{location2.map((item, index) => (
								<Link href={item.url} className={styles.LinkText} key={`location2-${index}`}>
									{item.name}
								</Link>
							))}
						</div>
						<div className='flex flex-col items-start'>
							{location3.map((item, index) => (
								<Link href={item.url} className={styles.LinkText} key={`location3-${index}`}>
									{item.name}
								</Link>
							))}
						</div>
						<div className='flex flex-col items-start'>
							{location4.map((item, index) => (
								<Link href={item.url} className={styles.LinkText} key={`location4-${index}`}>
									{item.name}
								</Link>
							))}
						</div>
					</div>
				</div>
				<div className={styles.FooterBottom}>
					<div className={` container_wrapper ${styles.FooterBottomWrap}`}>
						<p className={styles.FooterBottomText}>© 2024 - 2025 GOEC Private limited. All Rights Reserved</p>
						<Link href="https://acuteangle.io/" className={styles.FooterBottomText}>
							Handcrafted with &nbsp;<span className='text-[#EB5757] text-[14px]'>&#10084;</span>&nbsp; by Acute
							Angle
						</Link>
					</div>
				</div>
				< WhatsApp/>
			</div>
		</div>
	);
}
