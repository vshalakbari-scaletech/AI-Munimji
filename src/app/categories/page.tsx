import DashboardHeader from '@/components/dashboard/Header';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Analytics | AI Munimji',
	description: 'Gain insights into your financial data with comprehensive analytics and reporting tools'
};

export default function CategoriesPage() {
	return (
		<div className='p-4'>
			<DashboardHeader title='Categories' />
			{/* Add your analytics content here */}
            <p className='text-center text-text-primary'>Coming Soon</p>
		</div>
	);
}
