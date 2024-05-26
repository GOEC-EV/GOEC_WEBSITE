import Link from 'next/link';
import Image from 'next/image';
import Menu from '../shared/Menu';
import React, { useState } from 'react';
import styles from './NavBar.module.css';
import menuData from '@/data/menuData.json';
import { FiDownload } from 'react-icons/fi';
import { AiFillCaretDown } from 'react-icons/ai';

export default function NavBar() {
	const [open, setOpen] = useState(false);
	const [subOpenIds, setSubOpenIds] = useState([]);

	function renderMenus(data, position) {
		const elements = [];
		data.map((item, index) => {
			elements.push(
				<Menu name={item.name} url={item.url} position={position} key={`menu-${item.url}-${index}`}>
					{item?.menu?.length ? renderMenus(item.menu, 'right') : null}
				</Menu>
			);
		});
		return elements;
	}

	function renderMobMenus(data) {
		const elements = [];
		data.map((item, index) => {
			if (item?.menu?.length) {
				elements.push(
					<div className={styles.mobMenuDiv} key={`menu-${item.url}-${index}`}>
						<button
							className={styles.mobLink}
							onClick={() => {
								setSubOpenIds(prev => {
									if (prev.includes(`${item.name}-${index}`)) {
										return prev.filter(v => v !== `${item.name}-${index}`);
									} else {
										return [...prev, `${item.name}-${index}`];
									}
								});
							}}
							style={{ borderColor: subOpenIds.at(-1) === `${item.name}-${index}` ? '#13F2AD' : 'transparent' }}>
							{item.name}{' '}
							<AiFillCaretDown
								className={`${styles.mobSubMenuIcon} ${
									subOpenIds.includes(`${item.name}-${index}`) ? styles.opened : ''
								}`}
							/>
						</button>
						<div
							className={`${styles.mobSubMenu} ${
								subOpenIds.includes(`${item.name}-${index}`) ? styles.opened : ''
							}`}
							style={{ '--height': `${renderMobMenus(item.menu).length * 60}px` }}>
							{renderMobMenus(item.menu)}
						</div>
					</div>
				);
			} else {
				elements.push(
					<Link
						className={styles.mobLink}
						href={item.url}
						key={`menu-${item.url}-${index}`}
						onClick={() => setOpen(false)}>
						{item.name}
					</Link>
				);
			}
		});
		return elements;
	}

	return (
		<div className={styles.section}>
			<div className={styles.wrapperDiv}>
				<div className={`container_wrapper ${styles.wrapper}`}>
					<div className=''>
						<Link href='/'>
							<img src='/images/icons/header-logo.svg' className={styles.logo} alt='Brand Logo' />
						</Link>
					</div>
					<div className='hidden h-full ml-auto lg:flex items-center justify-end gap-2 relative'>
						{renderMenus(menuData, 'bottom')}
						<Link href='/app-page' className='ml-4'>
							<p className={styles.appBtn}>Download App</p>
						</Link>
					</div>
					<div className='relative md:hidden'>
						<button
							className={`${styles.hamburger} ${open ? styles.opened : ''}`}
							onClick={() => setOpen(prev => !prev)}>
							<div className={styles.line}></div>
						</button>
						<div className={`${styles.window} ${open ? styles.opened : ''}`}>
							<Link
								href='/app-page'
								className='h-[60px] flex items-center justify-between gap-2 px-6 bg-[#13F2AD]'>
								<p className='text-[16px] font-[600] text-[#333333]'>Download App</p>
								<FiDownload className='font-[600] text-[20px]' />
							</Link>
							{renderMobMenus(menuData)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
