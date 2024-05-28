import React from 'react';
// import { motion } from 'framer-motion';

// import { fromUp } from '../../data/Animations';
// import { useScroll } from '../../Hook/useScroll';
import styles from './InvestCard.module.css';
import { HiOutlineArrowUpRight } from 'react-icons/hi2';
import Link from 'next/link';

export default function InvestCard() {
	const CardList = [
		{
			id: 1,
			hading: 'COCO',
			SubHading: 'Company-owned Company operated.',
			text: 'Ideal for people with lucrative locations to set up charging stations Eg: hotels, Malls, etc.',
			svg: (
				<svg width='121' height='140' viewBox='0 0 121 140' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M90.0733 86.8951L60.6513 69.9053L31.208 86.8951L60.623 103.885L90.0733 86.8951Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M119.486 103.885L90.0594 86.895L60.6402 103.885L60.6133 137.864L119.486 103.885Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M60.6517 69.9053L119.466 103.885L60.6502 137.864L1.79199 103.885L60.6517 69.9053Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M60.6123 69.9053H60.6307L1.78516 103.885L31.2044 86.8951L60.6123 69.9053Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M60.6318 69.9054H60.6517L60.646 1.94629L60.6375 35.9258L60.6318 69.9054Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M119.5 103.885L60.6465 69.9054V1.94629L119.5 35.9258V103.885Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M90.0596 86.8951L119.482 103.885V35.9258L90.0596 52.9156V86.8951Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M60.6465 69.9053L90.0685 86.8951V52.9156L60.6465 35.9258V69.9053Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M60.6321 69.9053L1.77246 35.9258L1.78237 103.885L60.6378 137.864L60.6321 69.9053Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M60.6373 69.9053L31.1855 52.9155L31.1955 86.8951L60.6472 103.885L60.6373 69.9053Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M60.6374 69.9053H60.6175L60.6274 103.885L60.6133 137.864L60.6374 69.9053Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M31.2795 52.9156L1.77246 35.9258V103.885L31.2795 86.8951V52.9156Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M90.0693 52.9156L60.6175 35.9258L31.1855 52.9156L60.6133 69.9053L90.0693 52.9156Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M119.466 35.9258L90.0499 52.9156L60.5684 69.9053H60.6179L119.466 35.9258Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M60.6224 1.94629L119.496 35.9258L60.6337 69.9054L1.79102 35.9258L60.6224 1.94629Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M60.6319 35.9258L60.6164 1.94629L1.7666 35.9258L31.2042 52.9156L60.6319 35.9258Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
				</svg>
			),
			url: '/partner-with-us/coco',
		},
		{
			id: 2,
			hading: 'FOCO',
			SubHading: 'Franchise owned  Company operated.',
			text: 'For people who want to maximize their returns by owning a charging station.',
			svg: (
				<svg width='139' height='142' viewBox='0 0 139 142' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M69.1542 56.6333C70.0004 56.6333 70.6864 57.3193 70.6864 58.1655C70.6864 59.0116 70.0004 59.6976 69.1542 59.6976C68.3081 59.6976 67.6221 59.0116 67.6221 58.1655C67.6221 57.3193 68.3081 56.6333 69.1542 56.6333Z'
						fill='#3C3C3C'
					/>
					<path
						d='M29.1982 83.731C30.0443 83.731 30.7303 84.417 30.7303 85.2631C30.7303 86.1093 30.0443 86.7953 29.1982 86.7953C28.352 86.7953 27.666 86.1093 27.666 85.2631C27.666 84.417 28.352 83.731 29.1982 83.731Z'
						fill='#3C3C3C'
					/>
					<path
						d='M68.541 5.86768C69.3871 5.86768 70.0731 6.55368 70.0731 7.39984C70.0731 8.246 69.3871 8.932 68.541 8.932C67.6948 8.932 67.0088 8.246 67.0088 7.39984C67.0088 6.55368 67.6948 5.86768 68.541 5.86768Z'
						fill='#3C3C3C'
					/>
					<path
						d='M49.1474 116.866C49.9936 116.866 50.6796 117.552 50.6796 118.398C50.6796 119.244 49.9936 119.93 49.1474 119.93C48.3012 119.93 47.6152 119.244 47.6152 118.398C47.6152 117.552 48.3012 116.866 49.1474 116.866Z'
						fill='#3C3C3C'
					/>
					<path
						d='M82.7167 112.965C83.5629 112.965 84.2489 113.651 84.2489 114.497C84.2489 115.344 83.5629 116.03 82.7167 116.03C81.8706 116.03 81.1846 115.344 81.1846 114.497C81.1846 113.651 81.8706 112.965 82.7167 112.965Z'
						fill='#3C3C3C'
					/>
					<path
						d='M68.1484 96.4541C68.9945 96.4541 69.6805 97.1401 69.6805 97.9863C69.6805 98.8324 68.9945 99.5184 68.1484 99.5184C67.3022 99.5184 66.6162 98.8324 66.6162 97.9863C66.6162 97.1401 67.3022 96.4541 68.1484 96.4541Z'
						fill='#3C3C3C'
					/>
					<path
						d='M19.4238 107.433C20.2699 107.433 20.9559 108.119 20.9559 108.965C20.9559 109.811 20.2699 110.497 19.4238 110.497C18.5776 110.497 17.8916 109.811 17.8916 108.965C17.8916 108.119 18.5776 107.433 19.4238 107.433Z'
						fill='#3C3C3C'
					/>
					<path
						d='M77.2099 134.364C78.0561 134.364 78.7421 135.05 78.7421 135.896C78.7421 136.742 78.0561 137.428 77.2099 137.428C76.3637 137.428 75.6777 136.742 75.6777 135.896C75.6777 135.05 76.3637 134.364 77.2099 134.364Z'
						fill='#3C3C3C'
					/>
					<path
						d='M101.655 84.7388C102.501 84.7388 103.187 85.4248 103.187 86.2709C103.187 87.1171 102.501 87.8031 101.655 87.8031C100.809 87.8031 100.123 87.1171 100.123 86.2709C100.123 85.4248 100.809 84.7388 101.655 84.7388Z'
						fill='#3C3C3C'
					/>
					<path
						d='M112.11 52.5688C112.956 52.5688 113.642 53.2548 113.642 54.101C113.642 54.9472 112.956 55.6332 112.11 55.6332C111.264 55.6332 110.578 54.9472 110.578 54.101C110.578 53.2548 111.264 52.5688 112.11 52.5688Z'
						fill='#3C3C3C'
					/>
					<path
						d='M56.9579 27.0732C57.8041 27.0732 58.4901 27.7592 58.4901 28.6054C58.4901 29.4516 57.8041 30.1376 56.9579 30.1376C56.1118 30.1376 55.4258 29.4516 55.4258 28.6054C55.4258 27.7592 56.1118 27.0732 56.9579 27.0732Z'
						fill='#3C3C3C'
					/>
					<path
						d='M94.6591 23.5981C95.5053 23.5981 96.1913 24.2841 96.1913 25.1303C96.1913 25.9765 95.5053 26.6625 94.6591 26.6625C93.813 26.6625 93.127 25.9765 93.127 25.1303C93.127 24.2841 93.813 23.5981 94.6591 23.5981Z'
						fill='#3C3C3C'
					/>
					<path
						d='M81.5654 53.0181C82.4115 53.0181 83.0975 53.7041 83.0975 54.5502C83.0975 55.3964 82.4115 56.0824 81.5654 56.0824C80.7192 56.0824 80.0332 55.3964 80.0332 54.5502C80.0332 53.7041 80.7192 53.0181 81.5654 53.0181Z'
						fill='#3C3C3C'
					/>
					<path
						d='M69.1699 24.647C70.016 24.647 70.702 25.333 70.702 26.1791C70.702 27.0253 70.016 27.7113 69.1699 27.7113C68.3237 27.7113 67.6377 27.0253 67.6377 26.1791C67.6377 25.333 68.3237 24.647 69.1699 24.647Z'
						fill='#3C3C3C'
					/>
					<path
						d='M23.2773 45.7407C24.1234 45.7407 24.8094 46.4267 24.8094 47.2729C24.8094 48.119 24.1234 48.805 23.2773 48.805C22.4311 48.805 21.7451 48.119 21.7451 47.2729C21.7451 46.4267 22.4311 45.7407 23.2773 45.7407Z'
						fill='#3C3C3C'
					/>
					<path
						d='M48.7441 57.939C49.5902 57.939 50.2762 58.625 50.2762 59.4711C50.2762 60.3173 49.5902 61.0033 48.7441 61.0033C47.8979 61.0033 47.2119 60.3173 47.2119 59.4711C47.2119 58.625 47.8979 57.939 48.7441 57.939Z'
						fill='#3C3C3C'
					/>
					<path
						d='M64.9335 87.3213C65.7797 87.3213 66.4657 88.0073 66.4657 88.8535C66.4657 89.6996 65.7797 90.3856 64.9335 90.3856C64.0874 90.3856 63.4014 89.6996 63.4014 88.8535C63.4014 88.0073 64.0874 87.3213 64.9335 87.3213Z'
						fill='#3C3C3C'
					/>
					<g opacity='0.18931'>
						<path
							d='M64.9652 85.3193C63.0644 85.3193 61.5234 86.897 61.5234 88.843C61.5234 90.789 63.0644 92.3667 64.9652 92.3667C66.8659 92.3667 68.4069 90.789 68.4069 88.843C68.4069 86.897 66.8659 85.3193 64.9652 85.3193Z'
							fill='#3C3C3C'
						/>
						<path
							d='M64.9652 85.3193C63.0644 85.3193 61.5234 86.897 61.5234 88.843C61.5234 90.789 63.0644 92.3667 64.9652 92.3667C66.8659 92.3667 68.4069 90.789 68.4069 88.843C68.4069 86.897 66.8659 85.3193 64.9652 85.3193Z'
							stroke='#3C3C3C'
							strokeWidth='1.52238'
						/>
					</g>
					<path
						d='M129.502 76.4253C130.348 76.4253 131.034 77.1113 131.034 77.9575C131.034 78.8036 130.348 79.4896 129.502 79.4896C128.656 79.4896 127.97 78.8036 127.97 77.9575C127.97 77.1113 128.656 76.4253 129.502 76.4253Z'
						fill='#3C3C3C'
					/>
					<path
						d='M111.177 113.32C112.023 113.32 112.709 114.006 112.709 114.852C112.709 115.699 112.023 116.385 111.177 116.385C110.331 116.385 109.645 115.699 109.645 114.852C109.645 114.006 110.331 113.32 111.177 113.32Z'
						fill='#3C3C3C'
					/>
					<path
						d='M125.633 36.7715C126.479 36.7715 127.165 37.4575 127.165 38.3036C127.165 39.1498 126.479 39.8358 125.633 39.8358C124.787 39.8358 124.101 39.1498 124.101 38.3036C124.101 37.4575 124.787 36.7715 125.633 36.7715Z'
						fill='#3C3C3C'
					/>
					<path d='M33.0615 15.9316L58.5378 2.37646' stroke='#3C3C3C' strokeWidth='2.4' />
					<path
						d='M32.9091 14.3481C33.7553 14.3481 34.4413 15.0341 34.4413 15.8803C34.4413 16.7265 33.7553 17.4125 32.9091 17.4125C32.063 17.4125 31.377 16.7265 31.377 15.8803C31.377 15.0341 32.063 14.3481 32.9091 14.3481Z'
						fill='#3C3C3C'
					/>
					<path d='M50.9121 19.3214L58.5379 2.37646' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M21.2959 23.3624L50.9123 19.522' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M51.0146 19.4233L91.6013 16.0171' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M91.6011 16.1195L58.5381 2.37646' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M99.0108 9.07871L58.7422 2.58057' stroke='#3C3C3C' strokeWidth='2.4' />
					<path
						d='M58.4365 0.946289C59.2826 0.946289 59.9686 1.63229 59.9686 2.47845C59.9686 3.32462 59.2826 4.01062 58.4365 4.01062C57.5903 4.01062 56.9043 3.32462 56.9043 2.47845C56.9043 1.63229 57.5903 0.946289 58.4365 0.946289Z'
						fill='#3C3C3C'
					/>
					<path
						d='M50.912 17.9932C51.7582 17.9932 52.4442 18.6792 52.4442 19.5253C52.4442 20.3715 51.7582 21.0575 50.912 21.0575C50.0659 21.0575 49.3799 20.3715 49.3799 19.5253C49.3799 18.6792 50.0659 17.9932 50.912 17.9932Z'
						fill='#3C3C3C'
					/>
					<path d='M121.149 98.8218L106.115 130.046' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M137.58 65.6455L121.35 98.7197' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M121.343 98.7158L130.655 102.136' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M105.911 129.944L130.655 102.136' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M137.376 65.8496L130.655 102.136' stroke='#3C3C3C' strokeWidth='2.4' />
					<path
						d='M130.553 100.706C131.399 100.706 132.085 101.392 132.085 102.238C132.085 103.084 131.399 103.77 130.553 103.77C129.707 103.77 129.021 103.084 129.021 102.238C129.021 101.392 129.707 100.706 130.553 100.706Z'
						fill='#3C3C3C'
					/>
					<path
						d='M137.324 64.2153C138.17 64.2153 138.856 64.9013 138.856 65.7475C138.856 66.5937 138.17 67.2797 137.324 67.2797C136.478 67.2797 135.792 66.5937 135.792 65.7475C135.792 64.9013 136.478 64.2153 137.324 64.2153Z'
						fill='#3C3C3C'
					/>
					<path
						d='M106.013 128.412C106.859 128.412 107.545 129.098 107.545 129.944C107.545 130.79 106.859 131.476 106.013 131.476C105.166 131.476 104.48 130.79 104.48 129.944C104.48 129.098 105.166 128.412 106.013 128.412Z'
						fill='#3C3C3C'
					/>
					<path d='M98.9668 9.23535L122.464 30.1609' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M98.9159 9.23535L91.6045 15.9111' stroke='#3C3C3C' strokeWidth='2.4' />
					<path
						d='M99.1708 7.49902C100.017 7.49902 100.703 8.18502 100.703 9.03119C100.703 9.87735 100.017 10.5634 99.1708 10.5634C98.3247 10.5634 97.6387 9.87735 97.6387 9.03119C97.6387 8.18502 98.3247 7.49902 99.1708 7.49902Z'
						fill='#3C3C3C'
					/>
					<path d='M7.43066 41.3724L21.0986 23.0562' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M20.792 23.3115L26.5469 52.1312' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M26.5597 52.3862L16.4385 91.2191' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M16.2467 91.0659L8.32227 105.716' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M8.53983 105.589L3.20703 76.2183' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M58.4833 2.33643L20.8818 23.4646' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M32.9155 16.0703L20.7793 23.4648' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M8.50915 105.505L1.73438 63.2568' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M16.3496 91.2193L1.73438 63.2568' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M51.6119 92.1502L16.1445 91.2192' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M38.4036 125.121L16.2725 91.2959' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M38.2757 124.636L8.66699 105.691' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M26.8668 52.2334L1.73438 63.257' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M20.8437 23.3623L1.73438 63.2566' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M7.43095 41.0659L1.93848 63.4612' stroke='#3C3C3C' strokeWidth='2.4' />
					<path
						d='M1.63177 61.8267C2.47794 61.8267 3.16394 62.5127 3.16394 63.3588C3.16394 64.205 2.47794 64.891 1.63177 64.891C0.78561 64.891 0.0996094 64.205 0.0996094 63.3588C0.0996094 62.5127 0.78561 61.8267 1.63177 61.8267Z'
						fill='#3C3C3C'
					/>
					<path
						d='M16.247 89.585C17.0932 89.585 17.7792 90.271 17.7792 91.1171C17.7792 91.9633 17.0932 92.6493 16.247 92.6493C15.4008 92.6493 14.7148 91.9633 14.7148 91.1171C14.7148 90.271 15.4008 89.585 16.247 89.585Z'
						fill='#3C3C3C'
					/>
					<path
						d='M8.53998 103.98C9.38614 103.98 10.0721 104.666 10.0721 105.512C10.0721 106.358 9.38614 107.044 8.53998 107.044C7.69381 107.044 7.00781 106.358 7.00781 105.512C7.00781 104.666 7.69381 103.98 8.53998 103.98Z'
						fill='#3C3C3C'
					/>
					<path
						d='M7.4306 39.687C8.27676 39.687 8.96276 40.373 8.96276 41.2192C8.96276 42.0653 8.27676 42.7513 7.4306 42.7513C6.58444 42.7513 5.89844 42.0653 5.89844 41.2192C5.89844 40.373 6.58444 39.687 7.4306 39.687Z'
						fill='#3C3C3C'
					/>
					<path
						d='M3.32123 74.8901C4.16739 74.8901 4.85339 75.5761 4.85339 76.4223C4.85339 77.2685 4.16739 77.9545 3.32123 77.9545C2.47506 77.9545 1.78906 77.2685 1.78906 76.4223C1.78906 75.5761 2.47506 74.8901 3.32123 74.8901Z'
						fill='#3C3C3C'
					/>
					<path
						d='M20.996 21.728C21.8422 21.728 22.5282 22.414 22.5282 23.2602C22.5282 24.1064 21.8422 24.7924 20.996 24.7924C20.1499 24.7924 19.4639 24.1064 19.4639 23.2602C19.4639 22.414 20.1499 21.728 20.996 21.728Z'
						fill='#3C3C3C'
					/>
					<path d='M122.724 30.5874L116.626 54.2628' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M137.526 65.8058L116.626 54.2632' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M94.0674 86.0951L116.626 54.2632' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M121.553 98.5718L116.626 54.2632' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M122.673 30.2812L137.73 66.01' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M122.672 30.281L91.9072 16.2212' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M91.7031 16.0171L116.626 54.2631' stroke='#3C3C3C' strokeWidth='2.4' />
					<path
						d='M116.523 52.833C117.37 52.833 118.056 53.519 118.056 54.3652C118.056 55.2113 117.37 55.8973 116.523 55.8973C115.677 55.8973 114.991 55.2113 114.991 54.3652C114.991 53.519 115.677 52.833 116.523 52.833Z'
						fill='#3C3C3C'
					/>
					<path
						d='M122.622 28.749C123.468 28.749 124.154 29.435 124.154 30.2812C124.154 31.1273 123.468 31.8134 122.622 31.8134C121.776 31.8134 121.09 31.1273 121.09 30.2812C121.09 29.435 121.776 28.749 122.622 28.749Z'
						fill='#3C3C3C'
					/>
					<path d='M50.9121 19.5327L72.7753 48.3197' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M27.0137 52.2294L72.7749 48.3198' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M51.4922 91.9151L26.7656 52.1885' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M26.8672 51.9913L50.9573 19.3916' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M51.5137 91.9458L72.775 48.3198' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M94.195 86.0221L72.7754 48.3198' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M116.746 54.4672L72.7754 48.1152' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M91.6047 16.1152L72.7754 48.3194' stroke='#3C3C3C' strokeWidth='2.4' />
					<path
						d='M72.6728 46.8896C73.519 46.8896 74.205 47.5756 74.205 48.4218C74.205 49.268 73.519 49.954 72.6728 49.954C71.8266 49.954 71.1406 49.268 71.1406 48.4218C71.1406 47.5756 71.8266 46.8896 72.6728 46.8896Z'
						fill='#3C3C3C'
					/>
					<path
						d='M27.1757 50.8232C28.0219 50.8232 28.7079 51.5092 28.7079 52.3554C28.7079 53.2016 28.0219 53.8876 27.1757 53.8876C26.3296 53.8876 25.6436 53.2016 25.6436 52.3554C25.6436 51.5092 26.3296 50.8232 27.1757 50.8232Z'
						fill='#3C3C3C'
					/>
					<path
						d='M91.5986 14.5435C92.4447 14.5435 93.1307 15.2295 93.1307 16.0756C93.1307 16.9218 92.4447 17.6078 91.5986 17.6078C90.7524 17.6078 90.0664 16.9218 90.0664 16.0756C90.0664 15.2295 90.7524 14.5435 91.5986 14.5435Z'
						fill='#3C3C3C'
					/>
					<path
						d='M51.5644 90.1895C52.4106 90.1895 53.0966 90.8755 53.0966 91.7216C53.0966 92.5678 52.4106 93.2538 51.5644 93.2538C50.7182 93.2538 50.0322 92.5678 50.0322 91.7216C50.0322 90.8755 50.7182 90.1895 51.5644 90.1895Z'
						fill='#3C3C3C'
					/>
					<g opacity='0.533425'>
						<path
							d='M91.4541 12.9639C89.5929 12.9639 88.084 14.4973 88.084 16.3888C88.084 18.2802 89.5929 19.8137 91.4541 19.8137C93.3154 19.8137 94.8241 18.2802 94.8241 16.3888C94.8241 14.4973 93.3154 12.9639 91.4541 12.9639Z'
							fill='#3C3C3C'
						/>
						<path
							d='M91.4541 12.9639C89.5929 12.9639 88.084 14.4973 88.084 16.3888C88.084 18.2802 89.5929 19.8137 91.4541 19.8137C93.3154 19.8137 94.8241 18.2802 94.8241 16.3888C94.8241 14.4973 93.3154 12.9639 91.4541 12.9639Z'
							stroke='#3C3C3C'
							strokeWidth='3.01037'
						/>
					</g>
					<path d='M51.3057 91.6577L38.3926 124.617' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M94.041 85.9785L121.471 98.5719' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M38.1191 124.426L68.1721 140.023' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M68.2861 139.676L82.658 122.261' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M38.4951 123.8L82.6074 122.159' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M51.2031 91.4282L82.6065 122.159' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M51.2031 91.4792L92.4747 86.2681' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M105.663 129.988L82.6074 122.057' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M121.932 98.7251L82.6074 122.057' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M94.1436 86.1318L82.5049 122.159' stroke='#3C3C3C' strokeWidth='2.4' />
					<path
						d='M82.1982 120.014C83.0443 120.014 83.7303 120.7 83.7303 121.546C83.7303 122.392 83.0443 123.078 82.1982 123.078C81.352 123.078 80.666 122.392 80.666 121.546C80.666 120.7 81.352 120.014 82.1982 120.014Z'
						fill='#3C3C3C'
					/>
					<path
						d='M68.0312 138.349C68.8773 138.349 69.5634 139.035 69.5634 139.881C69.5634 140.727 68.8773 141.413 68.0312 141.413C67.185 141.413 66.499 140.727 66.499 139.881C66.499 139.035 67.185 138.349 68.0312 138.349Z'
						fill='#3C3C3C'
					/>
					<path
						d='M38.3925 122.995C39.2387 122.995 39.9247 123.681 39.9247 124.527C39.9247 125.373 39.2387 126.059 38.3925 126.059C37.5464 126.059 36.8604 125.373 36.8604 124.527C36.8604 123.681 37.5464 122.995 38.3925 122.995Z'
						fill='#3C3C3C'
					/>
					<path
						d='M93.6327 84.7017C94.4789 84.7017 95.1649 85.3877 95.1649 86.2338C95.1649 87.08 94.4789 87.766 93.6327 87.766C92.7866 87.766 92.1006 87.08 92.1006 86.2338C92.1006 85.3877 92.7866 84.7017 93.6327 84.7017Z'
						fill='#3C3C3C'
					/>
					<path
						d='M121.217 97.397C122.063 97.397 122.749 98.083 122.749 98.9291C122.749 99.7753 122.063 100.461 121.217 100.461C120.371 100.461 119.685 99.7753 119.685 98.9291C119.685 98.083 120.371 97.397 121.217 97.397Z'
						fill='#3C3C3C'
					/>
					<g opacity='0.0332449'>
						<path
							d='M51.3127 87.793C49.309 87.793 47.6846 89.4174 47.6846 91.4211C47.6846 93.4248 49.309 95.0493 51.3127 95.0493C53.3165 95.0493 54.9409 93.4248 54.9409 91.4211C54.9409 89.4174 53.3165 87.793 51.3127 87.793Z'
							fill='#3C3C3C'
						/>
						<path
							d='M51.3127 87.793C49.309 87.793 47.6846 89.4174 47.6846 91.4211C47.6846 93.4248 49.309 95.0493 51.3127 95.0493C53.3165 95.0493 54.9409 93.4248 54.9409 91.4211C54.9409 89.4174 53.3165 87.793 51.3127 87.793Z'
							stroke='#3C3C3C'
							strokeWidth='0.19149'
						/>
					</g>
					<path d='M106.262 130.17L68.3105 140.231' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M37.3837 132.946L8.62402 105.871' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M38.3306 124.756L37.6982 133.1' stroke='#3C3C3C' strokeWidth='2.4' />
					<path d='M37.7695 133.256L68.3238 140.208' stroke='#3C3C3C' strokeWidth='2.4' />
					<path
						d='M37.8857 131.82C38.7318 131.82 39.4178 132.506 39.4178 133.352C39.4178 134.198 38.7318 134.884 37.8857 134.884C37.0395 134.884 36.3535 134.198 36.3535 133.352C36.3535 132.506 37.0395 131.82 37.8857 131.82Z'
						fill='#3C3C3C'
					/>
				</svg>
			),
			url: '/partner-with-us/foco',
		},
		{
			id: 3,
			hading: 'Invest in COCO',
			SubHading: 'Invest in prime locations',
			text: 'This is an option for people who do not have the property to set up a charging station but want to take advantage of the EV boom.',
			svg: (
				<svg width='128' height='112' viewBox='0 0 128 112' fill='none' xmlns='http://www.w3.org/2000/svg'>
					<path
						d='M22.785 73.6133L2 61.6133L22.785 49.6133L43.57 61.6133L22.785 73.6133Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M43.5701 85.6133L22.7861 97.6133V73.6133L43.5701 61.6133V85.6133Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M22.785 97.6133L2.00098 85.6133V61.6133L22.785 73.6133V97.6133Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M43.5692 38.0498L22.7842 26.0498L43.5692 14.0498L64.3542 26.0498L43.5692 38.0498Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M64.3533 50.0498L43.5693 62.0498V38.0498L64.3533 26.0498V50.0498Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M43.5692 62.0498L22.7852 50.0498V26.0498L43.5692 38.0498V62.0498Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M105.166 50.0498L84.3809 38.0498L105.166 26.0498L125.951 38.0498L105.166 50.0498Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M125.95 62.0498L105.166 74.0498V50.0498L125.95 38.0498V62.0498Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M105.165 74.0498L84.3809 62.0498V38.0498L105.165 50.0498V74.0498Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M84.3827 85.6133L63.5977 73.6133L84.3827 61.6133L105.168 73.6133L84.3827 85.6133Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M105.167 97.6133L84.3828 109.613V85.6133L105.167 73.6133V97.6133Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M84.3826 109.613L63.5986 97.6133V73.6133L84.3826 85.6133V109.613Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M63.9754 25.8315L43.1904 13.8315L63.9754 1.83154L84.7604 13.8315L63.9754 25.8315Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M84.7596 37.8315L63.9756 49.8315V25.8315L84.7596 13.8315V37.8315Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M63.9754 49.8315L43.1914 37.8315V13.8315L63.9754 25.8315V49.8315Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M84.7606 37.8315L63.9756 25.8315L84.7606 13.8315L105.546 25.8315L84.7606 37.8315Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M105.545 49.8315L84.7607 61.8315V37.8315L105.545 25.8315V49.8315Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M84.7596 61.8315L63.9756 49.8315V25.8315L84.7596 37.8315V61.8315Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M43.1903 37.8315L22.4053 25.8315L43.1903 13.8315L63.9753 25.8315L43.1903 37.8315Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M63.9754 49.8315L43.1914 61.8315V37.8315L63.9754 25.8315V49.8315Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M43.1903 61.8315L22.4062 49.8315V25.8315L43.1903 37.8315V61.8315Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M63.9754 49.8315L43.1904 37.8315L63.9754 25.8315L84.7604 37.8315L63.9754 49.8315Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M84.7596 61.8315L63.9756 73.8315V49.8315L84.7596 37.8315V61.8315Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
					<path
						d='M63.9754 73.8315L43.1914 61.8315V37.8315L63.9754 49.8315V73.8315Z'
						stroke='#3C3C3C'
						strokeWidth='3'
						strokeLinejoin='round'
					/>
				</svg>
			),
			url: '/partner-with-us/invest-in-coco',
		},
	];

	// const [element, controls] = useScroll();

	return (
		<div className={styles.warper}>
			<div className=' container_wrapper'>
				<p className={styles.Hading}>
					Invest in the EV Revolution with <span className={styles.blueText}>GO EC</span>{' '}
					<span className={styles.dot}></span>
				</p>
				<p className={styles.SubHading}>GO EC offers three unique ways to be part of the EV revolution</p>
				<div className=' grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] my-[55px]'>
					{CardList.map((item, i) => (
						<Link href={item.url} key={item.id}>
							<div
								// initial='hidden'
								// animate={controls}
								// variants={fromUp}
								// transition={{
								// 	delay: 0.3 * i,
								// 	ease: 'linear',
								// 	duration: 0.5,
								// }}
								className={styles.CardBody}>
								<div>
									<h1 className={styles.CardHading}>{item.hading}</h1>
									<h1 className={styles.CardSubHading}>{item.SubHading}</h1>
								</div>
								<div className={styles.CardIcon}>{item.svg}</div>
								<p className={styles.CardText}>{item.text}</p>
								<div className='pt-6 whitespace-nowrap mt-auto'>
									<button className={styles.button}>
										<p>Learn more</p>
										<HiOutlineArrowUpRight />
									</button>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}
