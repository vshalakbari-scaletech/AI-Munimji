import React from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Notification: React.FC = () => {
	return (
		<ToastContainer
			position='bottom-right'
			autoClose={5000}
			newestOnTop
			hideProgressBar
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			pauseOnHover
			theme='light'
			style={{
				fontSize: '12px',
				color: '#687586',
				fontWeight: 500
			}}
		/>
	);
};

type NotificationType = 'success' | 'error';

export const notify = (message: string, type?: NotificationType, options: any = {}) => {
	const msg = `${message[0].toUpperCase()}${message.substr(1)}`;

	options = {
		icon: false,
		style: {
			background: '#dc3545',
			color: '#FFFFFF'
		},
		...options
	};

	if (type === 'success') {
		toast.success(msg);
	} else if (type === 'error') {
		toast.error(msg);
	} else {
		toast(message, options);
	}
};

export default Notification;
