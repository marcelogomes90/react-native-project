// eslint-disable-next-line import/named
import { EntityState } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CustomerItem from './CustomerItem';

import { deleteCustomer } from '@services/customers';
import { getCustomerById } from '@store/entities/customers';
import { AppDispatch } from '@store/store';
import { Customer } from 'src/types/customer';

interface CustomerItemContainerProps {
	id: string;
}

const CustomerItemContainer: React.FC<CustomerItemContainerProps> = ({ id }) => {
	const dispatch: AppDispatch = useDispatch();

	const customer = useSelector((state: {
        entities: {
            customers: EntityState<Customer, string>;
        };
    }) => getCustomerById(state, id)) as Customer;

	const handleDelete = useCallback(async() => {
		await dispatch(deleteCustomer(id));
	}, [dispatch, id]);

	const onDeleteCustomerPress = useCallback(() => {
		Alert.alert(
			'Excluir cliente:',
			`Tem certeza que deseja excluir o cliente ${customer.name}?`,
			[{
				text: 'Excluir cliente',
				onPress: () => handleDelete(),
				style: 'cancel'
			}, {
				text: 'Cancelar',
				onPress: () => { }
			}],

			{ cancelable: false }
		);
	}, [customer.name, handleDelete]);

	return (
		<CustomerItem
			customer={customer}
			onDeleteCustomerPress={onDeleteCustomerPress}
		/>
	);
};

export default CustomerItemContainer;
