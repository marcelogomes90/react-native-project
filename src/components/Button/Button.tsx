import React, { useMemo } from 'react';
import { TouchableOpacity, ActivityIndicator, TextStyle } from 'react-native';

import Text from '../Text';

import { createButtonStyles } from './Button.styles';

interface ButtonProps {
	disabled?: boolean;
	children?: React.ReactNode;
	loading?: boolean;
	style?: TextStyle;
	block?: boolean;
	onPress?: () => void;
	rounded?: boolean;
	backgroundColor?: string;
	outline?: boolean;
	secondary?: boolean;
	compact?: boolean;
}

const Button = ({
	disabled = false,
	children,
	loading = false,
	style,
	block = false,
	onPress,
	rounded = false,
	backgroundColor,
	outline = false,
	secondary = false,
	compact = false
}: ButtonProps) => {
	const buttonStyles = useMemo(() => createButtonStyles({
		disabled: disabled,
		block,
		backgroundColor,
		rounded,
		compact,
		outline,
		secondary
	}), [disabled, block, backgroundColor, rounded, compact, outline, secondary]);

	const textColor = outline ? buttonStyles.container.borderColor : 'white';

	return (
		<TouchableOpacity
			disabled={disabled || loading}
			style={[style, buttonStyles.container]}
			onPress={onPress}
		>
			{loading
				? <ActivityIndicator color="white" size="small" />
				: (
					<>
						{children && (
							<Text
								color={textColor}
								style={buttonStyles.text}
								textAlign="center"
								type="h5"
							>
								{children}
							</Text>
						)}
					</>
				)}
		</TouchableOpacity>
	);};

export default Button;
