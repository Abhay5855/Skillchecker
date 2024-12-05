import { Field } from '@headlessui/react';
import React, { FC } from 'react';
import FormLabel from '../../../components/label/label';
import TextInput from '../../../components/input/Input';
import TextAreaInput from '../../../components/textarea';
import DateInput from '../../../components/date-input';
import Toggle from '../../../components/switch';
import { ArrowRight } from 'lucide-react';
import BaseButton from '../../../components/button';
import { FormDataType } from '../../../types/index';

type BasicInfoProps = {
	step: number;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handleChange: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => void;
	formData: FormDataType;
	handleToggleChange: (checked: boolean) => void;
	disabled: boolean;
	handleDateChange: (date: Date | null) => void;
};

const BasicInfo: FC<BasicInfoProps> = ({
	step,
	handleSubmit,
	handleChange,
	handleDateChange,
	formData,
	handleToggleChange,
	disabled,
}) => {
	return (
		<>
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
								<FormLabel htmlFor="live assesment">Live Assessment</FormLabel>
								<p className="text-sm text-gray-500">
									Enable real-time monitoring and evaluation
								</p>
							</Field>

							<Toggle checked={formData.isLive} onChange={handleToggleChange} />
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
		</>
	);
};

export default BasicInfo;
