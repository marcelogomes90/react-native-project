import { combineReducers } from 'redux';

import loginReducer from '../screens/Login/Login.state';

export default combineReducers({
	login: loginReducer,
	entities: combineReducers({})
});
