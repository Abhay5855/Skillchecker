import React, { FC } from 'react';
import { Button } from '@headlessui/react';

type BaseButtonProps = {
	children: React.ReactNode;
	type?: 'submit' | 'reset' | 'button';
	disabled?: boolean;
	onClick?: () => void;
};

const BaseButton: FC<BaseButtonProps> = ({ children, type, disabled }) => {
	return (
		<>
			<Button
				type={type}
				disabled={disabled}
				className="flex items-center cursor-pointer gap-2 px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed"
			>
				{children}
			</Button>
		</>
	);
};

export default BaseButton;
