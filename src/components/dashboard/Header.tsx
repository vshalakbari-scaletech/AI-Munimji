"use client"

import { RiArrowLeftLine, RiNotification3Line } from 'react-icons/ri';

interface HeaderProps {
  title: string;
}

export default function DashboardHeader() {
  return (
    <header className="w-full bg-background px-6 pt-6 pb-8 flex flex-col gap-2 relative">
      <div className="flex items-center justify-between">
        <div />
        <button className="p-2 rounded-full bg-white/60" aria-label="Notifications" type="button">
          <RiNotification3Line className="text-primary-dark" size={24} />
        </button>
      </div>
      <div className="mt-2">
        <h2 className="text-2xl font-bold text-black">Hi, Welcome Back</h2>
        <p className="text-sm text-black/70 mt-1">Good Morning</p>
      </div>
    </header>
  );
} 