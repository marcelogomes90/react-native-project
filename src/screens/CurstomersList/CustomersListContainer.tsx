import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CustomersList from './CustomersList';
import { getCustomersListState, limitChanged } from './CustomersList.state';

import { useBottomSheet } from '@hooks/useBottomSheet';
import { fetchCustomers } from '@services/customers';
import { AppDispatch } from '@store/store';

const CustomersListContainer = () => {
	const dispatch: AppDispatch = useDispatch();
	const { open, bottomSheetRef } = useBottomSheet();
	const { ids, refreshing, loading, page, totalPages, paginating, limit } = useSelector(getCustomersListState);

	const canPaginate = useMemo(() => page < totalPages && !paginating, [paginating, page, totalPages]);

	const onPaginate = useCallback(() => {
		if (!canPaginate) return;

		dispatch(fetchCustomers({
			action: 'paginate',
			page: page + 1,
			limit
		}));
	}, [canPaginate, dispatch, limit, page]);

	const onCreateCustomerPress =  useCallback(() => {
		open();
	}, [open]);

	const onLimitChange = useCallback((value: number | string) => {
		const newLimit = typeof value === 'string' ? parseInt(value, 10) : value;

		dispatch(limitChanged(newLimit));
	}, [dispatch]);

	const onRefresh = useCallback(() => {
		dispatch(fetchCustomers({ action: 'refresh', page: 1, limit }));
	}, [dispatch, limit]);

	useEffect(() => {
		dispatch(fetchCustomers({ action: 'fetch', page: 1, limit }));
	}, [dispatch, limit]);

	return (
		<CustomersList
			bottomSheetRef={bottomSheetRef}
			ids={ids}
			limit={limit}
			loading={loading}
			paginating={paginating}
			refreshing={refreshing}
			onCreateCustomerPress={onCreateCustomerPress}
			onLimitChange={onLimitChange}
			onPaginate={onPaginate}
			onRefresh={onRefresh}
		/>
	);
};

export default CustomersListContainer;
