import * as yup from 'yup';
import Link from 'next/link';
import { toast } from 'react-toastify';
import React, { useState } from 'react';
import styles from './ContactUs.module.css';
import { useForm } from 'react-hook-form';
import { City, State } from 'country-state-city';
import { yupResolver } from '@hookform/resolvers/yup';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

const schema = yup
	.object({
		first_name: yup.string().required('First Name is a required field').trim(),
		lest_name: yup.string().trim(),
		email: yup.string().required('Email is a required field').email('Must be a valid email'),
		phone: yup.string().required('Phone is a required field').min(11, 'Must be a valid Phone number'),
		state: yup.string().required('State is a required field').trim(),
		city: yup.string().required('City is a required field').trim(),
	})
	.required();

export default function Contact({ title }) {
	const [isLoading, setIsLoading] = useState(false);
	const [country] = useState({ name: 'India', code: 'IN' });
	const [state, setState] = useState({ name: '', code: '' });
	const [city, setCity] = useState({ name: '', code: '' });

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	async function onSubmit(data) {
		const name = `${data.first_name} ${data.last_name}`;
		const formData = { name: name.trim(), email: data.email, phone: data.phone, city: city.name, state: state.name };
		try {
			const config = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Cookie: 'spcrm=b7f0f28c9f739635ca4e6b2d8239c38ce9d1b36d',
				},
				body: JSON.stringify(formData),
			};
			setIsLoading(true);
			const response = await fetch(`/api/saveContact`, config);
			const result = await response.json();
			if (result?.status === 'true') {
				setIsLoading(false);
				toast.success('Submitted. We will contact you soon!');
				reset();
			} else {
				throw new Error(result?.message);
			}
		} catch (error) {
			setIsLoading(false);
			toast.error(`${error?.message}`);
		}
	}

	return (
		<section className={styles.warper}>
			<main className='container_wrapper flex flex-col items-center  '>
				<h1 className={styles.hading}>{title ?? 'Contact us'}</h1>

				<p className='mt-8 text-[18px] leading-normal text-[#F2F2F2] text-center'>
					Fill out this form and get a call back from our industry expert today!
				</p>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.warper2}>
						<div className=' grid grid-cols-1 md:grid-cols-2 md:gap-5 '>
							<div className={errors.first_name?.message ? styles.error : ''}>
								<input
									className={styles.input}
									placeholder='First Name'
									type='text'
									required
									{...register('first_name')}
								/>
								{errors.first_name?.message ? <p>{errors.first_name.message}</p> : null}
							</div>
							<div className={errors.last_name?.message ? styles.error : ''}>
								<input
									className={styles.input}
									placeholder='Last Name'
									type='text'
									{...register('last_name')}
								/>
								{errors.last_name?.message ? <p>{errors.last_name.message}</p> : null}
							</div>
						</div>
						<div className={errors.email?.message ? styles.error : ''}>
							<input
								className={styles.input}
								required
								placeholder='Email ID'
								type='email'
								{...register('email')}
							/>
							{errors.email?.message ? <p>{errors.email.message}</p> : null}
						</div>
						<div className={errors.phone?.message ? styles.error : ''}>
							<input
								className={styles.input}
								required
								placeholder='Phone Number'
								type='tel'
								{...register('phone')}
							/>
							{errors.phone?.message ? <p>{errors.phone.message}</p> : null}
						</div>
						<div className=' grid grid-cols-1 md:grid-cols-2 md:gap-5 '>
							<div className={errors.state?.message ? styles.error : ''}>
								<select
									className={styles.selectBox}
									required
									{...register('state')}
									value={state.code}
									onChange={e => setState({ code: e.target.value, name: e.target.selectedOptions[0].text })}>
									<option value=''>State</option>
									{State &&
										State.getStatesOfCountry(country.code).map(item => (
											<option key={item.isoCode} value={item.isoCode} name={item.name}>
												{item.name}
											</option>
										))}
								</select>
								{errors.state?.message ? <p>{errors.state.message}</p> : null}
							</div>
							<div className={errors.city?.message ? styles.error : ''}>
								<select
									className={styles.selectBox}
									required
									{...register('city')}
									value={city.name}
									onChange={e => setCity({ name: e.target.value, code: '' })}>
									<option value=''>City</option>
									{City &&
										City.getCitiesOfState(country.code, state.code).map(item => (
											<option key={item.name} value={item.name}>
												{item.name}
											</option>
										))}
								</select>
								{errors.city?.message ? <p>{errors.city.message}</p> : null}
							</div>
						</div>
						<label className='flex items-center justify-center gap-2 text-[#999999] text-[13px] mt-3 cursor-pointer'>
							<input type='checkbox' />
							Subscribe to our newsletter, Don&apos;t worry we never spam!
						</label>
						<span className='w-3/4 h-[1px] bg-[#828282] rounded-md block my-0 mx-auto mt-4'></span>
						<p className='text-center text-[#999999] text-[13px] leading-normal mt-4'>
							By clicking the button below, you are confirming that you have read <br /> and understood GOEC{' '}
							<Link href='/privacy-policy' className='text-[#0092F4] hover:underline underline-offset-2'>
								Privacy Policy.
							</Link>
						</p>

						<div className='py-5 mt-5'>
							<button className={styles.CardBtn} type='submit' disabled={isLoading}>
								<div className={styles.CardBtnText}>Submit</div>
								<div className={styles.CardBtnIcon}>
									<HiOutlineArrowUpRight />
								</div>
							</button>
						</div>
					</div>
				</form>
			</main>
		</section>
	);
}
