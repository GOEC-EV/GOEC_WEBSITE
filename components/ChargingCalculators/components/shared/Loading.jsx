import styles from '../../form.module.css';

const Loading = () => {
	return (
		<div className='h-full mt-24 flex items-center justify-center bg-white'>
			<span className={styles.loader}></span>
		</div>
	);
};

export default Loading;
