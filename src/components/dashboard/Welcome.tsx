import { RiNotification3Line } from 'react-icons/ri';

export default function Welcome() {
	return (
		<header className='bg-background relative flex w-full flex-col gap-2 px-6 pb-8 pt-6'>
			<div className='flex items-center justify-between'>
				<div />
				<button className='rounded-full bg-white/60 p-2' aria-label='Notifications' type='button'>
					<RiNotification3Line className='text-primary-dark' size={24} />
				</button>
			</div>
			<div className='mt-2'>
				<h2 className='text-2xl font-bold text-black'>Hi, Welcome Back</h2>
				<p className='mt-1 text-sm text-black/70'>Good Morning</p>
			</div>
		</header>
	);
}
