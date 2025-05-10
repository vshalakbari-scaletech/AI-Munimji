'use client';

import { useRouter } from 'next/navigation';
import Button from '@/components/button/button';

const NotFound = () => {
	const router = useRouter();

	const handleGoHome = () => {
		router.push('/dashboard');
	};

	return (
		<div className='bg-background flex h-screen items-center justify-center'>
			<div className='text-center'>
				<h1 className='text-primary text-6xl font-bold'>404</h1>
				<p className='text-secondary mt-4 text-lg'>Oops! Page not found.</p>
				<Button onClick={handleGoHome} variant='primary' className='mt-6'>
					Go to Homepage
				</Button>
			</div>
		</div>
	);
};

export default NotFound;
