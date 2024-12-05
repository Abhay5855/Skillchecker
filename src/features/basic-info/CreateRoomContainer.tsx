import React, { useState, useMemo } from 'react';
import BasicInfo from './basic-info';
import QuestionForm from '../create-question/QuestionForm';
import { FormDataType } from '../../types/index';

const CreateRoomContainer = () => {
	const [step, setStep] = useState<number>(2);
	const [formData, setFormData] = useState<FormDataType>({
		assesment_title: '',
		assesment_description: '',
		start_date: null,
		startTime: '',
		maxParticipants: 0,
		duration: 15,
		isLive: false,
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleDateChange = (date: Date | null) => {
		setFormData((prev) => ({
			...prev,
			start_date: date,
		}));
	};

	const handleToggleChange = (checked: boolean) => {
		setFormData((prev) => ({
			...prev,
			isLive: checked,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log(formData);
		setStep(2);
	};

	const disabled = useMemo(
		() =>
			formData.assesment_title === '' ||
			formData.assesment_description === '' ||
			formData.start_date === null ||
			formData.maxParticipants === 0,
		[formData]
	);
	return (
		<>
			<div className="max-w-4xl pt-8 mx-auto">
				<div className="bg-white border rounded-xl shadow-xl">
					<div className="border-b border-gray-200">
						<div className="flex items-center justify-between px-8 py-4">
							<div
								className={`flex items-center gap-2 ${step >= 1 ? 'text-indigo-600' : 'text-gray-400'}`}
							>
								<div
									className={`w-8 h-8 rounded-full flex items-center justify-center ${
										step >= 1 ? 'bg-indigo-100' : 'bg-gray-100'
									}`}
								>
									1
								</div>
								<span className="font-medium">Basic Info</span>
							</div>
							<div
								className={`flex items-center gap-2 ${step >= 2 ? 'text-indigo-600' : 'text-gray-400'}`}
							>
								<div
									className={`w-8 h-8 rounded-full flex items-center justify-center ${
										step >= 2 ? 'bg-indigo-100' : 'bg-gray-100'
									}`}
								>
									2
								</div>
								<span className="font-medium">Questions</span>
							</div>
						</div>
					</div>
					<div className="p-8">
						{step === 1 && (
							<BasicInfo
								handleSubmit={handleSubmit}
								disabled={disabled}
								step={step}
								formData={formData}
								handleDateChange={handleDateChange}
								handleToggleChange={handleToggleChange}
								handleChange={handleChange}
							/>
						)}
						{step === 2 && (
							<div>
								<QuestionForm />
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default CreateRoomContainer;
