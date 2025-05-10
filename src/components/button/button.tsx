// src/components/CommonButton.tsx

import React, { MouseEventHandler, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
	type?: 'button' | 'submit' | 'reset';
	label?: string;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	isLoading?: boolean;
	disabled?: boolean;
	className?: string;
	variant?: 'primary' | 'secondary' | 'accent' | 'normal';
	size?: 'small' | 'medium' | 'large' | 'empty';
	icon?: boolean;
	border?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	type = 'button',
	onClick,
	isLoading = false,
	disabled = false,
	className = '',
	variant = 'primary',
	size = 'medium',
	icon = false,
	border = false,
	children
}) => {
	const baseStyles = 'rounded focus:outline-none transition ease-in-out duration-200';
	const variantStyles = {
		primary: 'bg-primary text-white hover:bg-primary-dark',
		secondary: 'bg-secondary text-white hover:bg-gray-700',
		accent: 'bg-accent text-white hover:bg-red-600',
		normal: `bg-gray-100 hover:bg-gray-200 ${border ? 'border border-gray-300' : ''}`
	};
	const sizeStyles = {
		empty: 'm-2',
		small: 'py-1 px-2 text-sm',
		medium: 'py-2 px-4 text-base',
		large: 'py-3 px-6 text-lg'
	};

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled || isLoading}
			className={`${size !== 'empty' ? `${baseStyles} ${variantStyles[variant]}` : ``} ${sizeStyles[size]} ${
				disabled ? 'cursor-not-allowed opacity-80' : ''
			} ${className}`}
		>
			{!icon && isLoading ? <Spinner /> : children}
		</button>
	);
};

const Spinner = () => {
	return (
		<div className='flex justify-center p-1 align-middle'>
			<div className='h-4 w-4 animate-spin rounded-full border border-solid border-white border-t-transparent'></div>
		</div>
	);
};

export default Button;
