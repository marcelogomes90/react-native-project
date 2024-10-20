import React from 'react';
import { View, ScrollView, RefreshControl, ViewStyle } from 'react-native';

import { createContainerStyles } from './Container.styles';

interface ContainerProps<T extends boolean>{
	children: React.ReactNode;
	padded?: boolean;
	flex?: boolean;
	scrollable?: T;
	bordered?: boolean;
	style?: ViewStyle;
	refreshing?: boolean;
	onRefresh?: () => void;
}

const Container = <T extends boolean>({
	children,
	padded,
	flex,
	scrollable,
	bordered ,
	style,
	refreshing = false,
	onRefresh,
	...props
}: ContainerProps<T> & (React.ComponentProps<T extends true ? typeof ScrollView : typeof View>)) => {
	const Component = scrollable || onRefresh ? ScrollView : View;
	const containerStyles = createContainerStyles({ padded, scrollable, bordered, flex });

	return (
		<Component
			refreshControl={onRefresh && (
				<RefreshControl
					refreshing={refreshing}
					onRefresh={onRefresh}
				/>
			)}
			showsVerticalScrollIndicator={false}
			style={[containerStyles.base, style]}
			{...props}
		>
			{children}
		</Component>
	);
};

export default Container;
