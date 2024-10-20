import { StyleSheet } from 'react-native';

import { SPACING } from '@constants/theme';

export const createBottomSheetStyles = ({ padded }: { padded: boolean }) => StyleSheet.create({
	container: {
		padding: padded ? SPACING.lg : undefined,
		paddingTop: 0
	}
});

export const bottomSheetAlertStyles = StyleSheet.create({
	container: {
		padding: SPACING.lg
	}
});
