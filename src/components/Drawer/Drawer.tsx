import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line import/named
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useRef, useEffect, useMemo, useCallback } from 'react';
import { View, TouchableWithoutFeedback, Animated, TouchableOpacity, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';

import Text from '../Text';

import { styles } from './Drawer.styles';

import { COLORS } from '@constants/theme';
import { reset } from '@navigators/NavigatorsRef';
import { usernameSaved } from '@screens/Login/Login.state';

interface CustomDrawerProps {
	isVisible: boolean;
	toggleDrawer: () => void;
}

interface MenuItemProps {
	icon: keyof typeof Feather.glyphMap;
	label: string;
	color: string;
	onPress: () => void;
	route: string;
}

const { height: windowHeight } = Dimensions.get('window');

const CustomDrawer: React.FC<CustomDrawerProps> = ({ isVisible, toggleDrawer }) => {
	const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
	const dispatch = useDispatch();
	const [selectedOption, setSelectedOption] = React.useState<string>('Home');

	const slideAnim = useRef(new Animated.Value(windowHeight)).current;

	const onLogoutPress = useCallback(() => {
		dispatch(usernameSaved(null));
		setSelectedOption('Home');
		reset('Login');
	}, [dispatch]);

	useEffect(() => {
		Animated.timing(slideAnim, {
			toValue: isVisible ? 0 : windowHeight,
			duration: 500,
			useNativeDriver: true
		}).start();
	}, [isVisible, slideAnim]);

	type RootStackParamList = {
		Home: undefined;
		CustomersList: undefined;
		ProductsList: undefined;
	};

	const handleNavigate = useCallback((route: keyof RootStackParamList) => {
		navigation.navigate(route);
		setSelectedOption(route);
		toggleDrawer();
	}, [navigation, toggleDrawer]);

	const actions = useMemo(() => ([{
		icon: 'home' as keyof typeof Feather.glyphMap,
		label: 'Home',
		color: COLORS.dark.pure,
		route: 'Home',
		onPress: () => handleNavigate('Home')
	}, {
		icon: 'user' as keyof typeof Feather.glyphMap,
		label: 'Clientes',
		color: COLORS.dark.pure,
		route: 'CustomersList',
		onPress: () => handleNavigate('CustomersList')
	}, {
		icon: 'grid' as keyof typeof Feather.glyphMap,
		label: 'Produtos',
		color: COLORS.dark.pure,
		route: 'ProductsList',
		onPress: () => handleNavigate('ProductsList')
	}, {
		icon: 'log-out' as keyof typeof Feather.glyphMap,
		label: 'Sair',
		color: COLORS.dark.pure,
		route: 'Login',
		onPress: onLogoutPress
	}]), [handleNavigate, onLogoutPress]);

	const renderAction = useCallback(({ icon, label, onPress, route }: MenuItemProps) => (
		<TouchableOpacity key={label} style={styles.action} onPress={onPress}>
			<Feather
				color={selectedOption === route ? COLORS.primary.extraHigh : COLORS.dark.pure}
				name={icon}
				size={24}
				style={styles.icon}
			/>

			<Text
				color={selectedOption === route ? COLORS.primary.extraHigh : COLORS.dark.pure}
				style={styles.actionLabel}
				type="h5"
				weight="bold"
			>
				{label}
			</Text>
		</TouchableOpacity>
	), [selectedOption]);

	return (
		<>
			{isVisible && (
				<TouchableWithoutFeedback onPress={toggleDrawer}>
					<View style={styles.overlay} />
				</TouchableWithoutFeedback>
			)}
			<Animated.View style={[styles.drawer, { transform: [{ translateY: slideAnim }] }]}>
				{actions.map(renderAction)}
			</Animated.View>
		</>
	);
};

export default CustomDrawer;
