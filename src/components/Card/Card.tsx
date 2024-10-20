import React from 'react';
import { TouchableOpacity, View, ViewStyle } from 'react-native';

import { createCardStyles } from './Card.styles';

interface CardProps {
	children: React.ReactNode;
	bordered?: boolean;
	style?: ViewStyle | ViewStyle[];
	variant?: string;
	onPress?: () => void;
	sharpEdges?: boolean;
}

const Card: React.FC<CardProps> = ({ children, bordered, style, onPress, sharpEdges, ...props }) => {
	const cardStyles = createCardStyles({ bordered, sharpEdges });
	const Component = (onPress ? TouchableOpacity : View) as React.ElementType;

	return (
		<Component
			style={[cardStyles.base, style]}
			onPress={onPress}
			{...props}
		>
			{children}
		</Component>
	);
};

export default Card;
