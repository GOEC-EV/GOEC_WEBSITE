import React from 'react';
import styles from './LoadingCircle.module.css';
export default function LoadingCircle() {
	return (
		<div className={styles.loadingWrapper}>
			<div className={styles.loadWraps}>
				<div className={styles.load3}>
					<div className={styles.line}></div>
					<div className={styles.line}></div>
					<div className={styles.line}></div>
				</div>
			</div>
		</div>
	);
}
