import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
	return (
		<main className="bg-gradient-to-br from-gray-50 to-gray-100">
			<div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
				<div className="text-center">
					<h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl space-y-3">
						<div className="block animate-bounce">Conduct &amp; Monitor</div>
						<div className="block text-primary-600 animate-pulse">
							Live Tests Online
						</div>
					</h1>
					<p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
						A unified portal for creating, conducting, and monitoring live tests
						and quizzes. Capture real-time problem-solving approaches and
						provide instant feedback.
					</p>
					<div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 space-x-4">
						<Link
							to="/signup"
							className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg md:py-4 md:text-lg md:px-10"
						>
							Get started
						</Link>
						<Link
							to="/about"
							className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md md:py-4 md:text-lg md:px-10"
						>
							About Us
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Hero;
