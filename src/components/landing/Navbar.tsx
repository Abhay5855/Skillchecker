import React from 'react';
import { Brain } from 'lucide-react';
import { Link } from 'react-router-dom';

export const NavbarLinks = [
	{
		id: 1,
		link: '/features',
		title: 'features',
	},
	{
		id: 2,
		link: '/pricing',
		title: 'pricing',
	},
	{
		id: 3,
		link: '/contact',
		title: 'contact',
	},
];

export default function Navbar() {
	const renderLinks = () => {
		return NavbarLinks.map((item) => (
			<Link
				key={item?.id}
				to={item?.link}
				className="text-gray-700 font-semibold hover:text-primary transition-colors capitalize hover:scale-105 inline-block"
			>
				{item?.title}
			</Link>
		));
	};

	return (
		<>
			<nav className="bg-white shadow-md sticky top-0 z-50">
				<div className="container mx-auto px-2">
					<div className="flex justify-between items-center h-16">
						<Link
							to="/"
							className="flex items-center space-x-2 transform transition-transform hover:scale-105"
						>
							<Brain className="h-8 w-8 text-primary animate-spin-slow" />
							<span className="text-lg sm:text-xl font-bold text-primary hidden sm:block">
								SkillScope
							</span>
						</Link>
						<div className="flex items-center space-x-4">
							{renderLinks()}
							<Link
								to="/signin"
								className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-btnHover transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
							>
								Sign in
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
