import Feather from '@expo/vector-icons/Feather';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Drawer } from '../components';
import CustomersListScreen from '../screens/CurstomersList';
import HomeScreen from '../screens/Home/Home';
import ProductsListScreen from '../screens/ProductsList/ProductsList';

const Stack = createNativeStackNavigator();

const CustomHeaderLeft = () => (
	<Image
		source={require('../assets/images/logo-teddy.webp')}
		style={{ width: 70, height: 35 }}
	/>
);

const CustomHeaderRight = ({ toggleDrawer }: { toggleDrawer: () => void }) => (
	<TouchableOpacity onPress={() => toggleDrawer()}>
		<Feather color="black" name="menu" size={24} />
	</TouchableOpacity>
);

const AppNavigator = () => {
	const [isDrawerVisible, setDrawerVisible] = useState(false);

	const toggleDrawer = () => {
		setDrawerVisible(!isDrawerVisible);
	};

	return (
		<>
			<Stack.Navigator initialRouteName="Home">
				<Stack.Screen
					component={HomeScreen}
					name="Home"
					options={{
						headerTitle: '',
						headerLeft: () => <CustomHeaderLeft />,
						headerRight: () => <CustomHeaderRight toggleDrawer={toggleDrawer} />
					}}
				/>

				<Stack.Screen
					component={CustomersListScreen}
					name="CustomersList"
					options={{
						headerTitle: '',
						headerLeft: () => <CustomHeaderLeft />,
						headerRight: () => <CustomHeaderRight toggleDrawer={toggleDrawer} />
					}}
				/>

				<Stack.Screen
					component={ProductsListScreen}
					name="ProductsList"
					options={{
						headerTitle: '',
						headerLeft: () => <CustomHeaderLeft />,
						headerRight: () => <CustomHeaderRight toggleDrawer={toggleDrawer} />
					}}
				/>

			</Stack.Navigator>
			<Drawer isVisible={isDrawerVisible} toggleDrawer={toggleDrawer} />
		</>

	);};

export default AppNavigator;
