import React from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';

import { TEXT } from '../../constants/theme';

import { createTextStyles } from './Text.styles';

interface TextComponentProps extends TextProps {
	children: React.ReactNode;
	type?: keyof typeof TEXT.type;
	weight?: keyof typeof TEXT.weight;
	color?: string;
	capitalize?: boolean;
	textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
	shrink?: boolean;
	style?: TextStyle | TextStyle[];
	italic?: boolean;
}

const Text = ({
	children,
	type,
	color,
	weight,
	capitalize,
	textAlign = 'left',
	shrink,
	style,
	italic,
	...props
}: TextComponentProps) => {
	const textStyles = createTextStyles({
		type,
		color,
		weight,
		capitalize,
		textAlign,
		shrink,
		italic
	});

	return (
		<RNText
			allowFontScaling={false}
			style={[textStyles, style]}
			{...props}
		>
			{children}
		</RNText>
	)
	;
};

export default Text;
