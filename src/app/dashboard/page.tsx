import { DashboardContainer } from '@/components/dashboard/container/DashboardContainer';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Dashboard | AI Munimji',
	description: 'View your financial summary, recent transactions, and key performance indicators'
};

export default function DashboardPage() {
	return <DashboardContainer />;
}
