import Link from 'next/link';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ImLocation2 } from 'react-icons/im';
import styles from './AcCharge.module.css';

export default function AcCharge() {
	return (
		<div className={styles.warper}>
			<div className={styles.warper2}>
				<p className={styles.AppHading}>
					Pioneering a smooth Electric Vehicle transition with world class
					<span className={styles.ColorAppHading}>
						{' '}
						<span className={styles.DoteAppHading}> EV infrastructure</span>
					</span>
					&nbsp;
					<br />
				</p>
				<div className=' '>
					<div className=' py-3'>
						<h1 className={styles.hadingIcon}>
							<BsTelephoneFill />
						</h1>
						<Link target='_blank' href='https://wa.me/919778687615'>
							<h1 className={styles.hadingText}>+91 9778687615</h1>
						</Link>
					</div>
					<div className=' py-3'>
						<h1 className={styles.hadingIcon}>
							<ImLocation2 />
						</h1>
						<h1 className={styles.hadingText}>India Address:</h1>
						<p className={styles.subHadingText}>
							7th Floor, KB Square Vytilla, Ernakulam, Kochi, Kerala – 682019.
						</p>
					</div>
					<div className=' py-5'>
						<h1 className={styles.hadingText}>UAE Address:</h1>
						<p className={styles.subHadingText}>
							P5-ELOB Office No. E-42 G-21 Hamriyah, Free Zone, Sharjah United Arab Emirates
						</p>
					</div>
				</div>
				<div className='mt-auto py-3'>
					<h1 className=' text-lg text-gray-50 pb-2 '>Find us here</h1>
					<div className=' flex  gap-3'>
						<a
							href='https://www.facebook.com/goecworldindia'
							target='_blank'
							rel='noreferrer'
							className={styles.socialLink}>
							<FaFacebookF />
						</a>
						<a
							href='https://twitter.com/goecworld'
							target='_blank'
							rel='noreferrer'
							className={styles.socialLink}>
							<FaTwitter />
						</a>
						<a
							href='https://www.instagram.com/goec.official/'
							target='_blank'
							rel='noreferrer'
							className={styles.socialLink}>
							<FaInstagram />
						</a>
						<a
							href='https://www.linkedin.com/company/goecofficial '
							target='_blank'
							rel='noreferrer'
							className={styles.socialLink}>
							<FaLinkedin />
						</a>
						<a
							href='https://youtube.com/@goec-thecompleteevsupercha4661'
							target='_blank'
							rel='noreferrer'
							className={styles.socialLink}>
							<FaYoutube />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
