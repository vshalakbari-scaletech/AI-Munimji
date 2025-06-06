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
    <div className="min-h-screen bg-[#BFF2DB] relative">
      <Welcome />
      <BalanceCard />
      <main className="max-w-md mx-auto px-4 pb-32 -mt-8 bg-white rounded-t-3xl min-h-[calc(100vh-200px)]">
        <div className="mb-6 pt-5 mt-5">
          <SavingsCard />
        </div>
        <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
        <TransactionList activeTab={activeTab} />
      </main>
    </div>
  );
}
