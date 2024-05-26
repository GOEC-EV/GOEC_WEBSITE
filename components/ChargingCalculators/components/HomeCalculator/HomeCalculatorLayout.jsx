import { useState } from 'react';
import cn from '@/utilities/cn';
import styles from '../../form.module.css';
import { useForm } from 'react-hook-form';
import Components from '../HomeCalculator/Components';
import { pages } from '../shared/data';
import Loading from '../shared/Loading';
import Output from '../shared/Output';
import { useVehicleProvider } from '../shared/hooks/vehicleProvider';
import * as yup from 'yup';
import { useYupValidationResolver } from '../shared/yup';

const HomeCalculatorLayout = () => {
	let validationSchema = yup.object({
		vehicleSegment: yup.string().required('Please select a segment'),
		manufacturer: yup.string().required('Please select a manufacturer'),
		model: yup.string().required('Please select a model'),
		cMileage: yup.string().required('Please enter a mileage'),
		chargerPowerOutput: yup.string().required('Please enter a charger power output'),
		distance: yup.string().required('Please enter a distance'),
		fuelType: yup.string().required('Please select a fuel type'),
		state: yup.string().required('Please select a state'),
	});
	const resolver = useYupValidationResolver(validationSchema);
	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		reset,
	} = useForm({ resolver });
	// } = useForm();

	const [page, setPage] = useState(pages.INPUT);
	const [choice, setChoice] = useState('');
	const [values, setValues] = useState(null);
	const [petrolPrice, setPetrolPrice] = useState('');
	const [dieselPrice, setDieselPrice] = useState('');
	const [tariff, setTariff] = useState('');
	const { setSegment, setManufacturer, setModel, manufacturer, manufacturerArray, model, modelArray, calculateHome } =
		useVehicleProvider();

	const onSubmit = async data => {
		console.log(data);
		if (tariff === '') {
			setError('domesticTariff', { type: 'custom', message: 'Please enter a value' });
			return;
		}
		if (petrolPrice === '' && dieselPrice === '') {
			setError('petrolPrice', { type: 'custom', message: 'Please enter a value' });
			setError('dieselPrice', { type: 'custom', message: 'Please enter a value' });
			return;
		}
		setPage(pages.LOADING);
		const ans = calculateHome(
			data,
			manufacturer,
			model,
			choice,
			choice === 'petrol' ? petrolPrice : dieselPrice,
			tariff
		);
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
		setTariff('');
		setPetrolPrice('');
		setDieselPrice('');
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
					className={('relative text-black lg:h-[480px] h-[780px] overflow-auto', styles.grey_scrollbar)}
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
						petrolPrice={petrolPrice}
						setPetrolPrice={setPetrolPrice}
						dieselPrice={dieselPrice}
						setDieselPrice={setDieselPrice}
						tariff={tariff}
						setTariff={setTariff}
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

export default HomeCalculatorLayout;
