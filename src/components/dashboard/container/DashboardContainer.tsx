'use client';

import { useState } from 'react';
import DashboardHeader from "../Header";
import SavingsCard from "../SavingsCard";
import TabSwitcher, { TabType } from "../TabSwitcher";
import TransactionList from "../TransactionList";
import BalanceCard from "../BalanceCard";

export const DashboardContainer = () => {
  const [activeTab, setActiveTab] = useState<TabType>('Daily');

  return (
    <div className="min-h-screen bg-[#BFF2DB]">
      <DashboardHeader />
      <BalanceCard />
      <main className="max-w-md mx-auto px-4 pb-24 -mt-8 bg-white rounded-t-3xl">
        <div className="mb-6 pt-5 mt-5">
          <SavingsCard />
        </div>
        <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
        <TransactionList activeTab={activeTab} />
      </main>
    </div>
  );
}
