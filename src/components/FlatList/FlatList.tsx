import React, { forwardRef, useCallback, useMemo } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { FlatList as FlatListComponent, RefreshControl } from 'react-native-gesture-handler';

import { SPACING } from '@constants/theme';

interface FlatListProps {
	paginating: boolean;
	emptyComponent?: React.ReactElement;
	headerComponent?: React.ReactElement;
	onPaginate?: () => void;
	refreshing?: boolean;
	style?: object;
	renderItem: ({ item, index }: { item: any, index: number }) => React.ReactElement;
	columnGap: keyof typeof SPACING;
	numColumns: number;
	contentPaddingBottom?: number;
	data: any[];
	onRefresh?: () => void;
	[key: string]: any;
}

const FlatList = forwardRef<FlatListComponent, FlatListProps>(({
	paginating,
	emptyComponent,
	headerComponent,
	onPaginate,
	refreshing = false,
	style,
	renderItem,
	columnGap,
	numColumns,
	contentPaddingBottom,
	data,
	onRefresh,
	...props
}, ref) => {
	const renderLoadingPagination = useCallback(
		() => paginating ? (
			<View style={{ marginVertical: 20 }}>
				<ActivityIndicator size="small" />
			</View>
		) : null,
		[paginating]
	);

	const createRows = useCallback(() => {
		const rows = Math.floor(data.length / numColumns);
		let lastRowElements = data.length - rows * numColumns;

		while (lastRowElements !== numColumns) {
			data.push({ empty: true });
			lastRowElements += 1;
		}
		return data;
	}, [data, numColumns]);

	const customData = useMemo(() => (
		numColumns > 1 ? createRows() : data
	), [createRows, numColumns, data]);

	const customRenderItem = useCallback(({ item, index }: { item: any, index: number }) => {
		if (item.empty) {
			return <View style={{ flex: 1 }} />;
		}

		return renderItem({ item, index });
	}, [renderItem]);

	const columnStyle = useMemo(() => numColumns > 1
		&& ({
			justifyContent: 'space-between' as 'space-between',
			gap: typeof SPACING[columnGap] === 'number' ? SPACING[columnGap] : 0
		})
	,[columnGap, numColumns]);

	return (
		<FlatListComponent
			{...props}
			ref={ref}
			columnWrapperStyle={columnStyle}
			data={customData}
			keyboardDismissMode="on-drag"
			ListEmptyComponent={emptyComponent}
			ListFooterComponent={renderLoadingPagination}
			ListHeaderComponent={headerComponent}
			numColumns={numColumns}
			refreshControl={
				onRefresh && (
					<RefreshControl
						refreshing={refreshing}
						onRefresh={onRefresh}
					/>
				)
			}
			renderItem={customRenderItem}
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			style={style}
			onEndReached={onPaginate}
			onEndReachedThreshold={0.1}
		/>
	);
});

export default FlatList;
