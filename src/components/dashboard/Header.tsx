'use client';

import { useRouter } from 'next/navigation';
import { RiArrowLeftLine, RiNotification3Line } from 'react-icons/ri';

interface HeaderProps {
	title: string;
}

export default function DashboardHeader({ title }: HeaderProps) {
	const router = useRouter();

	return (
		<header className='sticky top-0 z-30 flex items-center justify-between bg-white px-4 py-4 shadow-sm'>
			{/* Back Button */}
			<button
				onClick={() => router.back()}
				aria-label='Go back'
				type='button'
				className='rounded-full bg-gray-100 p-2'
			>
				<RiArrowLeftLine className='text-gray-800' size={24} />
			</button>

			{/* Title */}
			<div className='flex-1 text-center'>
				<h1 className='text-lg font-bold text-gray-800'>{title}</h1>
			</div>

			{/* Notification Button (placeholder for spacing) */}
			<button aria-label='Notifications' type='button' className='rounded-full bg-gray-100 p-2'>
				<RiNotification3Line className='text-indigo-600' size={24} />
			</button>
		</header>
	);
}
