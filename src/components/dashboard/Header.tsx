'use client';

import { RiArrowLeftLine, RiNotification3Line } from 'react-icons/ri';

interface HeaderProps {
	title: string;
}

export default function DashboardHeader({ title }: HeaderProps) {
	return (
		<header className='sticky top-0 z-30 flex items-center justify-between bg-white px-4 py-4 shadow-sm'>
			<button
				className='bg-background-muted rounded-full p-2'
				// onClick={onBack}
				aria-label='Go back'
				type='button'
			>
				<RiArrowLeftLine className='text-text-primary' size={24} />
			</button>
			<h1 className='text-text-primary -ml-10 flex-1 text-center text-lg font-bold'>{title}</h1>
			<button className='bg-background-muted rounded-full p-2' aria-label='Notifications' type='button'>
				<RiNotification3Line className='text-primary-dark' size={24} />
			</button>
		</header>
	);
}
