import React from 'react';
import styles from './FAQMenu.module.css';
export default function FAQMenu({ menuOpen, setMenuOpen }) {
	return (
		<div className={styles.warper}>
			<div className={styles.FilterDiv}>
				{/* <p className={styles.Filter}>Filter</p>
				<p className={styles.clearFilter}>Clear Filter</p> */}
			</div>
			{/* <p className={styles.type}>Choose type</p> */}
			<div className=' flex  w-full  md:flex-col'>
				<p
					onClick={() => setMenuOpen('General')}
					className={` ${styles.Link} ${menuOpen === 'General' ? styles.activeLink : ''} `}>
					General
				</p>
				<p
					onClick={() => setMenuOpen('COCO')}
					className={` ${styles.Link} ${menuOpen === 'COCO' ? styles.activeLink : ''}`}>
					COCO
				</p>
				<p
					onClick={() => setMenuOpen('FOCO')}
					className={` ${styles.Link} ${menuOpen === 'FOCO' ? styles.activeLink : ''}`}>
					FOCO
				</p>
				<p
					onClick={() => setMenuOpen('InvestInCOCO')}
					className={` ${styles.Link} ${menuOpen === 'InvestInCOCO' ? styles.activeLink : ''}`}>
					Invest in COCO
				</p>
				<p
					onClick={() => setMenuOpen('GOECApp')}
					className={` ${styles.Link} ${menuOpen === 'GOECApp' ? styles.activeLink : ''}`}>
					GO EC App
				</p>
				<p
					onClick={() => setMenuOpen('HowToCharge')}
					className={` ${styles.Link} ${menuOpen === 'HowToCharge' ? styles.activeLink : ''}`}>
					How to charge
				</p>
			</div>
		</div>
	);
}
