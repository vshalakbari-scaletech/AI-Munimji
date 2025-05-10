'use client';

import React from 'react';

const TransactionPage = () => {
	return (
		<div className='flex min-h-screen flex-col items-center justify-center bg-background from-teal-600 to-teal-300 p-4'>
			<div>
				<div className='mb-6 w-[384px] rounded-2xl border border-gray-200 bg-white p-4 text-center'>
					<h1 className='text-xs font-medium uppercase text-gray-500'>Total Balance</h1>
					<p className='mt-2 text-4xl font-bold text-gray-900'>&#8377;7,783.00</p>
				</div>
				<div className='flex w-full justify-center'>
					<div className='mb-6 w-full max-w-[350px] rounded-2xl p-4 text-center'>
						<div className='flex justify-between'>
							<div className='mt-4 flex flex-col justify-between text-sm'>
								<p>Total Balance</p>
								<p className='text-2xl font-medium text-gray-600'>$7,783.00</p>
							</div>
							<div className='mt-4 flex flex-col justify-between text-sm'>
								<p>Total Expense</p>
								<p className='text-2xl font-medium text-red-500'>-$1,187.40</p>
							</div>
						</div>
						<div className='mt-4 h-2 w-full rounded-full bg-gray-200'>
							<div className='h-2 rounded-full bg-teal-500' style={{ width: '30%' }}></div>
						</div>
					</div>
				</div>
			</div>
			<div className='relative w-full max-w-md rounded-3xl bg-white p-6 shadow-md'>
				{/* Total Balance Section */}

				{/* Transactions Section */}
				<div>
					{/* April Transactions */}
					<h2 className='mb-3 text-sm font-semibold uppercase text-gray-600'>April</h2>
					<div className='space-y-4'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center'>
								<div className='mr-3 rounded-full bg-teal-100 p-3'>
									{/* <CurrencyDollarIcon className='h-5 w-5 text-teal-500' /> */}
								</div>
								<div>
									<p className='text-sm font-medium text-gray-800'>Salary</p>
									<p className='text-xs text-gray-500'>18:27 - April 30</p>
								</div>
							</div>
							<div className='text-right'>
								<p className='text-xs text-gray-600'>Monthly</p>
								<p className='text-sm font-medium text-teal-500'>$4,000.00</p>
							</div>
						</div>

						<div className='flex items-center justify-between'>
							<div className='flex items-center'>
								<div className='mr-3 rounded-full bg-teal-100 p-3'>
									{/* <ShoppingBagIcon className='h-5 w-5 text-teal-500' /> */}
								</div>
								<div>
									<p className='text-sm font-medium text-gray-800'>Groceries</p>
									<p className='text-xs text-gray-500'>17:00 - April 24</p>
								</div>
							</div>
							<div className='text-right'>
								<p className='text-xs text-gray-600'>Pantry</p>
								<p className='text-sm font-medium text-red-500'>-$100.00</p>
							</div>
						</div>

						<div className='flex items-center justify-between'>
							<div className='flex items-center'>
								<div className='mr-3 rounded-full bg-teal-100 p-3'>
									{/* <HomeIcon className='h-5 w-5 text-teal-500' /> */}
								</div>
								<div>
									<p className='text-sm font-medium text-gray-800'>Rent</p>
									<p className='text-xs text-gray-500'>8:30 - April 15</p>
								</div>
							</div>
							<div className='text-right'>
								<p className='text-xs text-gray-600'>Rent</p>
								<p className='text-sm font-medium text-red-500'>-$674.40</p>
							</div>
						</div>

						<div className='flex items-center justify-between'>
							<div className='flex items-center'>
								<div className='mr-3 rounded-full bg-teal-100 p-3'>
									{/* <TruckIcon className='h-5 w-5 text-teal-500' /> */}
								</div>
								<div>
									<p className='text-sm font-medium text-gray-800'>Transport</p>
									<p className='text-xs text-gray-500'>9:30 - April 08</p>
								</div>
							</div>
							<div className='text-right'>
								<p className='text-xs text-gray-600'>Fuel</p>
								<p className='text-sm font-medium text-red-500'>-$41.3</p>
							</div>
						</div>
					</div>

					{/* March Transactions */}
					<h2 className='mb-3 mt-6 text-sm font-semibold uppercase text-gray-600'>March</h2>
					<div className='space-y-4'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center'>
								<div className='mr-3 rounded-full bg-teal-100 p-3'>
									{/* <CakeIcon className='h-5 w-5 text-teal-500' /> */}
								</div>
								<div>
									<p className='text-sm font-medium text-gray-800'>Food</p>
									<p className='text-xs text-gray-500'>19:30 - March 31</p>
								</div>
							</div>
							<div className='text-right'>
								<p className='text-xs text-gray-600'>Dinner</p>
								<p className='text-sm font-medium text-red-500'>-$70.40</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TransactionPage;
