import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRight } from 'react-icons/bs';
import styles from './ShopCard.module.css';

export default function ShopCard({ name, tag, img, url }) {
	return (
		<Link href={url}>
			<div className={styles.warper}>
				<div className=' overflow-hidden '>
					<div className={styles.CardsImg}>
						<Image className=' ' src={img} width={800} height={500} alt='' />
					</div>
				</div>

				<div className={styles.Card}>
					<p className={styles.CardText}>{name}</p>
					<p className={styles.CardText2}>
						{tag}
						<span>
							<BsArrowUpRight />
						</span>
					</p>
				</div>
			</div>
		</Link>
	);
}
