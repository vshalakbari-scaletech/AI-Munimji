import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Profile | AI Munimji',
	description: 'Manage your account settings, preferences, and personal information'
};

export default function ProfilePage() {
	return (
		<div className='p-4'>
			<h1 className='mb-4 text-2xl font-semibold text-text-primary'>Profile</h1>
			{/* Add your profile content here */}
		</div>
	);
}
