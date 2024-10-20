import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import Login from './Login';
import { usernameSaved } from './Login.state';

import { reset } from '@navigators/NavigatorsRef';

const LoginContainer = () => {
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');

	const onChangeText = useCallback((text: string) => {
		setUsername(text);
	}, []);

	const onEnterPress = useCallback(() => {
		if (!username) {
			return;
		}

		dispatch(usernameSaved(username));
		reset('App');
	}, [dispatch, username]);

	return (
		<Login
			onChangeText={onChangeText}
			onEnterPress={onEnterPress}
		/>
	);
};

export default LoginContainer;
