import { useCallback, useMemo, useState } from 'react';
import { TextInput, View, ViewStyle } from 'react-native';

import { COLORS } from '../../constants/theme';
import Text from '../Text';

import { createInputStyles } from './input.styles';

interface InputProps {
	value?: string;
	label?: string;
	style?: ViewStyle;
	onFocus?: () => void;
	error?: string;
	compact?: boolean;
	required?: boolean;
	placeholder?: string;
	lastChild?: boolean;
	onChangeText?: (text: string) => void;
	editable?: boolean;
	[key: string]: any;
}

const Input: React.FC<InputProps> = ({
	value,
	label,
	style,
	onFocus,
	error,
	compact = false,
	required,
	placeholder,
	onChangeText,
	lastChild = false,
	editable = true,
	...rest
}) => {
	const [isFocused, setFocus] = useState(false);
	const inputStyles = useMemo(() => createInputStyles({
		editable,
		isFocused,
		compact,
		lastChild
	}), [editable, isFocused, compact, lastChild]);

	const onInputFocus = useCallback(() => {
		setFocus(true);
		onFocus?.();
	}, [setFocus, onFocus]);

	return (
		<View style={[style, inputStyles.container]}>
			<View style={inputStyles.labelContainer}>
				<Text style={inputStyles.label}>{label}</Text>
				{required && <Text color="danger" style={inputStyles.labelRequired}>*</Text>}
			</View>

			<View>
				<TextInput
					editable={editable}
					placeholder={placeholder}
					placeholderTextColor={COLORS.light.medium}
					style={inputStyles.input}
					value={value && value}
					onBlur={() => setFocus(false)}
					onChangeText={onChangeText}
					onFocus={onInputFocus}
					{...rest}
				/>
			</View>

			{error && <Text color="danger" style={inputStyles.error}>{error}</Text>}
		</View>
	);};

export default Input;
