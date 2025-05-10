'use client';
import { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return <div className='relative w-full'>{children}</div>;
};

export default Layout;
