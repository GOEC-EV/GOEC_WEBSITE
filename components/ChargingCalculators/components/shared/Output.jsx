import DownloadButton from './DownloadButton';
import FormColumn from './FormColumn';
import InputFormField from './InputFormField';
import { formatCurrency } from './helpers/formatCurrency';
import { formatTime } from './helpers/formatTime';

const Output = props => {
	const register = () => {};
	const errors = {
		output: null,
	};
	if (!props.values) return null;
	return (
		<>
			<div className='w-full text-black flex flex-col items-center justify-center'>
				<div className='flex flex-col h-full lg:flex-row justify-between gap-8 p-5'>
					<FormColumn>
						<InputFormField
							id='chargingTime'
							register={register}
							error={errors.output}
							label='Charging time'
							disabled
							defaultValue={formatTime(props.values.chargingTime)}
						/>
						<InputFormField
							id='chargingCost'
							register={register}
							error={errors.output}
							label='Charging cost'
							disabled
							defaultValue={formatCurrency(props.values.chargingCost)}
						/>
						<InputFormField
							id='kmAdded'
							register={register}
							error={errors.output}
							label='Km Added'
							disabled
							defaultValue={props.values.kmsAdded}
						/>
					</FormColumn>
					<FormColumn>
						<InputFormField
							id='kwhAdded'
							register={register}
							error={errors.output}
							label='kWh Added'
							disabled
							defaultValue={props.values.unitsAdded}
						/>
						<InputFormField
							id='costPerKm'
							register={register}
							error={errors.output}
							label='Cost per km'
							disabled
							defaultValue={formatCurrency(props.values.chargingCostPerKm)}
						/>
					</FormColumn>
				</div>
				<p className='px-2 lg:px-16 mb-32 pt-2 leading-tight '>{props.values?.text || ''}</p>
			</div>
			<DownloadButton caption='Calculate once again' onClick={props.onClick} />
		</>
	);
};

export default Output;
