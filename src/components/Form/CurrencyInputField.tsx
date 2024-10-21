import React, { useCallback } from 'react';
import { useController } from 'react-hook-form';

import CurrencyInput from '../CurrencyInput';

interface CurrencyInputFieldProps {
	name: string;
	control: any;
	onChangeText?: (text: string | number) => void;
	[key: string]: any;
}

const CurrencyInputField: React.FC<CurrencyInputFieldProps> = ({ name, control, onChangeText, ...props }) => {
	const { field } = useController({
		name,
		control,
		defaultValue: null
	});

	const onChange = useCallback((text: string | number) => {
		field.onChange(text || null);
		onChangeText && onChangeText(text);
	}, [field, onChangeText]);

	return (
		<CurrencyInput
			value={field.value}
			onChangeText={onChange}
			{...props}
		/>
	);
};

export default CurrencyInputField;
