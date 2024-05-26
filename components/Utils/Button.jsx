import Link from 'next/link';
import React from 'react';
import styles from './Button.module.css';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

export default function Button({ text, link }) {
	return (
		<Link href={link}>
			<div className={styles.CardBtn}>
				<div className={styles.CardBtnText}>{text}</div>
				<div className={styles.CardBtnIcon}>
					<HiOutlineArrowUpRight />
				</div>
			</div>
		</Link>
	);
}
