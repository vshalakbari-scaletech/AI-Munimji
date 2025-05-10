'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { RiHome2Line, RiBarChart2Line, RiExchangeLine, RiStackLine, RiUser3Line } from 'react-icons/ri';

// Custom green from screenshot
const ACTIVE_BG = '#BFF2DB'; // light green background for navbar
// const ACTIVE_PILL = '#1ED495'; // green for active icon pill
const ICON_COLOR = '#1A2E22'; // dark outline for icons

const navItems = [
	{
		path: '/dashboard',
		icon: RiHome2Line
	},
	{
		path: '/analytics',
		icon: RiBarChart2Line
	},
	{
		path: '/transactions',
		icon: RiExchangeLine
	},
	{
		path: '/categories',
		icon: RiStackLine
	}
];

export default function BottomNav() {
	const pathname = usePathname();

	return (
		<nav
			// className='fixed bottom-0 left-0 right-0 z-50 mx-auto flex max-w-[430px] justify-center'
			style={{ background: ACTIVE_BG }}
		>
			<div
				className='flex w-full max-w-md items-center justify-between px-6 py-3'
				style={{ borderTopLeftRadius: 32, borderTopRightRadius: 32, background: ACTIVE_BG }}
			>
				{navItems.map((item) => {
					const isActive = pathname === item.path;
					const Icon = item.icon;
					return (
						<Link key={item.path} href={item.path} className='flex flex-1 items-center justify-center'>
							<span
								className={`flex items-center justify-center transition-all duration-200 ${
									isActive ? 'rounded-full bg-[#1ED495]' : ''
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
