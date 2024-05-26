import Image from 'next/image';
import Button from '../Utils/Button';
import styles from './CareersCard.module.css';
export default function CareersCard() {
	return (
		<div className={styles.warper}>
			<div className=' container_wrapper'>
				<div className=' grid grid-cols-1 md:grid-cols-2  gap-16 '>
					<div className=' w-full  col-span-1'>
						<div className=' overflow-hidden rounded-md'>
							<div className={styles.CardsImg}>
								<Image src='/images/Careers.jpg' width={750} height={500} className={styles.logo} alt='' />
							</div>
						</div>
					</div>

					<div className='    h-[150px] md:h-auto flex flex-col justify-center'>
						<div className=' flex py-12 w-32'>
							<h1 className={styles.hadarText}>Careers</h1>
						</div>
						<p className={styles.dictationText}>
							We’re always looking for people who share our vision of building a fast-charging network that
							enables more Indian’s to travel farther and cleaner in electric vehicles.
						</p>
						<div className=' w-56 mt-12'>
							<Button text='View Open Positions' link='mailto:renu.t@goecworld.com' target='_blank' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
