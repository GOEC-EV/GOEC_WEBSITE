import { City, State } from 'country-state-city';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import * as yup from 'yup';
import styles from './ContactFrom.module.css';
// import { motion } from 'framer-motion';
// import { opacityUp } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const schema = yup
	.object({
		first_name: yup.string().required('first Name is a required field').trim(),
		lest_name: yup.string().trim(),
		email: yup.string().required('Email is a required field').email('must be a valid email'),
		phone: yup.string().required('Phone is a required field').min(10, 'must be 10 digit Phone number'),
		city: yup.string().required('city is a required field').trim(),
		gst: yup.string().required('gst is a required field').trim(),
	})
	.required();

export default function ContactFrom({ text }) {
	// const [element, controls] = useScroll();
	const router = useRouter();
	const [domLoaded, setDomLoaded] = useState(false);
	const [btnLoading, setBtnLoading] = useState(false);
	const [country] = useState({ name: 'India', code: 'IN' });
	const [state, setState] = useState({ name: '', code: '' });
	const [city, setCity] = useState({ name: '', code: '' });

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async data => {
		const name = `${data.first_name} ${data.last_name}`;
		const formData = { name: name.trim(), email: data.email, phone: data.phone, city: city.name, state: state.name };
		try {
			const config = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			};
			setBtnLoading(true);
			const response = await fetch(`/api/saveContact2`, config);
			const result = await response.json();
			if (result?.status === 'true') {
				setBtnLoading(false);
				toast.success('Submitted. We will contact you soon!');
				router.push('/thanks');
			} else {
				throw new Error(result?.message);
			}
		} catch (error) {
			setBtnLoading(false);
			toast.error(`${error?.message}`);
		}
	};

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	return (
		<>
			{domLoaded && (
				<div className={styles.warper}>
					<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center  '>
						{text && <h1 className={styles.hading}>{text}</h1>}
						<div
							// initial='hidden'
							// animate={controls}
							// variants={opacityUp}
							// transition={{
							// 	delay: 0,
							// 	ease: 'linear',
							// 	duration: 0.8,
							// }}
							className={styles.warper2}>
							<div className=' grid grid-cols-1 md:grid-cols-2 md:gap-5 '>
								<div className=' relative py-2'>
									<input
										className={` ${styles.input} ${errors.first_name ? 'invalid' : ''}`}
										placeholder='First Name*'
										{...register('first_name')}
									/>
									<p className='inputTextP'>{errors.first_name?.message}</p>
								</div>
								<div className=' relative py-2'>
									<input
										className={` ${styles.input} ${errors.last_name ? 'invalid' : ''}`}
										placeholder='Last Name*'
										{...register('last_name')}
									/>
									<p className='inputTextP'>{errors.last_name?.message}</p>
								</div>
							</div>
							<div className=' relative py-2'>
								<input
									className={` ${styles.input} ${errors.email ? 'invalid' : ''}`}
									placeholder='Email ID*'
									{...register('email')}
								/>
								<p className='inputTextP'>{errors.email?.message}</p>
							</div>
							<div className=' relative py-2'>
								<input
									className={` ${styles.input} ${errors.phone ? 'invalid' : ''}`}
									placeholder='Phone Number*'
									{...register('phone')}
								/>
								<p className='inputTextP'>{errors.phone?.message}</p>
							</div>

							<div className=' grid grid-cols-1 md:grid-cols-2 md:gap-5 '>
								<div className=' relative py-2 '>
									<select
										className={` ${styles.selectBox} ${errors.gst ? 'invalid' : ''}`}
										{...register('gst')}
										value={state.code}
										onChange={e =>
											setState({ code: e.target.value, name: e.target.selectedOptions[0].text })
										}>
										<option value=''>State</option>
										{State &&
											State.getStatesOfCountry(country.code).map(item => (
												<option key={item.isoCode} value={item.isoCode} name={item.name}>
													{item.name}
												</option>
											))}
									</select>
									<div className=' absolute top-8 right-2 text-[#bdbdbd]'>
										<MdOutlineKeyboardArrowDown />
									</div>
									<p className='inputTextP'>{errors.gst?.message}</p>
								</div>
								<div className=' relative py-2 '>
									<select
										className={` ${styles.selectBox} ${errors.city ? 'invalid' : ''}`}
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
									<div className=' absolute top-8 right-2 text-[#bdbdbd]'>
										<MdOutlineKeyboardArrowDown />
									</div>
									<p className='inputTextP'>{errors.gst?.message}</p>
								</div>
							</div>
							<div className='py-5 mt-5'>
								<button disabled={btnLoading} type='submit' className={styles.CardBtn}>
									<div className={styles.CardBtnText}>Submit</div>
									<div className={styles.CardBtnIcon}>
										<HiOutlineArrowUpRight />
									</div>
								</button>
							</div>
						</div>
					</form>
				</div>
			)}
		</>
	);
}