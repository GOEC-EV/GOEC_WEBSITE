import getDate from '@/utilities/getDate';
import Image from 'next/image';
import Link from 'next/link';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import styles from './BlogsCard.module.css';
import textToHtml from 'html-react-parser';
import encodeTitle from '@/utilities/encodeTitle';

export default function BlogsCard({ data }) {
	return (
		<Link href={`/blogs/${data?.id}_${encodeTitle(`${data?.title?.rendered}`)}`} className='h-full inline-block'>
			<div className={styles.warper}>
				<div className='grid grid-cols-1 md:grid-cols-10 h-full'>
					<div className='h-full col-span-4'>
						<div className={styles.imgDiv}>
							{/* <img src={data.jetpack_featured_media_url} alt='' /> */}
							<img src={data.images.large} alt='' />
						</div>
					</div>
					<div className={`${styles.bg} col-span-6 py-6 px-8`}>
						<div>
							<p className={styles.dateText}>{getDate(data.date)}</p>
							<div className={styles.cardHadingText}>{textToHtml(data.title.rendered)}</div>
						</div>
						<div className={styles.dictationText}>{textToHtml(data.excerpt.rendered)}</div>
						<div className={styles.linkTextBtn}>
							<p className={styles.CardBtnText}>Learn more</p>
							<div className={styles.CardBtnIcon}>
								<HiOutlineArrowUpRight />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
