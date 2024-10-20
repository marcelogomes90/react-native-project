import React from 'react';
import { View, TouchableOpacity, ViewStyle } from 'react-native';

import { createFlexStyles } from './Flex.styles';

interface FlexProps {
	children: React.ReactNode;
	disabled?: boolean;
	style?: ViewStyle | ViewStyle[];
	flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
	onPress?: () => void;
	align?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
	gap?: number;
	justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
}

const Flex: React.FC<FlexProps> = ({
	children,
	disabled,
	style,
	flexWrap = 'nowrap',
	onPress,
	align = 'flex-start',
	gap = 2,
	justify = 'flex-start',
	direction = 'column'
}) => {
	const Component = (onPress ? TouchableOpacity : View) as React.ElementType;
	const flexStyles = createFlexStyles({
		flexWrap,
		align,
		justify,
		gap,
		direction
	});

	return (
		<Component
			disabled={disabled}
			style={[flexStyles, style]}
			onPress={onPress}
		>
			{children}
		</Component>
	);
};

export default Flex;
