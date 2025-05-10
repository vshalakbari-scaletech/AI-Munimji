'use client';

import React from 'react';

export type TabType = 'Daily' | 'Weekly' | 'Monthly';

const tabs: { label: TabType }[] = [
  { label: 'Daily' },
  { label: 'Weekly' },
  { label: 'Monthly' },
];

interface TabSwitcherProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export default function TabSwitcher({ activeTab, onTabChange }: TabSwitcherProps) {
  return (
    <div className="flex bg-[#E6F9F1] rounded-xl p-1 w-fit mx-auto mt-6 mb-2 gap-1">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => onTabChange(tab.label)}
          className={`px-5 py-2 rounded-xl font-semibold text-sm transition-colors duration-200
            ${tab.label === activeTab ? 'bg-background text-white shadow' : 'text-[#1ED495] bg-transparent'}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
} 