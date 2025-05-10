'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  RiHome2Line,
  RiBarChart2Line,
  RiExchangeLine,
  RiStackLine,
  RiUser3Line,
} from 'react-icons/ri';

// Custom green from screenshot
const ACTIVE_BG = '#BFF2DB'; // light green background for navbar
const ACTIVE_PILL = '#1ED495'; // green for active icon pill
const ICON_COLOR = '#1A2E22'; // dark outline for icons

const navItems = [
  {
    path: '/dashboard',
    icon: RiHome2Line,
  },
  {
    path: '/dashboard/analytics',
    icon: RiBarChart2Line,
  },
  {
    path: '/dashboard/transactions',
    icon: RiExchangeLine,
  },
  {
    path: '/dashboard/layers',
    icon: RiStackLine,
  },
  {
    path: '/dashboard/profile',
    icon: RiUser3Line,
  },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 flex justify-center"
      style={{ background: ACTIVE_BG }}
    >
      <div
        className="flex items-center justify-between w-full max-w-md px-6 py-3"
        style={{ borderTopLeftRadius: 32, borderTopRightRadius: 32, background: ACTIVE_BG }}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              href={item.path}
              className="flex items-center justify-center flex-1"
            >
              <span
                className={`transition-all duration-200 flex items-center justify-center ${
                  isActive ? 'bg-[#1ED495] rounded-full' : ''
                }`}
                style={{ width: 44, height: 44 }}
              >
                <Icon size={28} color={ICON_COLOR} />
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
} 