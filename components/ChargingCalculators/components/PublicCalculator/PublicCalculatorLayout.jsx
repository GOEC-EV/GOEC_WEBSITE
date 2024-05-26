import { useForm } from 'react-hook-form';
import cn from '@/utilities/cn';
import styles from '../../form.module.css';
import Components from './Components';
import { useState } from 'react';
import { pages } from '../shared/data';
import Loading from '../shared/Loading';
import Output from '../shared/Output';
import { useVehicleProvider } from '../shared/hooks/vehicleProvider';
import { useYupValidationResolver } from '../shared/yup';
import * as yup from 'yup';

const PublicCalculatorLayout = () => {
	let validationSchema = yup.object({
		vehicleSegment: yup.string().required('Please select a segment'),
		manufacturer: yup.string().required('Please select a manufacturer'),
		model: yup.string().required('Please select a model'),
		fuelType: yup.string().required('Please select a fuel type'),
		costPerKwh: yup.string().required('Please enter a cost per kWh'),
		chargerPowerOutput: yup.string().required('Please enter a charger power output'),
	});
	const resolver = useYupValidationResolver(validationSchema);
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setError,
	} = useForm({ resolver });
	// } = useForm();

	const [page, setPage] = useState(pages.INPUT);
	const [choice, setChoice] = useState('');
	const [values, setValues] = useState(null);
	const {
		setSegment,
		setManufacturer,
		setModel,
		manufacturer,
		manufacturerArray,
		model,
		modelArray,
		calculatePublic,
	} = useVehicleProvider();

	const errMsg = { type: 'custom', message: 'Please enter a value!' };
	const onSubmit = async data => {
		if (choice === 'distance' && data.distanceToBeTravelled === '') {
			setError('distanceToBeTravelled', errMsg);
			return;
		}
		if (choice === 'batteryLevel') {
			if (data.batteryStartLevel === '') return setError('batteryStartLevel', errMsg);
			if (data.batteryEndLevel === '') return setError('batteryEndLevel', errMsg);
			const bs = parseFloat(data.batteryStartLevel);
			const be = parseFloat(data.batteryEndLevel);
			if (isNaN(bs)) return setError('batteryStartLevel', errMsg);
			if (isNaN(be)) return setError('batteryEndLevel', errMsg);
			if (be <= bs)
				return setError('batteryEndLevel', {
					type: 'custom',
					message: 'The end battery level must be greater than the starting battery level!',
				});
		}

		setPage(pages.LOADING);
		console.log(data);
		const ans = calculatePublic(data, manufacturer, model, choice);
		setValues(ans);
		await new Promise(resolve => {
			setTimeout(() => {
				resolve();
				setPage(pages.OUTPUT);
			}, 2000);
		});
	};

	const calculateAgain = async () => {
		setPage(pages.LOADING);
		reset();
		await new Promise(resolve => {
			setTimeout(() => {
				resolve();
				setPage(pages.INPUT);
			}, 500);
		});
	};
	return (
		<div className='w-full h-full'>
			{page === pages.INPUT && (
				<form
					className={cn('relative text-black lg:h-[480px] h-[640px] overflow-auto', styles.grey_scrollbar)}
					onSubmit={handleSubmit(onSubmit)}>
					<Components
						register={register}
						errors={errors}
						choice={choice}
						setChoice={setChoice}
						setSegment={setSegment}
						setManufacturer={setManufacturer}
						setModel={setModel}
						manufacturerArray={manufacturerArray}
						modelArray={modelArray}
					/>
				</form>
			)}
			{page === pages.LOADING && <Loading />}
			{page === pages.OUTPUT && values && <Output onClick={calculateAgain} values={values} />}
			{page === pages.OUTPUT && !values && (
				<Output
					onClick={calculateAgain}
					text={'The inputted information contains errors. Please enter the amounts as just numerical values.'}
				/>
			)}
		</div>
	);
};

export default PublicCalculatorLayout;
