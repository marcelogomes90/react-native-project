import React, { useCallback } from 'react';
import { useController } from 'react-hook-form';
import { Control } from 'react-hook-form';

import Input from '../Input';

interface InputFieldProps {
    name: string;
    control: Control;
    onChangeText?: (text: string) => void;
    [key: string]: any
};

const InputField: React.FC<InputFieldProps> = ({ name, control, onChangeText, ...props }) => {
	const { field } = useController({
		name,
		control,
		defaultValue: null
	});

	const onChange = useCallback((text: string) => {
		field.onChange(text || null);
		onChangeText && onChangeText(text);
	}, [field, onChangeText]);

	return (
		<Input
			value={field.value}
			onChangeText={onChange}
			{...props}
		/>
	);
};

export default InputField;
