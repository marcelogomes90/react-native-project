import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCustomers } from '../../services/customers';
import { AppDispatch } from '../../store/store';

import CustomersList from './CustomersList';
import { getCustomersListState } from './CustomersList.state';

const CustomersListContainer = () => {
	const dispatch: AppDispatch = useDispatch();
	const { ids } = useSelector(getCustomersListState);

	console.log(ids);

	const onCreateCustomerPress =  useCallback(async() => {
		const { payload } = await dispatch(fetchCustomers());

		console.log(payload);
	}, [dispatch]);

	useEffect(() => {
		dispatch(fetchCustomers());
	}, [dispatch]);

	return (
		<CustomersList
			ids={ids}
			onCreateCustomerPress={onCreateCustomerPress}
		/>
	);
};

export default CustomersListContainer;
