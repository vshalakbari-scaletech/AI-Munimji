import DashboardHeader from '@/components/dashboard/Header';
import TransactionPage from '@/components/transactionPage/transactionPage';
import React from 'react';

const Transaction = () => {
	return (
		<div>
			<DashboardHeader title='Transaction' />
			<TransactionPage />
		</div>
	);
};

export default Transaction;
