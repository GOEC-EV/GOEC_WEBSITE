import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader } from '@/components/ui/dialog';
import { ToggleGroup, ToggleGroupItem } from '../ui/ToggleGroup';
import useModal from '@/hooks/useModal';
import { useState } from 'react';
import useContactFormStore from '@/stores/contactFormStore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { toast } from 'react-toastify';
import { app } from '@/utilities/firebase';

const storage = getStorage(app);
function MoreThan10LakhModal() {
	const { openModal, closeModal } = useModal();
	const { setFormData, file, sendData, clearFormData } = useContactFormStore();
	const [progress, setProgress] = useState(0);
	const [state, setState] = useState('initial');
	const [value, setValue] = useState('');

	async function handleClick() {
		setFormData({
			moreThan10Lakh: Boolean(value),
			willingToInvest: false,
		});
		closeModal();
	}
	return (
		<Dialog open={true}>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogDescription className='text-center text-sm font-medium max-w-[18.71088rem] mx-auto text-[#BDBDBD]'>
						Are you comfortable in investing more than 10 Lakhs in EV charging station business ?
					</DialogDescription>
				</DialogHeader>
				<div className=''>
					<ToggleGroup className='grid grid-cols-1 gap-2.5' onValueChange={setValue} type='single'>
						<ToggleGroupItem className='gap-4' value='true' aria-label='Toggle Yes,I am'>
							Yes,I am
						</ToggleGroupItem>
						<ToggleGroupItem className='gap-4' value='false' aria-label='Toggle No,I am not'>
							No,I am not
						</ToggleGroupItem>
					</ToggleGroup>
				</div>
				<DialogFooter>
					<button
						onClick={handleClick}
						disabled={value === '' || state !== 'initial'}
						className='py-5 w-full bg-[#007AFF] font-semibold [letter-spacing:-0.0255rem] text-center rounded-lg text-white transition-opacity hover:opacity-85 disabled:bg-[#012143] mt-2'>
						{state === 'initial' && 'Submit'}
						{state === 'uploading' && `Uploading ${progress.toFixed(2)}%`}
						{state === 'submitting' && 'Submitting'}
					</button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}

export default MoreThan10LakhModal;
