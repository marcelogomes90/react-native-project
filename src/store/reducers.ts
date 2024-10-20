import { combineReducers } from 'redux';

import customersListReducer from '../screens/CurstomersList/CustomersList.state';
import loginReducer from '../screens/Login/Login.state';

import custmersReducer from './entities/customers';

export const rootReducer = combineReducers({
	login: loginReducer,
	customersList: customersListReducer,
	entities: combineReducers({
		customers: custmersReducer
	})
});

export type RootState = ReturnType<typeof rootReducer>;
