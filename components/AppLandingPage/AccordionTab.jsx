import Markdown from 'markdown-to-jsx';
import { FiPlus } from 'react-icons/fi';
import styles from './AccordionTab.module.css';
import React, { Fragment, useEffect, useState } from 'react';

export default function AccordionTab({ data = [], opened = [] }) {
	const [active, setActive] = useState([1]);

	const defaultData = [
		{
			id: 1,
			question: 'See what execs, founders, and leaders have to say about cohort-based courses?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a enim tellus sapien arcu faucibus ultricies scelerisque. Neque, aliquam platea pulvinar purus lectus lacus massa at non. Elit viverra aliquet eu viverra ornare. Tincidunt turpis eu mauris gravida sed tortor.',
		},
		{
			id: 2,
			question: 'See what execs, founders, and leaders have to say about cohort-based courses?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a enim tellus sapien arcu faucibus ultricies scelerisque. Neque, aliquam platea pulvinar purus lectus lacus massa at non. Elit viverra aliquet eu viverra ornare. Tincidunt turpis eu mauris gravida sed tortor.',
		},
		{
			id: 3,
			question: 'See what execs, founders, and leaders have to say about cohort-based courses?',
			answer:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a enim tellus sapien arcu faucibus ultricies scelerisque. Neque, aliquam platea pulvinar purus lectus lacus massa at non. Elit viverra aliquet eu viverra ornare. Tincidunt turpis eu mauris gravida sed tortor.',
		},
	];

	function handleClick(id) {
		setActive(prev => {
			if (prev.includes(id)) return prev.filter(v => v !== id);
			return [...prev, id];
		});
	}

	useEffect(() => {
		if (opened.length) setActive(opened);
	}, [opened]);

	return (
		<div className='w-full flex flex-col gap-4'>
			{data.length ? (
				<Fragment>
					{data.map(item => {
						return (
							<div key={item.id} className={styles.hadingBg}>
								<div
									className={styles.hading}
									onClick={() => {
										handleClick(item?.id);
									}}>
									<span className='text-[20px] text-[#1B1B1B] leading-tight font-[500]'>{item?.question}</span>
									<span
										className={`transform duration-500 text-2xl  cursor-pointer  ${
											active.includes(item?.id) ? '-rotate-45 text-black' : ' text-green-500'
										}`}>
										<FiPlus />
									</span>
								</div>
								<div
									className={`relative overflow-hidden transition-all p-[20px] pt-1  duration-500 max-h-full ${
										active.includes(item?.id) ? ' block' : 'hidden'
									}`}>
									<div className={styles.Text}>
										<Markdown>{item?.answer}</Markdown>
									</div>
								</div>
							</div>
						);
					})}
				</Fragment>
			) : (
				<Fragment>
					{defaultData.map((item, index) => {
						return (
							<div key={`question-${index}`} className={styles.hadingBg}>
								<div
									className={styles.hading}
									onClick={() => {
										handleClick(item?.id);
									}}>
									<span className='text-[16px] md:text-[20px] text-[#1B1B1B] leading-normal font-[500]'>
										{item?.question}
									</span>
									<span
										className={`transform duration-500 text-4xl  cursor-pointer  ${
											active.includes(item?.id) ? '-rotate-45 text-black' : ' text-green-500'
										}`}>
										<FiPlus />
									</span>
								</div>
								<div
									className={`relative overflow-hidden transition-all p-4 pt-0 md:pt-4  duration-500 max-h-full ${
										active.includes(item?.id) ? ' block' : 'hidden'
									}`}>
									<p className={styles.Text}>
										<Markdown>{item?.answer}</Markdown>
									</p>
								</div>
							</div>
						);
					})}
				</Fragment>
			)}
		</div>
	);
}
