"use client"

import { RiArrowLeftLine, RiNotification3Line } from 'react-icons/ri';

interface HeaderProps {
  title: string;
}

export default function DashboardHeader({ title }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 py-4 bg-white shadow-sm">
      <button
        className="p-2 rounded-full bg-background-muted"
        // onClick={onBack}
        aria-label="Go back"
        type="button"
      >
        <RiArrowLeftLine className="text-text-primary" size={24} />
      </button>
      <h1 className="flex-1 text-center text-lg font-bold text-text-primary -ml-10">{title}</h1>
      <button className="p-2 rounded-full bg-background-muted" aria-label="Notifications" type="button">
        <RiNotification3Line className="text-primary-dark" size={24} />
      </button>
    </header>
  );
} 