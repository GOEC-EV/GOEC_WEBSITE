import styles from './Hero.module.css';
import React, { useState } from 'react';
import { Country, State } from 'country-state-city';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import ApplyForStationForm from '@/components/Utils/ApplyForStationForm';

export default function Hero() {
	const [state, setState] = useState('');
	const [country, setCountry] = useState('');

	return (
		<section className='bg-[#333333] py-[70px] md:py-[100px]'>
			<article className='container_wrapper grid md:grid-cols-2 gap-16'>
				<aside className='flex flex-col justify-start md:pt-28 items-start'>
					<h1 className='font-head font-medium text-[40px] md:text-[64px] text-[#FFFFFF] leading-[1.4]'>
						Join the <span className={styles.blueText}>EV</span> <br /> Revolution
						<span className={styles.dot}></span>
					</h1>
					<p className='text-[#FFFFFF] text-[16px] md:text-[18px] leading-normal mt-6 max-w-[620px]'>
						GO EC is transforming the future of electric automobiles by building a strategic and collective
						network of Electric Vehicle (EV) charging stations across Asia.
					</p>
				</aside>
				<aside>
					<div className={styles.warper}>
						<ApplyForStationForm />
						{/* <div className='  container_wrapper flex flex-col items-center  '>
							<h1 className={styles.hading}>Request Callback</h1>
							<div className={styles.warper2}>
								<div className=' grid grid-cols-1 md:grid-cols-2 md:gap-5 '>
									<input className={styles.input} placeholder='First Name' type='text' />
									<input className={styles.input} placeholder='Last Name' type='text' />
								</div>
								<input className={styles.input} placeholder='Email ID' type='email' />
								<input className={styles.input} placeholder='Phone Number' type='tel' />
								<div className=' grid grid-cols-1 md:grid-cols-2 md:gap-5 '>
									<div className=' '>
										<select
											className={styles.selectBox}
											required
											value={country}
											onChange={e => setCountry(e.target.value)}>
											<option value=''>Country</option>
											{Country &&
												Country.getAllCountries().map(item => (
													<option key={item.isoCode} value={item.isoCode}>
														{item.name}
													</option>
												))}
										</select>
									</div>
									<div className=' '>
										<select
											className={styles.selectBox}
											required
											value={state}
											onChange={e => setState(e.target.value)}>
											<option value=''>State</option>
											{State &&
												State.getStatesOfCountry(country).map(item => (
													<option key={item.isoCode} value={item.isoCode}>
														{item.name}
													</option>
												))}
										</select>
									</div>
								</div>
								<div className='pt-5 mt-5'>
									<button className={styles.CardBtn}>
										<div className={styles.CardBtnText}>Submit</div>
										<div className={styles.CardBtnIcon}>
											<HiOutlineArrowUpRight />
										</div>
									</button>
								</div>
							</div>
						</div> */}
					</div>
				</aside>
			</article>
		</section>
	);
}
