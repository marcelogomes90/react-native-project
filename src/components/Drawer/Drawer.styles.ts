import { StyleSheet } from 'react-native';

import { COLORS, SPACING } from '../../constants/theme';

export const styles = StyleSheet.create({
	overlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	drawer: {
		position: 'absolute',
		left: 0,
		top: 0,
		bottom: 0,
		paddingTop: 30,
		width: '100%', // Ocupa toda a largura
		backgroundColor: 'white',
		padding: 20,
		shadowColor: COLORS.dark.high,
		shadowOffset: { width: 0, height: -2 }, // Sombra para cima
		shadowOpacity: 0.8,
		shadowRadius: 2,
		elevation: 5,
		borderTopLeftRadius: SPACING.lg, // Bordas superiores arredondadas
		borderTopRightRadius: SPACING.lg, // Bordas superiores arredondadas
		marginTop: 200 // Margem no topo para não ocupar a tela toda verticalmente
	},
	icon: {
		marginRight: SPACING.lg
	},
	action: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: SPACING.md
	},
	actionLabel: {
		marginLeft: SPACING.sm
	}
});
