import { City, State } from 'country-state-city';
import { useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import styles from './ContactFrom.module.css';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { ToggleGroup, ToggleGroupItem } from '../ui/ToggleGroup';
import Dropzone from '@/components/ui/Dropzone';
import Image from 'next/image';
import { contactFormSchema } from '@/utilities/validation';
import useContactFormStore from '@/stores/contactFormStore';
import useModal from '@/hooks/useModal';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '@/utilities/firebase';

// const countryCodes = customList('countryCode', '{countryCallingCode}');
const storage = getStorage(app);

export default function ApplyForStationForm({ text }) {
	const { setFormData, setFile, file, clearFormData, sendData, formData } = useContactFormStore();
	const [submitStatus, setSubmitStatus] = useState('initial');
	const { openModal } = useModal();
	const router = useRouter();
	const [domLoaded, setDomLoaded] = useState(false);
	const [progress, setProgress] = useState(0);
	const [country] = useState({ name: 'India', code: 'IN' });
	const [state, setState] = useState({ name: '', code: '' });
	const [city, setCity] = useState({ name: '', code: '' });
	const [fileError, setFileError] = useState('');
	const [investing, setInvesting] = useState(null);
	const [investingError, setInvestingError] = useState(false);
	const [toggleValue, setToggleValue] = useState({
		personType: '',
		propertyType: '',
		haveLand: '',
	});

	const {
		register,
		formState: { errors },
		handleSubmit,
		setValue,
		setError,
		reset,
		getValues,
	} = useForm({
		resolver: yupResolver(contactFormSchema),
	});

	function resetForm() {
		setFile(null);
		setState({ name: '', code: '' });
		setCity({ name: '', code: '' });
		setToggleValue({
			personType: '',
			propertyType: '',
			haveLand: '',
		});
		setInvesting(null);
		reset();
	}

	async function submitForm() {
		setSubmitStatus('submitting');
		await sendData(
			() => {
				clearFormData();
				router.push('/thanks');
				setSubmitStatus('initial');
				resetForm();
			},
			err => {
				toast(err ?? 'Something went wrong', {
					type: 'error',
				});
				setSubmitStatus('initial');
			}
		);
	}

	const onSubmit = async data => {
		if (data.haveLand !== '' && investing === null) {
			setInvestingError(true);
			return;
		}

		if (data.haveLand === 'false') {
			setFormData({
				moreThan10Lakh: investing,
				willingToInvest: false,
			});
		} else {
			setFormData({
				moreThan10Lakh: false,
				willingToInvest: investing,
			});
		}

		setFormData(data);

		if (!file) {
			setFormData({
				fileUrl: '',
			});
			await submitForm();
			return;
		}

		const storageRef = ref(storage, `files/${crypto.randomUUID()}${file.name}`);

		const blob = new Blob([file], { type: file.type });

		const metadata = {
			contentType: file.type,
		};

		const uploadTask = uploadBytesResumable(storageRef, blob, metadata);
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
				setSubmitStatus('initial');
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then(async downloadURL => {
					setFormData({
						fileUrl: downloadURL,
					});
					await submitForm();
				});
			}
		);
	};

	function handleGroupToggle(name, val) {
		setValue(name, val);
		setToggleValue(prev => ({ ...prev, [name]: val }));
		if (val !== '') {
			setError(name, null);
		} else {
			setError(name, {
				message: 'Please select an option',
			});
		}
	}

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
									<p className='inputTextP'>{errors.city?.message}</p>
								</div>
							</div>
							<div className=' relative py-2'>
								<input
									className={` ${styles.input} ${errors.phone ? 'invalid' : ''}`}
									placeholder='Pincode'
									{...register('pincode')}
								/>
								<p className='inputTextP'>{errors.pincode?.message}</p>
							</div>
							<div className='relative py-2 space-y-4'>
								<label className='text-[#BDBDBD] font-medium' htmlFor='person-type'>
									You are a ?
								</label>
								<ToggleGroup
									id='person-type'
									value={toggleValue.personType}
									className='gap-4 grid grid-cols-2'
									onValueChange={val => handleGroupToggle('personType', val)}
									type='single'>
									<ToggleGroupItem className='gap-4' value='BUSINESS' aria-label='Toggle Business'>
										Business
									</ToggleGroupItem>
									<ToggleGroupItem className='gap-4' value='INDIVIDUAL' aria-label='Toggle Individual'>
										Individual
									</ToggleGroupItem>
								</ToggleGroup>
								<p className='text-red-500 font-normal text-sm'>{errors.personType?.message}</p>
							</div>
							<div className='relative py-2 space-y-4'>
								<label className='text-[#BDBDBD] font-medium' htmlFor='property-type'>
									What is the type of Property you have ?
								</label>
								<ToggleGroup
									id='property-type'
									value={toggleValue.propertyType}
									className='gap-4 grid grid-cols-1 lg:grid-cols-3'
									onValueChange={val => handleGroupToggle('propertyType', val)}
									type='single'>
									<ToggleGroupItem
										className='gap-4'
										value='COMMERCIAL BUILDING'
										aria-label='Toggle Commercial Building'>
										<img src='/images/icons/building.svg' height={20} width={20} alt='Commercial Building' />
										<span>Commercial Building</span>
									</ToggleGroupItem>
									<ToggleGroupItem
										className='gap-4 h-full'
										value='HOTEL/RESTAURANT'
										aria-label='Toggle Hotel/Restaurant'>
										<img src='/images/icons/restaurant.svg' height={20} width={20} alt='Hotel/Restaurant' />
										<span>Hotel/Restaurant</span>
									</ToggleGroupItem>
									<ToggleGroupItem className='gap-4 h-full' value='PLAIN LAND' aria-label='Toggle Plain Land'>
										<img src='/images/icons/plain-land.svg' height={20} width={20} alt='Plain Land' />
										<span>Plain Land</span>
									</ToggleGroupItem>
								</ToggleGroup>
								<p className='text-red-500 font-normal text-sm'>{errors.propertyType?.message}</p>
							</div>
							<div className='relative py-2 space-y-4'>
								<label className='text-[#BDBDBD] font-medium' htmlFor='person-type'>
									Do you have land to setup charging station?
								</label>
								<ToggleGroup
									id='person-type'
									value={toggleValue.haveLand}
									className='gap-4 grid grid-cols-2'
									onValueChange={val => {
										handleGroupToggle('haveLand', val);
										setInvesting(null);
									}}
									type='single'>
									<ToggleGroupItem
										className='gap-4 text-xs sm:font-sm h-full'
										value='true'
										aria-label='Toggle "Yes, I have Land"'>
										Yes, I have Land
									</ToggleGroupItem>
									<ToggleGroupItem
										className='gap-4 text-xs sm:font-sm h-full'
										value='false'
										aria-label='Toggle "No, I have No Land"'>
										No, I have No Land
									</ToggleGroupItem>
								</ToggleGroup>
								<p className='text-red-500 font-normal text-sm'>{errors.haveLand?.message}</p>
							</div>
							{getValues('haveLand') !== '' && (
								<div className='relative py-2 space-y-4'>
									{getValues('haveLand') === 'true' && (
										<>
											<label className='text-[#BDBDBD] font-medium' htmlFor='person-type'>
												Are you comfortable in investing more than 10 Lakhs in EV charging station business
												?
											</label>
											<ToggleGroup
												id='person-type'
												value={investing !== null ? String(investing) : ''}
												className='gap-4 grid grid-cols-2'
												onValueChange={val => {
													if (val !== '') {
														setInvesting(val === 'true' ? true : false);
														setInvestingError(false);
													} else {
														setInvesting(null);
													}
												}}
												type='single'>
												<ToggleGroupItem
													className='gap-4 text-xs sm:font-sm h-full'
													value='true'
													aria-label='Toggle "Yes, I have Land"'>
													Yes,I am
												</ToggleGroupItem>
												<ToggleGroupItem
													className='gap-4 text-xs sm:font-sm h-full'
													value='false'
													aria-label='Toggle "No, I have No Land"'>
													No,I am not
												</ToggleGroupItem>
											</ToggleGroup>
											<p className='text-red-500 font-normal text-sm'>{errors.haveLand?.message}</p>
										</>
									)}
									{getValues('haveLand') === 'false' && (
										<>
											<label className='text-[#BDBDBD] font-medium' htmlFor='person-type'>
												Are you willing to invest in charging stations owned by GOEC?
											</label>
											<ToggleGroup
												id='person-type'
												value={investing !== null ? String(investing) : ''}
												className='gap-4 grid grid-cols-2'
												onValueChange={val => {
													if (val !== '') {
														setInvesting(val === 'true' ? true : false);
														setInvestingError(false);
													} else {
														setInvesting(null);
													}
												}}
												type='single'>
												<ToggleGroupItem
													className='gap-4 text-xs sm:font-sm h-full'
													value='true'
													aria-label='Toggle "Yes, I have Land"'>
													Yes,I am interested
												</ToggleGroupItem>
												<ToggleGroupItem
													className='gap-4 text-xs sm:font-sm h-full'
													value='false'
													aria-label='Toggle "No, I have No Land"'>
													No,I am not interested
												</ToggleGroupItem>
											</ToggleGroup>
										</>
									)}
									{investingError && (
										<p className='text-red-500 font-normal text-sm'>Please select an option</p>
									)}
								</div>
							)}
							<div>
								<Dropzone
									content='Upload an image of your land'
									file={file}
									setFile={setFile}
									setFileError={setFileError}
								/>
								{/* {fileError && <p className='text-red-500 font-normal text-sm'>{fileError}</p>} */}
							</div>
							<div className='py-5 mt-5'>
								<button disabled={submitStatus !== 'initial'} type='submit' className={styles.CardBtn}>
									<div className={styles.CardBtnText}>
										{submitStatus === 'initial' && 'Submit'}
										{submitStatus === 'uploading' && `Uploading ${progress.toFixed(2)}%`}
										{submitStatus === 'submitting' && 'Submitting'}
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
