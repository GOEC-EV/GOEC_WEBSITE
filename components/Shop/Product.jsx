import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './Product.module.css';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';

export default function Product({ ProductData }) {
	const { asPath } = useRouter();

	return (
		<Link href={`${asPath}/${ProductData.productId}`}>
			<div className={styles.mainWarper}>
				<div className={styles.warper}>
					<div className=' overflow-hidden w-full h-full '>
						<div className={styles.CardsImg}>
							<Image
								className=' object-cover bg-center bg-cover bg-origin-content'
								src={ProductData.img}
								width={400}
								height={300}
								alt=''
							/>
						</div>
					</div>

					<p className={styles.divText}>{ProductData.unit}</p>
					<div className={styles.divIcon}>
						{/* <Image className=' ' src='/images/cableIcon.png' width={30} height={30} alt='' /> */}
					</div>
				</div>
				<div className={styles.titleDiv}>
					<p className={styles.title}>{ProductData.name}</p>
					<div className={styles.Btn}>
						<p className={styles.price}>BOOK NOW</p>
						<div className={styles.BtnIcon}>
							<HiOutlineArrowUpRight />
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
