//@ts-nocheck
import Feather from '@expo/vector-icons/Feather';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Platform, TouchableOpacity, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

import { COLORS } from '../../constants/theme';
import Text from '../Text';

import { createPickerStyles } from './Picker.styles';

interface PickerProps {
    block?: boolean;
    label?: string;
    value?: string | number;
    disabled?: boolean;
    placeholder?: string;
    required?: boolean;
    error?: string;
    compact?: boolean;
    data: { label: string; value: string | number }[];
    lastChild?: boolean;
    onChange?: (value: string | number) => void;
    style?: object;
}

const Picker: React.FC<PickerProps> = ({
	block = false,
	label,
	value,
	disabled = false,
	placeholder,
	required,
	error,
	compact = false,
	data,
	lastChild = false,
	onChange,
	style
}) => {
	const pickerRef = useRef(null);
	const [selectedItemLabel, setSelectedItemLabel] = useState<string | null>(null);
	const pickerStyles = createPickerStyles({ disabled, block, compact, lastChild });
	const isAndroid = useMemo(() => Platform.OS === 'android', []);

	const options = useMemo(() => data, [data]);

	const onInputPress = useCallback(() => {
		if (isAndroid) {
			pickerRef.current?.focus();
		} else {
			pickerRef.current?.togglePicker(true);
		}
	}, [isAndroid]);

	const handleValueChange = useCallback((selectedValue: string | number, index: number) => {
		setSelectedItemLabel(options[index]?.label ?? null);
		onChange && onChange(selectedValue);
	}, [options, onChange]);

	useEffect(() => {
		if (value && !selectedItemLabel) {
			const selectedItem = options.find(item => item.value === value);
			setSelectedItemLabel(selectedItem?.label ?? null);
		}
	}, [value, options, selectedItemLabel]);

	return (
		<View style={[pickerStyles.container, style]}>
			<View style={pickerStyles.labelContainer}>
				{!!label && <Text style={pickerStyles.label}>{label}</Text>}
				{required && <Text color="danger">*</Text>}
			</View>

			<TouchableOpacity
				disabled={disabled}
				style={pickerStyles.base}
				onPress={onInputPress}
			>
				<Text numberOfLines={1}>
					{selectedItemLabel || placeholder}
				</Text>

				<Feather color={COLORS.dark.pure} name="chevron-down" size={20} />
			</TouchableOpacity>

			{error && <Text color="danger" style={pickerStyles.error}>{error}</Text>}

			<RNPickerSelect
				ref={isAndroid ? null : pickerRef}
				items={options}
				pickerProps={{ ref: isAndroid ? pickerRef : null }}
				placeholder={{}}
				textInputProps={{ style: { display: 'none' } }}
				useNativeAndroidPickerStyle={false}
				value={value}
				onValueChange={handleValueChange}
			/>
		</View>
	);
};

export default Picker;
