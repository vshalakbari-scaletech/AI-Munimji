'use client';
import { PropsWithChildren } from 'react';
import BottomNav from './BottomNav';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='relative w-full'>
			<div className='bg-background-default mx-auto min-h-screen max-w-[430px]'>
				<main>{children}</main>
				<BottomNav />
			</div>
		</div>
	);
};

export default Layout;
