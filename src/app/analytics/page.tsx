import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Analytics | AI Munimji',
	description: 'Gain insights into your financial data with comprehensive analytics and reporting tools'
};

export default function AnalyticsPage() {
	return (
		<div className='p-4'>
			<h1 className='mb-4 text-2xl font-semibold text-text-primary'>Analytics</h1>
			{/* Add your analytics content here */}
		</div>
	);
}
