interface Props {
	color?: string;
}

const Loader: React.FC<Props> = ({ color = 'border-primary' }) => {
	// You can add any UI inside Loader, including a Skeleton.
	return (
		<div className='flex h-full items-center justify-center align-middle'>
			<div
				className={`${color} h-8 w-8 animate-spin rounded-full border-2 border-solid border-t-transparent`}
			></div>
		</div>
	);
};
export default Loader;
