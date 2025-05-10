'use client'; // Error components must be Client Components

import Link from 'next/link';
import { useEffect } from 'react';

const Error = ({ error }: { error: Error & { digest?: string }; reset: () => void }) => {
	useEffect(() => {
		// Log the error to an error reporting service
		console.error(error);
	}, [error]);

	return (
		<div className='flex h-screen flex-col items-center justify-center bg-background text-center'>
			<h1 className='mb-4 text-3xl font-bold text-accent'>500 - Internal Server Error</h1>
			<p>{error.message}</p>
			<p className='mb-6 text-lg text-secondary'>
				Oops! Something went wrong on our end. Please try again later.
			</p>
			<Link href='/' className='hover:text-primary-dark text-primary underline'>
				Go back to the homepage
			</Link>
		</div>
	);
};
export default Error;
