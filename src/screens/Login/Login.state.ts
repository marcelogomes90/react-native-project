import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
    username: string | null;
}

const initialState: LoginState = {
	username: null
};

const LoginReducer = createSlice({
	name: 'login',
	initialState,
	reducers: {
		usernameSaved(state, action) {
			state.username = action.payload;
		}
	}
});

export const { usernameSaved } = LoginReducer.actions;

export const getLoginState = (state: { login: LoginState }) => state.login;

export default LoginReducer.reducer;
