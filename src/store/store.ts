import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, PERSIST } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './reducers';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	stateReconciler: autoMergeLevel2,
	blacklist: []
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: pReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [PERSIST]
			},
			immutableCheck: false
		})
});

export const persistor = persistStore(store);
