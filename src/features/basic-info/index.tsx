import { Field } from '@headlessui/react';
import React, { useState, useMemo } from 'react';
import FormLabel from '../../components/label/label';
import TextInput from '../../components/input/Input';
import TextAreaInput from '../../components/textarea';
import DateInput from '../../components/date-input';
import Toggle from '../../components/switch';
import { ArrowRight } from 'lucide-react';
import BaseButton from '../../components/button';

type FormDataType = {
	assesment_title: string;
	assesment_description: string;
	start_date: Date | null;
	startTime: string;
	maxParticipants: number;
	duration: number;
	isLive: boolean;
};

const BasicInfo = () => {
	const [step, setStep] = useState<number>(1);
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
		<div className="max-w-3xl pt-8 mx-auto">
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
						<form className="space-y-6" onSubmit={handleSubmit}>
							<Field>
								<FormLabel htmlFor="assesment title" required>
									Assesment Title
								</FormLabel>
								<TextInput
									onChange={handleChange}
									name="assesment_title"
									value={formData.assesment_title}
									placeholder="e.g., Frontend Developer Assessment"
									type="text"
									required
								/>
							</Field>
							<Field>
								<FormLabel required htmlFor="assesment description">
									Assesment Description
								</FormLabel>
								<TextAreaInput
									onChange={handleChange}
									name="assesment_description"
									value={formData.assesment_description}
									placeholder="Enter your assesment description"
									required
								/>
							</Field>
							<section className="flex items-center justify-between">
								<Field>
									<FormLabel required htmlFor="date">
										Date
									</FormLabel>
									<DateInput
										id="date"
										startDate={formData.start_date}
										handleDateChange={handleDateChange}
									/>
								</Field>
								<Field>
									<FormLabel required htmlFor="time">
										Time
									</FormLabel>
									<TextInput
										type="time"
										onChange={handleChange}
										name="startTime"
										value={formData.startTime}
										required
									/>
								</Field>
							</section>
							<Field>
								<FormLabel htmlFor="maxParticipants">
									Maximum Participants
								</FormLabel>
								<div className="relative">
									<TextInput
										type="number"
										value={formData.maxParticipants}
										onChange={handleChange}
										min="1"
										max="5"
										required
										name="maxParticipants"
									/>
								</div>
							</Field>
							<Field>
								<FormLabel htmlFor="duration">Duration (minutes)</FormLabel>
								<div className="relative">
									<TextInput
										type="number"
										value={formData.duration}
										onChange={handleChange}
										min="15"
										required
										name="duration"
									/>
								</div>
							</Field>
							<div className="space-y-4">
								<section className="flex items-center justify-between">
									<Field>
										<FormLabel htmlFor="live assesment">
											Live Assessment
										</FormLabel>
										<p className="text-sm text-gray-500">
											Enable real-time monitoring and evaluation
										</p>
									</Field>

									<Toggle
										checked={formData.isLive}
										onChange={handleToggleChange}
									/>
								</section>
							</div>
							<section className="flex justify-end">
								<BaseButton disabled={disabled} type="submit">
									Next
									<ArrowRight className="h-4 w-4" />
								</BaseButton>
							</section>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

export default BasicInfo;
