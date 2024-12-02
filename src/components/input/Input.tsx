import { Input } from '@headlessui/react';
import React, { FC } from 'react';

type InputProps = {
	type:
		| 'text'
		| 'password'
		| 'email'
		| 'number'
		| 'search'
		| 'tel'
		| 'url'
		| 'time';
	placeholder?: string;
	name: string;
	value: string | number;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	required?: boolean;
	disabled?: boolean;
	min?: string | number;
	max?: string | number;
};

const TextInput: FC<InputProps> = ({
	type,
	placeholder,
	name,
	value,
	onChange,
	required,
	disabled,
	min,
	max,
}) => {
	return (
		<>
			<Input
				className="block w-full px-4 py-3 text-sm text-gray-900 border border-gray-400 rounded focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder={placeholder}
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				required={required}
				disabled={disabled}
				min={min}
				max={max}
			/>
		</>
	);
};

export default TextInput;
