import React, { forwardRef, useCallback, useEffect, useState } from 'react';

import Input from '../Input';

import FormatterUtils from '@utils/formatter';

interface CurrencyInputProps {
	decimals?: number;
	onChangeText?: (value: number) => void;
	prefix?: string;
	value?: number;
	[key: string]: any;
}

const CurrencyInput = forwardRef(({ decimals = 2, onChangeText, prefix, value = 0, ...props }: CurrencyInputProps, ref) => {
	const [controlledValue, setControlledValue] = useState(value);

	useEffect(() => {
		setControlledValue(value);
	}, [value]);

	const handleValue = useCallback((eventValue: string) => {
		const valueNumber = eventValue?.replace(/(-(?!\d))|[^0-9|-]/g, '') || '';
		const formatedValue = '0'.repeat(Math.max(0, (decimals + 1) - valueNumber.length)) + valueNumber;
		const integer = formatedValue.slice(0, -decimals).replace(/\B(?=(\d{3})+(?!\d))/g, '.');
		const decimal = formatedValue.slice(-decimals);

		return `${integer},${decimal}`;
	}, [decimals]);

	const handleOnChange = useCallback((eventValue: string) => {
		const cleanValue = eventValue.replace(/[^0-9]/g, '');
		if (cleanValue) {
			const newValue = handleValue(cleanValue);
			const formattedNewValue = parseFloat(newValue.replace(/\./g, '').replace(',', '.'));

			setControlledValue(formattedNewValue);
			onChangeText && onChangeText(formattedNewValue);
		} else {
			setControlledValue(0);
			onChangeText && onChangeText(0);
		}
	}, [handleValue, onChangeText]);

	return (
		<Input
			ref={ref}
			keyboardType="numeric"
			maxLength={30}
			value={FormatterUtils.money(controlledValue, { prefix })}
			{...props}
			onChangeText={handleOnChange}
		/>
	);
});

export default CurrencyInput;

