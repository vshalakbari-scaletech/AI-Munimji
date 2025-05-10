'use client';

import { useState } from 'react';
import SavingsCard from '../SavingsCard';
import TabSwitcher, { TabType } from '../TabSwitcher';
import TransactionList from '../TransactionList';
import BalanceCard from '../BalanceCard';
import Welcome from '../Welcome';

export const DashboardContainer = () => {
	const [activeTab, setActiveTab] = useState<TabType>('Daily');

	return (
		<div className='min-h-screen bg-[#BFF2DB]'>
			<Welcome />
			<BalanceCard />
			<main className='mx-auto -mt-8 max-w-md rounded-t-3xl bg-white px-4 pb-24'>
				<div className='mb-6 mt-5 pt-5'>
					<SavingsCard />
				</div>
				<TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
				<TransactionList activeTab={activeTab} />
			</main>
		</div>
	);
};
