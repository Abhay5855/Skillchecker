import React, { FC } from 'react';
import DatePicker from 'react-datepicker';
import { Calendar } from 'lucide-react';

type DateInputProps = {
	startDate: Date | null;
	handleDateChange: (date: Date | null) => void;
	id?: string;
};

const DateInput: FC<DateInputProps> = ({ startDate, handleDateChange, id }) => {
	return (
		<div className="relative">
			<DatePicker
				className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
				selected={startDate}
				onChange={(date: Date | null) => handleDateChange(date)}
				id={id}
			/>
			<Calendar className="absolute right-2 top-3 bottom-0 h-4 w-4 cursor-pointer" />
		</div>
	);
};

export default DateInput;
