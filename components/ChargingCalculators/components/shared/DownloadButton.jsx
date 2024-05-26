const DownloadButton = props => {
	return (
		<div className='bg-[#F2F2F2] h-[70px] flex justify-center items-center sticky bottom-0'>
			<button
				type='submit'
				className='w-[250px] rounded-md bg-[#0047C2] py-[10px] text-white'
				disabled={props.disabled}
				onClick={props?.onClick}>
				{props.caption || 'Calculate the cost'}
			</button>
		</div>
	);
};

export default DownloadButton;
