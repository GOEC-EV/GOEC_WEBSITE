import FormColumn from '../shared/FormColumn';
import SelectFormField from '../shared/SelectFormField';
import InputFormField from '../shared/InputFormField';
import { distanceBatteryLevel, vehicleSegments } from '../shared/data';
import DownloadButton from '../shared/DownloadButton';

const Components = props => {
	const { register, errors, choice, setChoice, setSegment, setManufacturer, setModel, manufacturerArray, modelArray } =
		props;
	console.log(choice);
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
				</FormColumn>
				<FormColumn>
					<InputFormField
						id='costPerKwh'
						placeholder='Enter amount'
						register={register}
						error={errors.costPerKwh}
						label='Cost / kWh'
					/>
					<InputFormField
						id='chargerPowerOutput'
						placeholder='Enter amount'
						register={register}
						error={errors.chargerPowerOutput}
						label='Charger Power Output (kW)'
					/>
					<SelectFormField
						id='fuelType'
						register={register}
						array={distanceBatteryLevel}
						error={errors.fuelType}
						label='Select Distance or Battery Level'
						change={setChoice}
					/>
					{choice === '' && <div className='h-[100px] w-full text-white'>.</div>}
					{choice === 'distance' && (
						<InputFormField
							id='distanceToBeTravelled'
							placeholder='Enter distance'
							register={register}
							error={errors.distanceToBeTravelled}
							label='Distance to be travelled (km)'
						/>
					)}
					{choice === 'batteryLevel' && (
						<>
							<InputFormField
								id='batteryStartLevel'
								placeholder='Enter battery level'
								register={register}
								error={errors.batteryStartLevel}
								label='Battery level at start (%)'
							/>
							<InputFormField
								id='batteryEndLevel'
								placeholder='Enter battery level'
								register={register}
								error={errors.batteryEndLevel}
								label='Battery level at end (%)'
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
