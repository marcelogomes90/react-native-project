import { StyleSheet } from 'react-native';

import { BORDER_RADIUS, COLORS, SPACING } from '../../constants/theme';

interface PickerStylesProps {
	block: boolean;
	disabled: boolean;
	compact: boolean;
	lastChild: boolean;
}

export const createPickerStyles = ({ block, disabled, compact, lastChild }: PickerStylesProps) => StyleSheet.create({
	base: {
		height: compact ? 40 : 46,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingHorizontal: SPACING.md,
		borderWidth: 1,
		borderColor: COLORS.light.high,
		color: disabled ? COLORS.dark.pure : COLORS.dark.medium,
		borderRadius: BORDER_RADIUS.md,
		backgroundColor: disabled ? COLORS.light.low : 'white'
	},
	labelContainer: {
		display: 'flex',
		flexDirection: 'row',
		gap: SPACING.xs
	},
	label: {
		marginBottom: SPACING.sm
	},
	container: {
		width: block ? '100%' : undefined,
		marginBottom: lastChild ? 0 : SPACING.lg
	},
	error: {
		marginTop: SPACING.xs
	}
});
