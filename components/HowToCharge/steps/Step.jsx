import Image from 'next/image';
import styles from './Step.module.css';

export default function Step({ name, text, image, count, active }) {
	return (
		<div className={`grid grid-cols-2 opacity-0 ${active ? styles.active : ''}`}>
			<div className={styles.img}>
				<Image src={image} width={350} height={500} alt='' className='h-[500px] w-auto' />
				<Image src={count} width={100} height={200} alt='' className='w-[100px] h-auto absolute bottom-16 left-4' />
			</div>
			<div className={styles.textDiv}>
				<div className={styles.text}>{name}</div>
				<p className={styles.Subtext}>{text}</p>
			</div>
		</div>
	);
}
