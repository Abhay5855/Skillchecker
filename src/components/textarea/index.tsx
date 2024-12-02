import React, { FC } from 'react';
import { Textarea } from '@headlessui/react';

type TextAreaProps = {
	name: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	placeholder?: string;
	required?: boolean;
};

const TextAreaInput: FC<TextAreaProps> = ({
	name,
	value,
	onChange,
	placeholder,
	required,
}) => {
	return (
		<div>
			<Textarea
				className="w-full h-40 px-3 py-2 text-gray-700 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				required={required}
			/>
		</div>
	);
};

export default TextAreaInput;
