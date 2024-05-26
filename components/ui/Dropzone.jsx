import useContactFormStore from '@/stores/contactFormStore';
import cn from '@/utilities/cn';
import { X } from 'lucide-react';
import { Cross } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FcDocument } from 'react-icons/fc';

function Dropzone({ file, setFile, setFileError, content }) {
	const onDrop = useCallback(acceptedFiles => {
		// Do something with the files
		const url = acceptedFiles[0] && URL.createObjectURL(acceptedFiles[0]);
		setFile(acceptedFiles[0] ?? null);
		if (file) {
			setFileError('');
		}
	}, []);
	const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
		onDrop,
		maxFiles: 1,
		noClick: file !== null,
		noDrag: file !== null,
		maxSize: 100 * 1024 * 1024,
	});

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			<div
				className={cn(
					'min-h-40 flex flex-col items-center bg-[#2F2F2F] border border-dashed border-[#4D4D4D] rounded-[0.4655rem] py-8 px-4 cursor-pointer mt-2.5',
					isDragActive && 'bg-[#414141]',
					file !== null && 'cursor-default'
				)}>
				{file === null ? (
					<>
						<img className='mb-1' src='/images/icons/upload.svg' alt='upload files' height={37} width={37} />
						<p className='max-w-[11.87rem] text-xs mb-4 text-center text-[#87898E]'>
							{content ?? "Drop your Resume here to upload or select from storage"}
						</p>
						<p className='underline text-[#2F80ED]'>Browse Storage</p>
					</>
				) : (
					<>
						<div className='relative'>
							<FcDocument size={200} />
							<p className='text-center text-white'>{file.path}</p>
							<button
								className='absolute h-6 w-6 bg-red-600 rounded-full top-0 right-0 translate-x-1/2 -translate-y-1/2'
								onClick={e => {
									e.stopPropagation();
									setFile(null);
								}}>
								<X className='text-white' />
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Dropzone;
