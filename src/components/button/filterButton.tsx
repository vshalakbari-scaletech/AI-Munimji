import { MouseEventHandler, PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
	active?: boolean | null;
	disabled?: boolean;
	tooltipId?: string;
	toolTipPlacement?: 'auto';
	toolTipMessage?: React.ReactElement | string;
}

export default function FilterButton({
	className,
	children,
	onClick,
	active,
	disabled,
	// tooltipId,
	// toolTipPlacement,
	toolTipMessage
}: ButtonProps) {
	const button = (
		<button
			type='button'
			className={`h-[32px] items-center justify-center whitespace-nowrap rounded-lg px-3 py-2 text-center text-xs font-medium ${active ? 'bg-secondary text-white' : 'bg-gray-100 text-secondary'} ${!active && !disabled && 'hover:bg-gray-200'} ${disabled ? 'cursor-not-allowed opacity-30' : ''} ${className}`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);

	return toolTipMessage ? (
		<>
			{button}
			{/* <Tooltip
				key={tooltipId}
				placement={toolTipPlacement}
				content={toolTipMessage}
				className='pointer-events-none min-w-[150px] bg-primary text-[12px]'
			>
				{button}
			</Tooltip> */}
		</>
	) : (
		button
	);
}
