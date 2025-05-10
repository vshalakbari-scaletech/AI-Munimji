import type { Metadata } from 'next';

import Notification from '@/components/notification/notification';
import Layout from '@/components/layout';
import { AuthProvider } from '@/context/authContext';

import 'react-toastify/dist/ReactToastify.css';
import './globals.scss';

export const metadata: Metadata = {
	title: 'AI Munimji - Financial Management',
	description: 'Manage your finances efficiently with powerful tracking and analytics tools',
	viewport: 'width=device-width, initial-scale=1',
	robots: 'index, follow'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<link rel='icon' href='/images/scaletech.png' type='image/png' />
			</head>
			<body className={`bg-gradient-body font-space antialiased`}>
				<AuthProvider>
					<Layout>{children}</Layout>
				</AuthProvider>
				<Notification />
			</body>
		</html>
	);
}
