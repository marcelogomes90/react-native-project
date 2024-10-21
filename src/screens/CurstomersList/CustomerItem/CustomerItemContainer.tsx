// eslint-disable-next-line import/named
import { EntityState } from '@reduxjs/toolkit';
import { useCallback } from 'react';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';

import CustomerItem from './CustomerItem';

import { useBottomSheet } from '@hooks/useBottomSheet';
import { deleteCustomer } from '@services/customers';
import { getCustomerById } from '@store/entities/customers';
import { AppDispatch } from '@store/store';
import { Customer } from 'src/types/customer';

interface CustomerItemContainerProps {
	id: string;
}

const CustomerItemContainer: React.FC<CustomerItemContainerProps> = ({ id }) => {
	const dispatch: AppDispatch = useDispatch();
	const { open, bottomSheetRef } = useBottomSheet();

	const customer = useSelector((state: {
        entities: {
            customers: EntityState<Customer, string>;
        };
    }) => getCustomerById(state, id)) as Customer;

	const handleDelete = useCallback(async() => {
		const { payload } = await dispatch(deleteCustomer(id));

		Toast.show({
			type: payload ? 'success' : 'error',
			text1: payload ? 'Cliente deletado!' : 'Erro ao deletar',
			text2: payload
				? 'O cliente foi removido com sucesso. ✅'
				: 'Ocorreu um problema ao tentar deletar o cliente. Por favor, tente novamente. ❌'
		});
	}, [dispatch, id]);

	const onDeleteCustomerPress = useCallback(() => {
		Alert.alert(
			'Excluir cliente:',
			`Tem certeza que deseja excluir o cliente ${customer?.name}?`,
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
	}, [customer?.name, handleDelete]);

	const onEditCustomerPress = useCallback(() => {
		open();
	}, [open]);

	return (
		<CustomerItem
			bottomSheetRef={bottomSheetRef}
			customer={customer}
			id={id}
			onDeleteCustomerPress={onDeleteCustomerPress}
			onEditCustomerPress={onEditCustomerPress}
		/>
	);
};

export default CustomerItemContainer;
