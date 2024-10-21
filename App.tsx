import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import MainNavigator from './src/navigators/MainNavigator';
import { persistor, store } from './src/store/store';

const App = () => (
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<SafeAreaProvider>
				<StatusBar style="auto" />
				<MainNavigator />
			</SafeAreaProvider>
		</PersistGate>
		<Toast />
	</Provider>
);

export default App;
