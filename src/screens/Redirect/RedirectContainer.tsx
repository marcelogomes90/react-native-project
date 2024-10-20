import { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { getLoginState } from '../Login/Login.state';

import Redirect from './Redirect';

import { reset } from '@navigators/NavigatorsRef';

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
