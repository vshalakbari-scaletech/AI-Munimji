import { RiCarLine } from 'react-icons/ri';

export default function SavingsCard() {
	return (
		<div className='bg-background flex items-center gap-4 rounded-3xl border border-[#BFF2DB] p-4 shadow-md'>
			<div className='flex flex-1 flex-col items-center'>
				<div className='mb-2 flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-white'>
					<RiCarLine className='text-primary text-3xl' />
				</div>
				<span className='mt-1 text-xs font-semibold text-white'>Savings On Goals</span>
			</div>
			<div className='mx-2 h-14 w-px bg-[#BFF2DB]' />
			<div className='flex flex-1 flex-col gap-2'>
				<div>
					<span className='block text-xs text-gray-500'>Revenue Last Week</span>
					<span className='block text-lg font-bold text-black'>₹4,000.00</span>
				</div>
				<div>
					<span className='block text-xs text-gray-500'>Food Last Week</span>
					<span className='block text-lg font-bold text-white'>-₹100.00</span>
				</div>
			</div>
		</div>
	);
}
