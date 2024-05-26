import useModal from '@/hooks/useModal';
import WillingToInvestModal from './WillingToInvestModal';
import ThankYouModal from './ThankYouModal';
import MoreThan10LakhModal from './MoreThan10LakhModal';
import { useEffect, useState } from 'react';

const ModalProvider = () => {
	const [isloaded, setisLoaded] = useState(false);
	const { modal } = useModal();
	useEffect(() => {
		setisLoaded(true);
	}, []);

	if (!isloaded) return null;

	if (!modal) return null;

	return (
		<>
			{modal === 'WILLING_TO_INVEST' && <WillingToInvestModal />}
			{modal === 'MORE_THAN_10LAKH' && <MoreThan10LakhModal />}
			{modal === 'THANKYOU_MODAL' && <ThankYouModal />}
		</>
	);
};

export default ModalProvider;
