import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { ToggleGroup, ToggleGroupItem } from '../ui/ToggleGroup';
import useModal from '@/hooks/useModal';
import useContactFormStore from '@/stores/contactFormStore';
import uploadFile from '@/utilities/uploadFile';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '@/utilities/firebase';
import { toast } from 'react-toastify';
const storage = getStorage(app);

const WillingToInvestModal = () => {
	const { openModal, closeModal } = useModal();
	const { setFormData, file, sendData, clearFormData } = useContactFormStore();
	const [progress, setProgress] = useState(0);
	const [state, setState] = useState('initial');
	const [value, setValue] = useState('');

	async function handleClick() {
		setFormData({
			willingToInvest: Boolean(value),
			moreThan10Lakh: false,
		});
		closeModal();
	}
	return (
		<Dialog open={true}>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogDescription className='text-center text-sm font-medium max-w-[18.71088rem] mx-auto text-[#BDBDBD]'>
						Are you willing to invest in charging stations owned by GOEC?
					</DialogDescription>
				</DialogHeader>
				<div>
					<ToggleGroup
						disabled={state === 'uploading' || state === 'submitting'}
						className='grid grid-cols-1 gap-2.5'
						onValueChange={val => setValue(val)}
						type='single'>
						<ToggleGroupItem className='gap-4' value='true' aria-label='Toggle Yes,I am interested'>
							Yes,I am interested
						</ToggleGroupItem>
						<ToggleGroupItem className='gap-4' value='false' aria-label='Toggle No,I am not interested'>
							No,I am not interested
						</ToggleGroupItem>
					</ToggleGroup>
				</div>
				<DialogFooter>
					<button
						disabled={value === '' || state === 'uploading' || state === 'submitting'}
						onClick={handleClick}
						className='py-5 w-full bg-[#007AFF] font-semibold [letter-spacing:-0.0255rem] text-center rounded-lg text-white transition-opacity hover:opacity-85 disabled:bg-[#012143] mt-2'>
						{state === 'initial' && 'Submit'}
						{state === 'uploading' && `Uploading ${progress.toFixed(0)}%`}
						{state === 'submitting' && 'Submitting'}
					</button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default WillingToInvestModal;
