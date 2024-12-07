import { motion } from 'framer-motion';
import { CirclePlus, ClipboardCheck, Eye, LogIn, Mail } from 'lucide-react';
import React from 'react';

const HowItWorks = () => {
	const cardVariants = {
		hidden: {
			opacity: 0,
			y: 50,
			scale: 0.9,
		},
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
		hover: {
			scale: 1.05,
			boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
			transition: {
				type: 'spring',
				stiffness: 300,
			},
		},
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	return (
		<section className="bg-white py-12 sm:py-16 lg:py-20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
				>
					<h2 className="text-3xl mb-3 font-extrabold text-gray-900 sm:text-4xl">
						How It Works
					</h2>
					<span className="mt-4 text-xl text-gray-600">
						Our platform simplifies the process of conducting and monitoring
						live tests
					</span>
				</motion.div>

				<div className="mt-16">
					<motion.div
						className="relative"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 1, delay: 0.5 }}
					>
						<div
							className="absolute inset-0 flex items-center"
							aria-hidden="true"
						>
							<div className="w-full border-t border-gray-300"></div>
						</div>
						<div className="relative flex justify-center">
							<span className="px-3 bg-white text-lg font-medium text-gray-900">
								Follow these simple steps
							</span>
						</div>
					</motion.div>

					<motion.div
						className="mt-12 max-w-lg mx-auto grid gap-8 lg:grid-cols-3 lg:max-w-none"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						{[
							{
								title: '1. Create a Test Room',
								description:
									'Set up a virtual room with test details, instructions, and customize settings according to your needs.',
								Icon: CirclePlus,
								gradient: 'from-purple-500 to-indigo-600',
							},
							{
								title: '2. Attendees Join the Room',
								description:
									'Participants enter the waiting hall and then move to the common area when the test begins.',
								Icon: LogIn,
								gradient: 'from-green-400 to-blue-500',
							},
							{
								title: '3. Live Monitoring',
								description:
									'Hosts view live screen feeds and evaluate participants in real-time as they solve problems.',
								Icon: Eye,
								gradient: 'from-red-500 to-pink-500',
							},
							{
								title: '4. Test Completion',
								description:
									'Attendees move to the sign-off hall after completing the test, ensuring a structured end to the session.',
								Icon: ClipboardCheck,
								gradient: 'from-yellow-400 to-orange-500',
							},
							{
								title: '5. Results and Feedback',
								description:
									'Participants receive their scores via email and can view detailed feedback on the platform.',
								Icon: Mail,
								gradient: 'from-teal-400 to-blue-600',
							},
						].map((step, index) => (
							<motion.div
								className="flex flex-col bg-white rounded-lg shadow-lg p-6 overflow-hidden"
								key={index}
								variants={cardVariants}
								whileHover="hover"
								whileTap={{ scale: 0.95 }}
							>
								<motion.div
									className="flex-shrink-0"
									initial={{ rotate: -180, opacity: 0 }}
									animate={{ rotate: 0, opacity: 1 }}
									transition={{
										type: 'spring',
										stiffness: 260,
										damping: 20,
										delay: index * 0.2,
									}}
								>
									<div
										className={`flex items-center justify-center h-12 w-12 bg-gradient-to-r ${step.gradient} rounded-full`}
									>
										<step.Icon className="text-white" />
									</div>
								</motion.div>
								<div className="mt-4">
									<motion.h3
										className="text-lg font-medium text-gray-900"
										initial={{ x: -20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.3 + index * 0.2 }}
									>
										{step.title}
									</motion.h3>
									<motion.p
										className="mt-2 text-base text-gray-600"
										initial={{ x: 20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										transition={{ delay: 0.4 + index * 0.2 }}
									>
										{step.description}
									</motion.p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HowItWorks;
