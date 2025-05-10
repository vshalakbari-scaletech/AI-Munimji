import { RiCarLine, RiBox3Line } from 'react-icons/ri';

export default function SavingsCard() {
  return (
    <div className="flex bg-background rounded-3xl shadow-md p-4 items-center gap-4 border border-[#BFF2DB]">
      <div className="flex flex-col items-center flex-1">
        <div className="w-14 h-14 flex items-center justify-center rounded-full border-4 border-white bg-white mb-2">
          <RiCarLine className="text-primary text-3xl" />
        </div>
        <span className="text-xs text-white font-semibold mt-1">Savings On Goals</span>
      </div>
      <div className="w-px bg-[#BFF2DB] h-14 mx-2" />
      <div className="flex flex-col flex-1 gap-2">
        <div>
          <span className="block text-xs text-gray-500">Revenue Last Week</span>
          <span className="block text-lg font-bold text-black">₹4,000.00</span>
        </div>
        <div>
          <span className="block text-xs text-gray-500">Food Last Week</span>
          <span className="block text-lg font-bold text-white">-₹100.00</span>
        </div>
      </div>
    </div>
  );
} 