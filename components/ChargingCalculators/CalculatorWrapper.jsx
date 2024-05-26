import styles from './form.module.css';
import cn from '@/utilities/cn';

const CalculatorWrapper = props => {
	let content = [];
	if (props.type === 'Home')
		content = [
			"While home EV charging is the most cost-effective option, it's crucial to align your charging routine with your monthly budget. Give our Home Charging Calculator a try to estimate the cost of charging your EV at home.",
			'Using this user-friendly tool, you can make well-informed decisions about your EV charging routine at home. This calculator helps you to plan your charging schedule, stay within your budget, and enjoy a smooth and stress-free home EV charging experience.',
		];
	if (props.type === 'Public')
		content = [
			'Now, you can easily figure out the estimated cost of your public EV charging with our user-friendly public charging calculator. This tool not only helps you plan your trips and routes more cost-effectively but also allows you to make the best decisions about your charging strategy.',
			"Experience smooth public charging as you utilize our public EV charging calculator to optimize your journey's financial aspects. With real-time estimates, you can plan your stops, manage your budget, and enjoy a seamless and relaxed public EV charging experience.",
		];
	return (
		<div style={{ backgroundColor: 'var(--bgDark)' }}>
			<div className='relative flex flex-col lg:flex-row w-full h-fit text-white'>
				<div className='lg:w-[60%] lg:h-[700px] bg-cover bg-no-repeat absolute top-0 w-full px-[2.5%] lg:left-0 h-[420px] lg:relative flex flex-col justify-around lg:justify-between bg-[url("/images/bg/calc_bg.png")] lg:pl-12 lg:pt-12 pb-20'>
					<div className='flex flex-col gap-4 items-start justify-start'>
						<img
							src='/images/icons/header-logo.svg'
							className='h-[60px] w-auto cursor-pointer'
							alt='Brand Logo'
						/>
						<div className='flex flex-col leading-none text-[36px] text-left'>
							<span className='font-para font-[600]'>{props.type}</span>
							<span className='font-para font-[600]'>Charging</span>
						</div>
						<div className='lg:w-[450px] w-full text-[13.5px] lg:text-[14.5px] leading-tight space-y-1 lg:space-y-3'>
							{content && content.map((p, index) => <p key={index}>{p}</p>)}
						</div>
					</div>
				</div>
				<div className='bg-white w-[40%] h-[700px] hidden lg:block'></div>

				<div
					className={cn(
						'relative lg:absolute mt-[360px] mb-[100px] lg:mt-0 lg:mb-0 top-[5%] left-[2.5%] lg:left-auto lg:right-[10%] rounded-2xl box-custom-shadow bg-white lg:w-[700px] w-[95%] lg:h-[560px] overflow-hidden',
						props.type === 'Home' ? 'h-[860px]' : 'h-[720px]'
					)}>
					<div className={cn('flex flex-col justify-between items-center w-full', styles.form_container)}>
						<div className='text-[18px] leading-none lg:text-[24px] text-[#0047C2] font-[600] h-[80px] text-center bg-white w-full flex justify-center items-center border-b-2'>
							<h1>How much will be the time and cost of charging</h1>
						</div>
						{props.children}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CalculatorWrapper;
