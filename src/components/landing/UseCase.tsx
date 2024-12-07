import React from 'react';
import {
	Award,
	BookOpen,
	BriefcaseBusiness,
	ClipboardCheckIcon,
	Code,
	Users,
} from 'lucide-react';
import { motion } from 'framer-motion';

const UseCase = () => {
	const useCases = [
		{
			icon: BriefcaseBusiness,
			title: 'Corporate Hiring',
			description:
				'Conduct technical interviews and coding tests for potential employees, observing their problem-solving approaches in real-time.',
			color: 'bg-blue-100',
			textColor: 'text-blue-800',
		},
		{
			icon: BookOpen,
			title: 'Educational Institutions',
			description:
				'Administer exams and quizzes to students, providing a secure environment with live monitoring capabilities.',
			color: 'bg-green-100',
			textColor: 'text-green-800',
		},
		{
			icon: ClipboardCheckIcon,
			title: 'Skill Assessment',
			description:
				'Evaluate the competencies of professionals in various fields, from programming to design, with real-time task completion.',
			color: 'bg-purple-100',
			textColor: 'text-purple-800',
		},
		{
			icon: Users,
			title: 'Team Training',
			description:
				'Conduct interactive training sessions and assessments for employees, ensuring engagement and immediate feedback.',
			color: 'bg-orange-100',
			textColor: 'text-orange-800',
		},
		{
			icon: Code,
			title: 'Coding Challenges',
			description:
				'Host programming contests and hackathons, allowing participants to showcase their skills in a competitive environment.',
			color: 'bg-indigo-100',
			textColor: 'text-indigo-800',
		},
		{
			icon: Award,
			title: 'Certification Programs',
			description:
				'Offer professional certifications with secure, proctored online exams that maintain integrity and credibility.',
			color: 'bg-rose-100',
			textColor: 'text-rose-800',
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				delayChildren: 0.2,
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				ease: 'easeOut',
			},
		},
	};

	return (
		<section
			className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 sm:py-20"
			aria-labelledby="use-cases-title"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2
						id="use-cases-title"
						className="text-4xl font-extrabold text-gray-900 mb-4 animate-gradient-text"
					>
						Versatile Testing Solutions
					</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Our platform adapts to diverse testing needs across multiple sectors
					</p>
				</div>

				<motion.div
					className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
				>
					{useCases.map((useCase, index) => (
						<motion.div
							key={index}
							variants={itemVariants}
							className={`
                                group relative overflow-hidden rounded-2xl shadow-lg 
                                transform transition-all duration-300 hover:-translate-y-2
                                ${useCase.color} hover:shadow-xl
                            `}
							whileHover={{ scale: 1.05 }}
							role="article"
							aria-labelledby={`use-case-title-${index}`}
						>
							<div className="p-6 relative z-10">
								<div
									className={`
                                    flex items-center justify-center h-16 w-16 rounded-full 
                                    mb-4 transition-all duration-300 
                                    group-hover:rotate-12 group-hover:scale-110
                                    ${useCase.color} ${useCase.textColor}
                                `}
								>
									<useCase.icon className="h-8 w-8" />
								</div>
								<h3
									id={`use-case-title-${index}`}
									className="text-xl font-bold text-gray-900 mb-2"
								>
									{useCase.title}
								</h3>
								<p className="text-base text-gray-700">{useCase.description}</p>
							</div>
							<div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default UseCase;
