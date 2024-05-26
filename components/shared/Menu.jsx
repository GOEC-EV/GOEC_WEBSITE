import React from 'react';
import Link from 'next/link';
import styles from './Menu.module.css';

export default function Menu({ name, url, children, position }) {
	function onMouseOver(e) {
		const parent = e?.target?.parentElement?.parentElement?.previousElementSibling;
		parent?.classList?.add('active');
	}

	function onMouseLeave(e) {
		const parent = e?.target?.parentElement?.parentElement?.previousElementSibling;
		parent?.classList?.remove('active');
	}

	return (
		<div className={styles.container}>
			<Link href={url} className={styles.link} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
				{name}
				{children ? <span className={styles.arrow}></span> : null}
				{children ? <span className={styles.tick}></span> : null}
			</Link>
			{children ? <div className={`${styles.window} ${styles[position]}`}>{children}</div> : null}
		</div>
	);
}
