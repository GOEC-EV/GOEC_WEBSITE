import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import { ToggleGroup, ToggleGroupItem } from '../ui/ToggleGroup';
import useModal from '@/hooks/useModal';
import Image from 'next/image';
import { useRouter } from 'next/router';

const ThankYouModal = () => {
	const { closeModal } = useModal();
	const router = useRouter();
	return (
		<Dialog open={true}>
			<DialogContent className='sm:max-w-[425px]'>
				<div className=''>
					<Image
						className='block mx-auto'
						src='/images/icons/modal-complete.svg'
						alt='tick icon'
						width={94}
						height={94}
					/>
					<div className='mt-8 space-y-4'>
						<h2 className='mx-auto text-2xl font-bold text-center text-[#F2F2F2]'>Thank you</h2>
						<p className='font-medium text-sm text-center text-[#BDBDBD] max-w-[15.43rem] mx-auto'>
							We Appreciate your time and effort for filling the form
						</p>
					</div>
				</div>
				<DialogFooter>
					<button
						onClick={() => {
							closeModal();
						}}
						className='py-5 w-full bg-transparent font-semibold [letter-spacing:-0.0255rem] text-center rounded-lg text-[#007AFF] transition-colors hover:bg-[#007AFF]/10 disabled:bg-[#012143] mt-2'>
						Close
					</button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default ThankYouModal;
