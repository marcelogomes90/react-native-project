import { StyleSheet } from 'react-native';

import { BORDER_RADIUS, SPACING, COLORS, TEXT } from '../../constants/theme';

interface ButtonStylesProps {
	disabled?: boolean;
	block?: boolean;
	backgroundColor?: string;
	rounded?: boolean;
	compact?: boolean;
	outline?: boolean;
	secondary?: boolean;
}

const getBackgroundColor = ({ secondary, disabled, outline }: ButtonStylesProps) => {
	if (outline) {
		return 'transparent';
	}

	if (disabled) {
		return COLORS.primary.low;
	}

	if (secondary) {
		return COLORS.light.high;
	}

	return COLORS.primary.extraHigh;
};

const getBorderColor = ({ secondary, outline, disabled }: ButtonStylesProps) => {
	if (secondary) {
		return COLORS.primary.high;
	}

	if (outline && disabled) {
		return COLORS.primary.low;
	}

	return COLORS.primary.extraHigh;
};

export const createButtonStyles = ({
	disabled,
	block,
	backgroundColor,
	rounded,
	compact,
	outline,
	secondary
}: ButtonStylesProps) => StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: SPACING.md,
		padding: compact ? SPACING.sm : SPACING.md,
		width: block ? '100%' : undefined,
		borderWidth: outline ? 1 : 0,
		borderColor: getBorderColor({ secondary, outline, disabled }),
		borderRadius: rounded ? BORDER_RADIUS.xl : BORDER_RADIUS.md,
		backgroundColor: backgroundColor || getBackgroundColor({ secondary, disabled, outline })
	},
	text: {
		fontFamily: 'Inter',
		fontSize: compact ? TEXT.type.p : TEXT.type.h5,
		fontWeight: TEXT.weight.bold
	}
});
