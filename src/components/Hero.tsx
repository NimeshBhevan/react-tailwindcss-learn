import { ReactTyped } from "react-typed";

const Hero = () => {
	return (
		<div className="text-white">
			<div className="flex flex-col max-w-[800px] w-full mt-[-96px] h-screen mx-auto text-center justify-center">
				<p className="text-green-400 uppercase font-bold p-2">
					growing with data analytics
				</p>
				<h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
					Grow with data
				</h1>
				<div className="flex justify-center items-center">
					<p className="md:text-5xl sm:text-4xl text-xl font-bold">
						Fast, flexible financing for
					</p>
					<ReactTyped
						className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500"
						strings={["BTB", "BTC", "SASS"]}
						typeSpeed={120}
						backSpeed={140}
						loop
					/>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-600 py-1">Monitor your dara analytics to increase revenue for BTB, BTC and SASS platforms.</p>
        <button className="bg-green-400 w-52 rounded-md font-medium my-6 mx-auto py-3 text-black">Get Started</button>
			</div>
		</div>
	);
};

export default Hero;
