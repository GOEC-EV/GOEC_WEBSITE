import Button from '@/components/Utils/Button';
import Image from 'next/image';
import feature1 from '../assets/feature1.png';
import feature2 from '../assets/feature2.png';
import feature3 from '../assets/feature3.png';
import styles from './Features.module.css';

export default function Features() {
	return (
		<section className=''>
			<div className='container_wrapper'>
				<h1 className='text-[#1B1B1B] text-[24px] md:text-[32px] leading-[1.4] font-head font-[500] mb-1'>
					Why opt for <span className={styles.blueText}>GO EC </span> supercharging <br /> stations?
					<span className='text-[#007AFF] text-[32px] font-head font-[500]'>.</span>
				</h1>
				<span className={styles.line}></span>
				<article className='mt-10 grid md:grid-cols-4 gap-[18px]'>
					<div className={`w-full bg-[#13F2AD] p-[18px] flex flex-col items-center pt-8 ${styles.card}`}>
						<div className='h-[190px] w-[190px] flex items-center justify-center'>
							<Image
								src={feature1}
								alt='Feature'
								height={100}
								width={175}
								className='h-full w-full object-contain'
							/>
						</div>
						<h1 className='w-full font-head font-[600] text-[14px] leading-normal text-[#1B1B1B] mt-8'>
							High ROI
						</h1>
						<p className='text-[14px] leading-normal text-[#333333] mt-2'>
							Start earning returns from day one by installing a <span className='font-[700]'>GO EC</span> EV
							supercharging station on your premises.
						</p>
					</div>
					<div className={`w-full bg-[#13F2AD] p-[18px] pt-8 ${styles.card}`}>
						<div className='h-[190px] w-auto flex items-center justify-center'>
							<Image
								src={feature2}
								alt='Feature'
								height={100}
								width={175}
								className='h-full w-auto object-cover'
							/>
						</div>
						<h1 className='font-head text-[14px] font-[600] leading-normal text-[#1B1B1B] mt-6'>
							Future focused Business
						</h1>
						<p className='text-[14px] leading-normal text-[#333333] mt-2'>
							Almost all automakers are rolling out EVs on a daily basis, take advantage of this trend and invest
							in <span className='font-[700]'>GO EC</span> EV charging stations.
						</p>
					</div>
					<div className={`w-full bg-[#13F2AD] p-[18px] pt-8 ${styles.card}`}>
						<div className='h-[190px] w-auto flex items-center justify-center'>
							<Image
								src={feature3}
								alt='Feature'
								height={100}
								width={175}
								className='h-[160px] w-auto object-cover'
							/>
						</div>
						<h1 className='font-head font-[600] text-[14px] leading-normal text-[#1B1B1B] mt-6'>
							Manless Operation
						</h1>
						<p className='text-[14px] leading-normal text-[#333333] mt-2'>
							<span className='font-[700]'>GO EC</span> EV charging stations allow you to operate your charging
							station from anywhere in the world without human intervention.
						</p>
					</div>
					<div className='flex flex-col justify-center items-center md:items-start w-full p-4'>
						<h1 className='text-[24px] leading-tight font-head font-[500] mb-4'>Are you Convinced? </h1>
						<div className={styles.button}>
							<Button text='Apply Now' link='/' />
						</div>
					</div>
				</article>
			</div>
		</section>
	);
}
