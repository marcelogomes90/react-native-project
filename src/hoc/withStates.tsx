import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

type WithStatesProps = {
	loading: boolean;
	[key: string]: any;
};

const withStates = (Component: React.ComponentType<any>) => ({
	loading,
	...rest
}: WithStatesProps) => {
	if (loading) {
		return (
			<View style={[styles.container]}>
				<ActivityIndicator size="large"/>
			</View>
		);
	}

	return (
		<Component
			{...rest}
		/>
	);
};

const styles = StyleSheet.create({
	container: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row'
	}
});

export default withStates;
