import React from 'react';

const Demo = () => {
	return (
		<div>
			<section className="bg-gradient-to-br from-primary to-primary-700 py-16 sm:py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col items-center text-center">
						<h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4 animate-pulse">
							Transform Your Testing Process Today
						</h2>
						<p className="mt-4 text-xl text-gray-100 max-w-2xl">
							Join thousands of organizations that have revolutionized their
							assessment methods
						</p>
					</div>
					<div className="mt-10 flex justify-center space-x-4">
						<a
							href="#"
							className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
						>
							Start Your Free Trial
						</a>
						<a
							href="#"
							className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
						>
							Schedule a Demo
						</a>
					</div>
					<div className="mt-8 flex items-center justify-center flex-col">
						<p className="text-base text-gray-200 font-bold animate-bounce">
							No credit card required. 14-day free trial.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Demo;
