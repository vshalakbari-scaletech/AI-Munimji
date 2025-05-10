'use client';

import { ReactNode } from 'react';
import BottomNav from './BottomNav';

interface ProtectedLayoutProps {
  children: ReactNode;
}

export default function ProtectedLayout({ children }: ProtectedLayoutProps) {
  return (
    <div className="min-h-screen bg-background-default">
      <main className="pb-20">
        {children}
      </main>
      <BottomNav />
    </div>
  );
} 