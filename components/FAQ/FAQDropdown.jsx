import Markdown from 'markdown-to-jsx';
import React, { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import styles from './FAQDropdown.module.css';
export default function FAQDropdown({ DropdownData }) {
	const [open, setOpen] = useState('1');

	const handleClick = item => {
		if (open === '') {
			setOpen(item);
		} else if (open == item) {
			setOpen('');
		} else {
			setOpen(item);
		}
	};
	return (
		<div className=' w-full pb-32'>
			<div className=' flex w-24 py-14 justify-start'>
				<h1 className={styles.hadarText}>FAQ</h1>
			</div>

			{DropdownData.map(Item => {
				return (
					<div key={Item.id} className={styles.hadingBg}>
						<div
							className={styles.hadingDiv}
							onClick={() => {
								handleClick(Item.id);
							}}>
							<span className={styles.hading}>{Item.Hading}</span>
							<span
								className={`transform duration-500 text-4xl  cursor-pointer  ${
									open === `${Item.id}` ? '-rotate-45 text-white' : ' text-green-500/60'
								}`}>
								<FiPlus />
							</span>
						</div>

						<div
							className={`relative overflow-hidden transition-all p-4  duration-500 max-h-full ${
								open === `${Item.id}` ? ' block' : 'hidden'
							}`}>
							<p className={styles.Text}>
								{Item.Text == '' ? (
									<p className=' text-red-500 '>No Answer</p>
								) : (
									<Markdown>{Item.Text}</Markdown>
								)}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
