import { StyleSheet } from 'react-native';

import { COLORS, SPACING } from '../../constants/theme';

interface ContainerStylesProps {
	padded?: boolean;
	scrollable?: boolean;
	bordered?: boolean;
	flex?: boolean;
}

export const createContainerStyles = ({ padded, scrollable, bordered, flex }: ContainerStylesProps) => StyleSheet.create({
	base: {
		padding: padded ? SPACING.lg : 0,
		height: scrollable ? '100%' : 'auto',
		flex: (scrollable || flex) ? 1 : undefined,
		borderRadius: bordered ? SPACING.sm : undefined,
		borderStyle:  bordered ? 'solid' : undefined,
		borderColor: bordered ? COLORS.light.high : undefined,
		borderWidth: bordered ? 1 : 0
	}
});
