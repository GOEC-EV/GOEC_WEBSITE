import Link from 'next/link';
import React, { useState } from 'react';
import { Country, State } from 'country-state-city';
import styles from './ProductBookingPage.module.css';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

export default function ProductBookingPage() {
	const [state, setState] = useState('');
	const [country, setCountry] = useState('');

	return (
		<main className={styles.container}>
			<section className='container_wrapper flex flex-col items-center justify-center'>
				<h1 className={styles.hading}>Book Product</h1>
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
								<option value=''>Interested Product</option>
								{State &&
									State.getStatesOfCountry(country).map(item => (
										<option key={item.isoCode} value={item.isoCode}>
											{item.name}
										</option>
									))}
							</select>
						</div>
					</div>
					<div className='md:hidden h-[2px] w-[70%] mx-auto mt-6 bg-[#828282] rounded-2xl'></div>
					<div className='py-5 mt-5'>
						<Link href='/thanks'>
							<button className={styles.CardBtn}>
								<div className={styles.CardBtnText}>Submit</div>
								<div className={styles.CardBtnIcon}>
									<HiOutlineArrowUpRight />
								</div>
							</button>
						</Link>
					</div>
				</div>
			</section>
		</main>
	);
}
