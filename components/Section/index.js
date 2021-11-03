import Header from '../Svg/Header';
const Section = (props) => {
	return (
		<div
			id={props.id}
			className='flex items-center min-h-[70vh] justify-center w-full'>
			<div
				style={{
					backgroundImage:
						'url(https://res.cloudinary.com/makingthings/image/upload/c_scale,f_auto,q_56,w_200/v1635923936/wedding/Snow_White.png)',
				}}
				className='container px-4 py-16 bg-no-repeat sm:px-0 '>
				<h2 className='w-3/4 mb-16 text-gray-600 uppercase sm:w-1/2'>
					<Header guest={props.title} />
				</h2>
				<div className='prose-sm sm:prose-lg font-lora max-w-[50ch]'>
					{props.children}
				</div>
			</div>
		</div>
	);
};

export default Section;
