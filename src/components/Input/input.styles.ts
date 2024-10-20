import { StyleSheet } from 'react-native';

import { BORDER_RADIUS, SPACING, COLORS } from '../../constants/theme';

interface InputStylesProps {
	isFocused: boolean;
	editable: boolean;
	lastChild: boolean;
	compact: boolean;
}

export const createInputStyles = ({ isFocused, editable, lastChild, compact }: InputStylesProps) => StyleSheet.create({
	container: {
		width: '100%',
		marginBottom: lastChild ? 0 : SPACING.md
	},
	input: {
		display: 'flex',
		flexDirection: 'row',
		height: compact ? 40 : 46,
		borderWidth: 1,
		padding: SPACING.md,
		borderRadius: BORDER_RADIUS.md,
		borderColor: isFocused ? COLORS.primary.pure : COLORS.light.high,
		width: '100%',
		backgroundColor: editable ? 'white' : COLORS.light.low,
		color: editable ? COLORS.dark.pure : COLORS.dark.medium,
		fontFamily: 'Inter',
		paddingVertical: 0
	},
	pressable: {
		top: 0,
		position: 'absolute',
		justifyContent: 'center',
		alignItems: 'center',
		width: 46,
		height: 46,
		zIndex: 1000
	},
	pressableRight: {
		right: 0,
		borderTopRightRadius: BORDER_RADIUS.lg,
		borderBottomRightRadius: BORDER_RADIUS.lg
	},
	pressableLeft: {
		left: 0,
		borderTopLeftRadius: BORDER_RADIUS.lg,
		borderBottomLeftRadius: BORDER_RADIUS.lg
	},
	label: {
		marginBottom: SPACING.sm
	},
	labelContainer: {
		display: 'flex',
		flexDirection: 'row'
	},
	labelRequired: {
		marginLeft: SPACING.xs
	},
	error: {
		marginTop: SPACING.xs
	}
});
