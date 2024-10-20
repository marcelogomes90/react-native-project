import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CustomersList from './CustomersList';
import { getCustomersListState } from './CustomersList.state';

import { fetchCustomers } from '@services/customers';
import { AppDispatch } from '@store/store';

const CustomersListContainer = () => {
	const dispatch: AppDispatch = useDispatch();
	const { ids } = useSelector(getCustomersListState);

	const onCreateCustomerPress =  useCallback(async() => {
		const { payload } = await dispatch(fetchCustomers({ page: 1, limit: 10 }));

		console.log(payload);
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchCustomers({ page: 1, limit: 10 }));
	}, [dispatch]);

	return (
		<CustomersList
			ids={ids}
			onCreateCustomerPress={onCreateCustomerPress}
		/>
	);
};

export default CustomersListContainer;
