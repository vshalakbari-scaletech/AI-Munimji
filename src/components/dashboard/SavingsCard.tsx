import { RiCarLine, RiBox3Line } from 'react-icons/ri';

export default function SavingsCard() {
  return (
    <div className="flex bg-white rounded-3xl shadow-md p-4 items-center gap-4">
      <div className="flex flex-col items-center flex-1">
        <div className="w-14 h-14 flex items-center justify-center rounded-full border-4 border-primary bg-white mb-2">
          <RiCarLine className="text-primary text-3xl" />
        </div>
        <span className="text-xs text-text-secondary">Savings On Goals</span>
      </div>
      <div className="w-px bg-grey-200 h-14 mx-2" />
      <div className="flex flex-col flex-1 gap-2">
        <div>
          <span className="block text-xs text-text-secondary">Revenue Last Week</span>
          <span className="block text-lg font-bold text-text-primary">$4,000.00</span>
        </div>
        <div>
          <span className="block text-xs text-text-secondary">Food Last Week</span>
          <span className="block text-lg font-bold text-primary">-$100.00</span>
        </div>
      </div>
    </div>
  );
} 