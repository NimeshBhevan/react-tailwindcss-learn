const Cards = () => {
	return (
		<div className="w-full py-40 px-4 bg-white">
			<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
				<div className="w-full shadow-2xl flex flex-col rounded-lg hover:scale-105 duration-300 p-4 my-4 hover:bg-gray-100">
					<img
						className="w-20 mx-auto -mt-12"
						src="https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
						alt=""
					/>
					<h2 className="text-2xl font-bold text-center py-8">Single User</h2>
					<p className="text-center font-bold text-4xl">$149</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
						<p className="py-2 border-b mx-8">1 Granted User</p>
						<p className="py-2 border-b mx-8 mb-3">Send up to 2 GB</p>
					</div>
					<button className=" bg-green-500 text-black rounded-md font-medium w-[200px] mx-auto py-2 px-6">
						Start Trail
					</button>
				</div>

				<div className="w-full shadow-xl flex flex-col rounded-lg hover:scale-105 duration-300 p-4 my-4 bg-gray-100 hover:bg-gray-200">
					<img
						className="w-20 mx-auto -mt-12"
						src="https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
						alt=""
					/>
					<h2 className="text-2xl font-bold text-center py-8">Single User</h2>
					<p className="text-center font-bold text-4xl">$149</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
						<p className="py-2 border-b mx-8">1 Granted User</p>
						<p className="py-2 border-b mx-8 mb-3">Send up to 2 GB</p>
					</div>
					<button className=" bg-green-500 text-black rounded-md font-medium w-[200px] mx-auto py-2 px-6">
						Start Trail
					</button>
				</div>

				<div className="w-full shadow-2xl flex flex-col rounded-lg hover:scale-105 duration-300 p-4 my-4">
					<img
						className="w-20 mx-auto -mt-12"
						src="https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png"
						alt=""
					/>
					<h2 className="text-2xl font-bold text-center py-8">Single User</h2>
					<p className="text-center font-bold text-4xl">$149</p>
					<div className="text-center font-medium">
						<p className="py-2 border-b mx-8 mt-8">500GB Storage</p>
						<p className="py-2 border-b mx-8">1 Granted User</p>
						<p className="py-2 border-b mx-8 mb-3">Send up to 2 GB</p>
					</div>
					<button className=" bg-green-500 text-black rounded-md font-medium w-[200px] mx-auto py-2 px-6">
						Start Trail
					</button>
        </div>
        
			</div>
		</div>
	);
};

export default Cards;
