import React, { FC } from 'react';
import { Switch } from '@headlessui/react';

type ToggleProps = {
	checked: boolean;
	onChange: (checked: boolean) => void;
};

const Toggle: FC<ToggleProps> = ({ checked, onChange }) => {
	return (
		<>
			<Switch
				checked={checked}
				onChange={onChange}
				className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
					checked ? 'bg-indigo-600' : 'bg-gray-200'
				}`}
			>
				<span
					aria-hidden="true"
					className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
						checked ? 'translate-x-5' : 'translate-x-0'
					}`}
				/>
			</Switch>
		</>
	);
};

export default Toggle;