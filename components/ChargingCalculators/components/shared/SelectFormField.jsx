const SelectFormField = props => {
	const handleChange = e => {
		if (props.change) {
			props.change(e.target.value);
			console.log(e.target.value);
		}
	};
	return (
		<div className='text-[14px] flex flex-col'>
			<label htmlFor={props.id}>{props.label}</label>
			<select id={props.id} {...props.register(props.id)} onChange={handleChange}>
				{![props.array[0], props.array[0]?.value].includes('') && <option value=''>Select an option</option>}
				{props.array.length >= 0 &&
					props.array.map(segment =>
						segment.label ? (
							<option key={segment.value} value={segment.value}>
								{segment.label}
							</option>
						) : (
							<option key={segment} value={segment}>
								{segment === '' ? 'Select an option' : segment}
							</option>
						)
					)}
			</select>
			{props.error && <span className='text-red-600 pl-2 leading-none pt-1'>{props.error.message}</span>}
		</div>
	);
};

export default SelectFormField;
