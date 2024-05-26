import { StateNames, fuelTypes, states, vehicleSegments } from '../shared/data';
import DownloadButton from '../shared/DownloadButton';
import InputFormField from '../shared/InputFormField';
import SelectFormField from '../shared/SelectFormField';
import FormColumn from '../shared/FormColumn';
import { useEffect, useState } from 'react';

const Components = props => {
	const {
		register,
		errors,
		choice,
		setChoice,
		setSegment,
		setManufacturer,
		setModel,
		manufacturerArray,
		modelArray,
		petrolPrice,
		dieselPrice,
		setPetrolPrice,
		setDieselPrice,
		tariff,
		setTariff,
	} = props;
	const [selectedState, setSelectedState] = useState('');

	useEffect(() => {
		if (selectedState) {
			const state = states.find(state => state.label === selectedState);
			if (choice === 'petrol') setPetrolPrice(state.petrol);
			if (choice === 'diesel') setDieselPrice(state.diesel);
			setTariff(state.domesticTariff);
		}
	}, [selectedState, choice]);
	return (
		<>
			<div className='flex flex-col h-full lg:flex-row justify-between gap-8 p-7'>
				<FormColumn>
					<SelectFormField
						id='vehicleSegment'
						register={register}
						array={vehicleSegments}
						error={errors.vehicleSegment}
						label='Vehicle Segment'
						change={setSegment}
					/>
					<SelectFormField
						id='manufacturer'
						register={register}
						array={manufacturerArray}
						error={errors.manufacturer}
						label='Manufacturer'
						change={setManufacturer}
					/>
					<SelectFormField
						id='model'
						register={register}
						array={modelArray}
						error={errors.model}
						label='Model'
						change={setModel}
					/>
					<InputFormField
						id='chargerPowerOutput'
						placeholder='Enter value'
						register={register}
						error={errors.chargerPowerOutput}
						label='Home Charger Power Output (kW)'
					/>
					<InputFormField
						id='distance'
						placeholder='Enter value'
						register={register}
						error={errors.distance}
						label='Distance to be traveled (km)'
					/>
				</FormColumn>
				<FormColumn>
					<SelectFormField
						id='state'
						register={register}
						array={StateNames}
						error={errors.state}
						label='Chose your state'
						change={setSelectedState}
					/>
					<InputFormField
						id='domesticTariff'
						placeholder='Enter amount'
						register={register}
						error={errors.domesticTariff}
						label='Domestic Tariff Cost / kWh'
						value={tariff}
						onChange={e => setTariff(e.target.value)}
					/>
					<SelectFormField
						id='fuelType'
						register={register}
						array={fuelTypes}
						error={errors.fuelType}
						label='Compared with Petrol/Diesel vehicle'
						change={setChoice}
					/>
					{choice === '' && <div className='text-white h-[200px] w-full'>.</div>}
					{choice === 'petrol' && (
						<>
							<InputFormField
								id='cMileage'
								placeholder='Enter value'
								register={register}
								error={errors.cMileage}
								label='Conventional Mileage (km/l)'
							/>
							<InputFormField
								id='petrolPrice'
								placeholder='Enter value'
								register={register}
								error={errors.petrolPrice}
								label='Petrol Price (₹/l)'
								value={petrolPrice}
								onChange={e => setPetrolPrice(e.target.value)}
							/>
						</>
					)}
					{choice === 'diesel' && (
						<>
							<InputFormField
								id='cMileage'
								placeholder='Enter value'
								register={register}
								error={errors.c}
								label='Conventional Mileage (km/l)'
							/>
							<InputFormField
								id='dieselPrice'
								placeholder='Enter value'
								register={register}
								error={errors.dieselPrice}
								label='Diesel Price (₹/l)'
								value={dieselPrice}
								onChange={e => setDieselPrice(e.target.value)}
							/>
						</>
					)}
				</FormColumn>
			</div>
			<DownloadButton />
		</>
	);
};

export default Components;
