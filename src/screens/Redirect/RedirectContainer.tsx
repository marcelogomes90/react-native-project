import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { reset } from '../../navigators/NavigatorsRef';
import { getLoginState } from '../Login/Login.state';

import Redirect from './Redirect';

const RedirectContainer = () => {
	const { username } = useSelector(getLoginState);

	const onEnterAppPress = useCallback(() =>
		username ? reset('App') : reset('Login')
	, [username]);

	return (
		<Redirect
			onEnterAppPress={onEnterAppPress}
		/>
	);
};

export default RedirectContainer;
