const InputFormField = props => {
	return (
		<div className='text-[14px] flex flex-col'>
			<label htmlFor={props.id}>{props.label}</label>
			<input
				type='text'
				id={props.id}
				inputMode='numeric'
				placeholder={props.placeholder || 'Enter amount'}
				defaultValue={props.value || props.defaultValue || ''}
				{...props.register(props.id, { valueAsNumber: props.valueAsNumber })}
				disabled={props.disabled ? true : false}
				onChange={props.onChange && props.onChange}
			/>
			{props.error && <span className='text-red-600 pl-2 leading-none pt-1'>{props.error.message}</span>}
		</div>
	);
};

export default InputFormField;
