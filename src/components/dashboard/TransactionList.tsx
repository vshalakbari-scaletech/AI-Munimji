import { RiMoneyDollarCircleLine, RiShoppingBag3Line, RiHomeSmileLine } from 'react-icons/ri';

const transactions = [
  {
    icon: <RiMoneyDollarCircleLine className="text-primary text-2xl" />, // Salary
    title: 'Salary',
    time: '18:27 - April 30',
    type: 'Monthly',
    amount: '$4.000,00',
    amountClass: 'text-text-primary',
  },
  {
    icon: <RiShoppingBag3Line className="text-accent text-2xl" />, // Groceries
    title: 'Groceries',
    time: '17:00 - April 24',
    type: 'Pantry',
    amount: '-$100,00',
    amountClass: 'text-primary',
  },
  {
    icon: <RiHomeSmileLine className="text-secondary text-2xl" />, // Rent
    title: 'Rent',
    time: '8:30 - April 15',
    type: 'Rent',
    amount: '-$674,40',
    amountClass: 'text-secondary',
  },
];

export default function TransactionList() {
  return (
    <div className="flex flex-col gap-4 mt-2">
      {transactions.map((tx, idx) => (
        <div key={tx.title} className="flex items-center bg-white rounded-2xl p-3 shadow-sm">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-background-muted mr-3">
            {tx.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-text-primary text-sm">{tx.title}</span>
              <span className={`font-bold text-base ${tx.amountClass}`}>{tx.amount}</span>
            </div>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-text-secondary">{tx.time}</span>
              <span className="text-xs text-text-secondary">{tx.type}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 