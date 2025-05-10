'use client';
import { PropsWithChildren } from 'react';
import BottomNav from './BottomNav';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className='relative w-full'>
			<div
				className='bg-background-default mx-auto min-h-screen max-w-[430px]'
				style={{
					boxShadow:
						'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'
				}}
			>
				<main className='h-[calc(100vh-71px)]'>{children}</main>
				<BottomNav />
			</div>
		</div>
	);
};

export default Layout;
