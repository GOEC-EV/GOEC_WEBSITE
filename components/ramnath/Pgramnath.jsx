
import Image from 'next/image';
import React from 'react';
import styles from './ram.module.css';

export default function Pgramnath() {
	// const [element, controls] = useScroll();
	return (
		<div className={styles.warper}>
			<div className=' container_wrapper'>
			<div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16">
			<div className=' overflow-hidden '>
						<div className={styles.CardsImg}>
							<Image
								src='/images/jafar.jpg'
								width={411}
								height={515}
                radius={10}
								alt=''
								className={styles.img}
								style={{ width: '100%', height: 'auto' }}
							/>
						</div>
						<h1 className={styles.HadingText}>MR. PG RAM</h1>
						<div className={styles.CardsImg}>
							<Image
								src='/images/jaf1.png'
								width={411}
								height={110}
                radius={10}
								alt=''
								className={styles.img}
								style={{ width: '100%', height: 'auto' }}
							/>
						</div>
					</div>
					<div className=' flex flex-col justify-center'>
					
						<p className={styles.dictationText}>
							GOEC Charging is building the infrastructure required to enable EV Revolution in India. We are
							installing electric vehicle chargers in strategic locations all over the nation, enabling EV owners
							to go long distances without worrying about running out of energy. We are partnering with
							businesses that are frequented by EV owners such as restaurants, shopping malls, and other
							commercial locations to install chargers in their parking lots., As charging stations become more
							prevalent, car buyers will be more confident in purchasing EVs as charg er worries are resolved.
						</p>
            <p className={styles.dictationText}>
							GOEC Charging is building the infrastructure required to enable EV Revolution in India. We are
							installing electric vehicle chargers in strategic locations all over the nation, enabling EV owners
							to go long distances without worrying about running out of energy. We are partnering with
							businesses that are frequented by EV owners such as restaurants, shopping malls, and other
							commercial locations to install chargers in their parking lots., As charging stations become more
							prevalent, car buyers will be more confident in purchasing EVs as charg er worries are resolved.
						</p>
            <p className={styles.dictationText}>
							GOEC Charging is building the infrastructure required to enable EV Revolution in India. We are
							go long distances without worrying about running out of energy. We are partnering with
							businesses that are frequented by EV owners such as restaurants, shopping malls, and other
						    car buyers will be more confident in purchasing EVs as charg er worries are resolved.
						</p>
						<p className={styles.dictationText}>
						GOEC Charging is building the infrastructure required to enable EV Revolution in India. We are
						installing electric vehicle chargers in strategic locations all over the nation, enabling EV owners
					    buyers willinstalling electric vehicle chargers in strategic locations all over the nation, enabling EV owners
					    buyers will be more confident in purchasing EVs as charg er worries are resolved.
					</p>
						
					</div>
				</div>
			</div>
			<div className=' container_wrapper'>
			<div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mt-36">
			<div className=' overflow-hidden '>
            <div className={styles.CardsImg}>
							<Image
								src='/images/jafb1.png'
								width={438}
								height={264}
                                radius={10}
								alt=''
								className={styles.img}
								style={{ width: '100%', height: 'auto' }}
							/>
						</div>
           </div>
		   <div className=' flex flex-col justify-center'>
		   <h1 className={styles.HadingText1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</h1>
		   <p className={styles.dictationText}>
			GOEC Charging is building the infrastructure required to enable EV Revolution in India. We are
			installing electric vehicle chargers in strategic locations all over the nation, enabling EV owners
		    buyers willinstalling electric vehicle chargers in strategic locations all over the nation, enabling EV owners
		    buyers will be more confident in purchasing EVs as charg er worries are resolved.
			</p>
		   </div>
           </div>
			
			<div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mt-14">
			<div className=' overflow-hidden '>
            <div className={styles.CardsImg}>
				<Image
				src='/images/jafb1.png'
				width={438}
				height={264}
                                radius={10}
				alt=''
				className={styles.img}
				style={{ width: '100%', height: 'auto' }}
				/>
				</div>
           </div>
		   <div className=' flex flex-col justify-center'>
		   <h1 className={styles.HadingText1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</h1>
		   <p className={styles.dictationText}>
			GOEC Charging is building the infrastructure required to enable EV Revolution in India. We are
			installing electric vehicle chargers in strategic locations all over the nation, enabling EV owners
		    buyers willinstalling electric vehicle chargers in strategic locations all over the nation, enabling EV owners
		    buyers will be more confident in purchasing EVs as charg er worries are resolved.
			</p>
		   </div>
           </div>
			

			
			<div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mt-14">
			<div className=' overflow-hidden '>
                       <div className={styles.CardsImg}>
		        <Image src='/images/jafb1.png' width={438}
				height={264}
                                radius={10}
				alt=''
				className={styles.img}
				style={{ width: '100%', height: 'auto' }}
				/>
				</div>
           </div>
		   <div className=' flex flex-col justify-center'>
		   <h1 className={styles.HadingText1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</h1>
		   <p className={styles.dictationText}>
			GOEC Charging is building the infrastructure required to enable EV Revolution in India. We are
			installing electric vehicle chargers in strategic locations all over the nation, enabling EV owners
		    buyers willinstalling electric vehicle chargers in strategic locations all over the nation, enabling EV owners
		    buyers will be more confident in purchasing EVs as charg er worries are resolved.
			</p>
		   </div>
           </div>
			</div>
			</div>

			
	);
}
