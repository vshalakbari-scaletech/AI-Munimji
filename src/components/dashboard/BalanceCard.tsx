import { RiCheckboxCircleFill } from 'react-icons/ri';

export default function BalanceCard() {
  return (
    <div className="w-full bg-background p-5 shadow text-center flex flex-col gap-3">
      <div className="flex justify-between items-center mb-2">
        <div className="flex flex-col items-start">
          <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
            <span className="inline-block w-4 h-4 bg-white rounded-full mr-1" />
            Total Balance
          </span>
          <span className="text-3xl font-bold text-black mt-1">₹7,783.00</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-xs font-medium text-gray-500 flex items-center gap-1">
            <span className="inline-block w-4 h-4 bg-white rounded-full mr-1" />
            Total Expense
          </span>
          <span className="text-3xl font-bold text-white mt-1">-₹1,187.40</span>
        </div>
      </div>
      <div className="flex items-center gap-2 w-full mt-2">
        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-2 bg-black rounded-full" style={{ width: '30%' }} />
        </div>
        <span className="ml-2 text-xs font-semibold text-black">₹20,000.00</span>
      </div>
      <div className="flex items-center gap-2 justify-center mt-1">
        <RiCheckboxCircleFill className="text-white text-lg" />
        <span className="text-xs text-gray-700">30% Of Your Expenses, Looks Good.</span>
      </div>
    </div>
  );
} 