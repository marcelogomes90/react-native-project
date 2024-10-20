// eslint-disable-next-line import/named
import { CommonActions, StackActions, NavigationContainerRef } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef<NavigationContainerRef<any>>();
export const routeNameRef = React.createRef<string>();

export const reset = (route: string) => {
	if (navigationRef.current) {
		navigationRef.current.reset({
			index: 0,
			routes: [{ name: route }]
		});
	}
};

export const goBackWithoutConfirmation = () => {
	if (navigationRef.current) {
		navigationRef.current.dispatch({
			...StackActions.pop(1),
			skipAsk: true
		} as any);
	}
};

export const resetWithoutConfirmation = (resetConfig: any) => {
	if (navigationRef.current) {
		navigationRef.current.dispatch({
			...CommonActions.reset(resetConfig),
			skipAsk: true
		} as any);
	}
};

export const getPreviousRoute = (navigation: NavigationContainerRef<any>): string | undefined => {
	const routes = navigation.getState()?.routes;
	const previousRoute = routes?.[routes.length - 2];

	return previousRoute?.name;
};
