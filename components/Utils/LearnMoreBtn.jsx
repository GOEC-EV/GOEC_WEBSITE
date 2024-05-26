import React from 'react';
import Link from 'next/link';
import styles from './LearnMoreBtn.module.css';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

export default function LearnMoreBtn({ text, link }) {
	return (
		<Link href={link}>
			<div className={styles.linkText}>
				<p className={styles.CardBtnText}>{text}</p>
				<div className={styles.CardBtnIcon}>
					<HiOutlineArrowUpRight />
				</div>
			</div>
		</Link>
	);
}
