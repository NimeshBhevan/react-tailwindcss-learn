import {
	FaInstagram,
	FaGithubSquare,
	FaTwitterSquare,
	FaFacebookSquare,
} from "react-icons/fa";
const Footer = () => {
	return (
		<div className="max-w-7xl mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
			<div>
				<h1 className="w-full text-3xl font-bold text-green-500">REACT.</h1>
				<p className="py-4">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure harum
					at asperiores amet, sunt consequatur assumenda eveniet perferendis
					error itaque earum optio nobis eius ab eaque unde quis natus velit.
				</p>
				<div className="flex justify-between md:w-[75%] my-6">
					<FaFacebookSquare size={30} className="cursor-pointer"/>
					<FaInstagram size={30} className="cursor-pointer"/>
					<FaTwitterSquare size={30} className="cursor-pointer"/>
					<FaGithubSquare size={30} className="cursor-pointer"/>
				</div>
			</div>
			<div className="lg:col-span-2 flex justify-around mt-8">
				<div>
					<h6 className="font-medium text-gray-400">Solutions</h6>
					<ul>
						<li className="py-2 text-sm">Analytics</li>
						<li className="py-2 text-sm">Marketing</li>
						<li className="py-2 text-sm">Commerce</li>
						<li className="py-2 text-sm">Insights</li>
					</ul>
				</div>

				<div>
					<h6 className="font-medium text-gray-400">Support</h6>
					<ul>
						<li className="py-2 text-sm">Analytics</li>
						<li className="py-2 text-sm">Marketing</li>
						<li className="py-2 text-sm">Commerce</li>
						<li className="py-2 text-sm">Indights</li>
					</ul>
				</div>

				<div>
					<h6 className="font-medium text-gray-400">Company</h6>
					<ul>
						<li className="py-2 text-sm">About</li>
						<li className="py-2 text-sm">Blog</li>
						<li className="py-2 text-sm">Jobs</li>
						<li className="py-2 text-sm">Press</li>
					</ul>
				</div>

				<div>
					<h6 className="font-medium text-gray-400">Legal</h6>
					<ul>
						<li className="py-2 text-sm">Claims</li>
						<li className="py-2 text-sm">Policy</li>
						<li className="py-2 text-sm">Terms</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
