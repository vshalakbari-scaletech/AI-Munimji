import Loader from '@/components/loader/loader';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'AI Munimji - Smart Financial Management',
	description:
		'A comprehensive financial management solution designed to help you track, analyze, and optimize your finances'
};

export default function Home() {
	return (
		<div className='h-screen w-full'>
			<Loader />
		</div>
	);
}
