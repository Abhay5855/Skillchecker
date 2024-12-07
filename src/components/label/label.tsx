import { Label } from '@headlessui/react';
import React, { FC } from 'react';

type LabelProps = {
	htmlFor: string;
	children: React.ReactNode;
	required?: boolean;
};

const FormLabel: FC<LabelProps> = ({ htmlFor, children, required }) => {
	return (
		<div className="flex items-center gap-1">
			<Label
				className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300 capitalize"
				htmlFor={htmlFor}
			>
				{children}
			</Label>
			{required && <span className="text-red-500">*</span>}
		</div>
	);
};

export default FormLabel;
