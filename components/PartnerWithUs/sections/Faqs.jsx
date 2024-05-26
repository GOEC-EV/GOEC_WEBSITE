import React from 'react';
import styles from './Faqs.module.css';
import AccordionTab from '@/components/AppLandingPage/AccordionTab';

export default function Faqs() {
	return (
		<section className='md:py-[100px] pb-[50px]'>
			<main className='container_wrapper'>
				<h1 className='font-head font-[500] leading-normal text-[28px] text-[#1B1B1B] text-center'>
					FAQs<span className='dot dot8'></span>
				</h1>
				<article className='mt-[60px] md:mt-[80px] w-full'>
					<AccordionTab
						opened={[1, 2, 3, 4]}
						data={[
							{
								id: 1,
								question: 'Can I charge any vehicle on GO EC network?',
								answer:
									'Yes, GO EC offers EV charging for all vehicles from two-wheelers all the way up to big, heavy-duty ones!',
							},
							{
								id: 2,
								question: 'Can I reserve a charging slot in advance, and how do I do so?',
								answer: `Yes, you can.<li>On your goec app, you may search for and select your preferred charging station or choose one from the map you see on the screen.</li><li>Then a new window emerges in which you can reserve your slot by entering your time and other necessary data.</li>`,
							},
							{
								id: 3,
								question: 'Will I be notified by phone when the charging session is over?',
								answer:
									'Yes, you will receive a mobile notification in your GOEC app once the charging session is complete.',
							},
							{
								id: 4,
								question: 'Does GOEC offer an automatic stop feature once charging is finished?',
								answer:
									'Yes, When the charging is finished, the power will be turned off automatically, so there is no need to worry about the battery overheating.',
							},
						]}
					/>
				</article>
			</main>
		</section>
	);
}
