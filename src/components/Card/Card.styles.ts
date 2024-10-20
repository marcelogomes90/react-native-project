import { StyleSheet } from 'react-native';

import { COLORS, SPACING, BORDER_RADIUS } from '@constants/theme';

interface CardStylesProps {
  bordered?: boolean;
  sharpEdges?: boolean;
}

export const createCardStyles = ({ bordered, sharpEdges }: CardStylesProps) => StyleSheet.create({
	base: {
		backgroundColor: COLORS.light.pure,
		padding: SPACING.lg,
		borderRadius: sharpEdges ? 0 : BORDER_RADIUS.md,
		borderWidth: bordered ? 1 : 0,
		borderColor: COLORS.primary.medium || COLORS.light.medium
	}
});
