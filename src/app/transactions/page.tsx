import DashboardHeader from '@/components/dashboard/Header';
import TransactionPage from '@/components/transactionPage/transactionPage';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Transactions | AI Munimji',
	description: 'View, filter, and manage all your financial transactions in one place'
};

const Transaction = () => {
	return (
		<div>
			<DashboardHeader title='Transaction' />
			<TransactionPage />
		</div>
	);
};

export default Transaction;
