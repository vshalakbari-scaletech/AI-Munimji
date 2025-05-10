'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/button/button';

const NotFound = () => {
	const router = useRouter();

	const handleGoHome = () => {
		router.push('/messages');
	};

	return (
		<div className='flex h-screen items-center justify-center bg-background'>
			<div className='text-center'>
				<h1 className='text-6xl font-bold text-primary'>404</h1>
				<p className='mt-4 text-lg text-secondary'>Oops! Page not found.</p>
				<Button onClick={handleGoHome} variant='primary' className='mt-6'>
					Go to Homepage
				</Button>
			</div>
		</div>
	);
};

export default NotFound;
