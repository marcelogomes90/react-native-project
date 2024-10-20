import { StyleSheet } from 'react-native';

import { SPACING } from '@constants/theme';

export const redirectStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: SPACING.lg
	},
	logo: {
		marginTop: 'auto'
	},
	button: {
		marginBottom: SPACING.lg,
		marginTop: 'auto'
	}
});
