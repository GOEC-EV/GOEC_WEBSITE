import * as yup from 'yup';
import React, { useEffect, useState } from 'react';
import styles from './SendResume.module.css';
import { State, City } from 'country-state-city';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { MdOutlineKeyboardArrowDown, MdUploadFile } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import Dropzone from '@/components/ui/Dropzone';
import { app } from '@/utilities/firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

const storage = getStorage(app);

const schema = yup
	.object({
		first_name: yup.string().required('first Name is a required field').trim(),
		lest_name: yup.string().trim(),
		email: yup.string().required('Email is a required field').email('must be a valid email'),
		phone: yup.string().required('Phone is a required field').min(11, 'must be a valid Phone number'),
		city: yup.string().required('city is a required field').trim(),
		gst: yup.string().required('gst is a required field').trim(),
		// resume: yup.mixed().nullable('resume is a required field'),
	})
	.required();

export default function SendResume() {
	const [domLoaded, setDomLoaded] = useState(false);
	const [btnLoading, setBtnLoading] = useState(false);
	const [country] = useState({ name: 'India', code: 'IN' });
	const [state, setState] = useState({ name: '', code: '' });
	const [city, setCity] = useState({ name: '', code: '' });
	const [file, setFile] = useState(null);
	const [fileError, setFileError] = useState('');
	const [progress, setProgress] = useState(0);
	const [submitStatus, setSubmitStatus] = useState('initial');

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = async data => {
		if (!file) {
			setFileError('Resume is a required');
			return;
		}

		const storageRef = ref(storage, `files/${crypto.randomUUID()}`);

		const uploadTask = uploadBytesResumable(storageRef, file);
		setSubmitStatus('uploading');
		uploadTask.on(
			'state_changed',
			snapshot => {
				const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				setProgress(prog);
			},
			error => {
				console.error(error);
				toast('Error uploading file', {
					type: 'error',
				});
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
					setSubmitStatus('submitting');
					const name = `${data.first_name} ${data.last_name}`;
					const formData = {
						name: name.trim(),
						email: data.email,
						phone: data.phone,
						resume: downloadURL,
						city: city.name,
						state: state.name,
					};

					try {
						setBtnLoading(true);
						const response = await fetch('/api/applyForCareer', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json',
							},
							body: JSON.stringify(formData),
						});
						const result = await response.json();
						if (result?.status === 'true') {
							toast.success('Submitted. We will contact you soon!');
							setFile(null);
							setState({ code: '', name: '' });
							reset();
						} else {
							toast.error('Error submitting form');
						}
					} catch (error) {
						console.error(error);
						toast.error("Couldn't submit form");
					} finally {
						setSubmitStatus('initial');
					}
				});
			}
		);
	};

	useEffect(() => {
		setDomLoaded(true);
	}, []);

	return (
		<>
			{domLoaded && (
				<div className={styles.warper}>
					<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center  '>
						<h1 className={styles.hading}>Send us your resume</h1>
						<div className={styles.warper2}>
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
							<div>
								<Dropzone file={file} setFile={setFile} setFileError={setFileError} />
								{fileError && <p className='text-red-500 font-normal text-sm'>{fileError}</p>}
							</div>

							<div className='py-5 mt-5'>
								<button disabled={submitStatus !== 'initial'} type='submit' className={styles.CardBtn}>
									<div className={styles.CardBtnText}>
										{submitStatus === 'uploading' && 'Uploading... ' + progress.toFixed(2) + '%'}
										{submitStatus === 'submitting' && 'Submitting...'}
										{submitStatus === 'initial' && 'Submit'}
									</div>
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
