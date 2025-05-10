'use client';

import { RiMoneyDollarCircleLine, RiShoppingBag3Line, RiHomeSmileLine } from 'react-icons/ri';
import { TabType } from './TabSwitcher';

const transactions = [
  {
    icon: <RiMoneyDollarCircleLine className="text-primary text-2xl" />, // Salary
    title: 'Salary',
    time: '18:27 - April 30',
    type: 'Monthly',
    amount: '₹4.000,00',
    amountClass: 'text-primary',
  },
  {
    icon: <RiShoppingBag3Line className="text-accent text-2xl" />, // Groceries
    title: 'Groceries',
    time: '17:00 - April 24',
    type: 'Daily',
    amount: '-₹100,00',
    amountClass: 'text-red-500',
  },
  {
    icon: <RiHomeSmileLine className="text-secondary text-2xl" />, // Rent
    title: 'Rent',
    time: '8:30 - April 15',
    type: 'Monthly',
    amount: '-₹674,40',
    amountClass: 'text-red-500',
  },
  {
    icon: <RiShoppingBag3Line className="text-accent text-2xl" />,
    title: 'Weekly Shopping',
    time: '14:00 - April 28',
    type: 'Weekly',
    amount: '-₹250,00',
    amountClass: 'text-red-500',
  },
];

interface TransactionListProps {
  activeTab: TabType;
}

export default function TransactionList({ activeTab }: TransactionListProps) {
  const filteredTransactions = transactions.filter(tx => {
    if (activeTab === 'Daily') {
      return tx.type === 'Daily';
    } else if (activeTab === 'Weekly') {
      return tx.type === 'Weekly';
    } else if (activeTab === 'Monthly') {
      return tx.type === 'Monthly';
    }
    return true;
  });

  return (
    <div className="flex flex-col gap-4 mt-2">
      {filteredTransactions.map((tx) => (
        <div key={tx.title} className="flex items-center bg-white rounded-2xl p-3 shadow-sm">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E6F9F1] mr-3">
            {tx.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-black text-base">{tx.title}</span>
              <span className={`font-bold text-base ${tx.amountClass}`}>{tx.amount}</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-[#1ED495] font-semibold">{tx.time}</span>
              <span className="text-xs text-gray-400 font-medium">{tx.type}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 