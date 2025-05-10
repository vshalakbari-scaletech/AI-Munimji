import React from 'react';

const tabs = [
  { label: 'Daily' },
  { label: 'Weekly' },
  { label: 'Monthly' },
];

export default function TabSwitcher() {
  return (
    <div className="flex bg-background-muted rounded-xl p-1 w-fit mx-auto mt-6 mb-2">
      {tabs.map((tab, idx) => (
        <button
          key={tab.label}
          className={`px-5 py-2 rounded-xl font-medium text-sm transition-colors duration-200
            ${tab.label === 'Monthly' ? 'bg-primary text-white shadow' : 'text-text-primary'}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
} 