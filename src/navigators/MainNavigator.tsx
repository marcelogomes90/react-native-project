import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Host } from 'react-native-portalize';

import LoginScreen from '../screens/Login';
import RedirectScreen from '../screens/Redirect';

import AppNavigator from './AppNavigator';
import { navigationRef } from './NavigatorsRef';
const Stack = createNativeStackNavigator();
const RootFullScreen = { flex: 1 };

const MainNavigator = () => (
	<NavigationContainer ref={navigationRef}>
		<GestureHandlerRootView style={RootFullScreen}>
			<BottomSheetModalProvider>
				<Host>
					<Stack.Navigator initialRouteName="Redirect">
						<Stack.Group>
							<Stack.Screen
								component={LoginScreen}
								name="Login"
								options={{ headerShown: false }}
							/>

							<Stack.Screen
								component={RedirectScreen}
								name="Redirect"
								options={{ headerShown: false }}
							/>

							<Stack.Screen
								component={AppNavigator}
								name="App"
								options={{ headerShown: false }}
							/>
						</Stack.Group>
					</Stack.Navigator>
				</Host>
			</BottomSheetModalProvider>
		</GestureHandlerRootView>
	</NavigationContainer>
);

export default MainNavigator;
