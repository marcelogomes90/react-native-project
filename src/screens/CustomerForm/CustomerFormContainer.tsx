import { EntityState } from '@reduxjs/toolkit';
import React, { forwardRef, useCallback, useMemo } from 'react';
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';

import CustomerForm from './CustomerForm';
import { getCustomerFormState } from './CustomerForm.State';

import { CUSTOMER_FORM_SCHEMA } from '@constants/schemas';
import useFormHandler from '@hooks/useFormHandler';
import { createCustomer, updateCustomer } from '@services/customers';
import { getCustomerById } from '@store/entities/customers';
import { AppDispatch } from '@store/store';
import { Customer } from 'src/types/customer';

interface CustomerFormContainerProps {
	id?: string;
}

export interface CustomerFormValues {
	name: string,
	salary: number,
	companyValuation: number,
	id?: string | number
}

const CustomerFormContainer = forwardRef(({ id }: CustomerFormContainerProps, ref: React.ForwardedRef<any>) => {
	const { actionLoading } = useSelector(getCustomerFormState);
	const dispatch = useDispatch<AppDispatch>();
	const isEdit = useMemo(() => !!id, [id]);

	const customer = useSelector((state: {
        entities: {
            customers: EntityState<Customer, string>;
        };
	}) => id !== undefined ? getCustomerById(state, id) : undefined) as Customer;

	const { control, handleSubmit, errors, reset } = useFormHandler({
		defaultValues: {
			name: customer?.name,
			companyValuation: customer?.companyValuation,
			salary: customer?.salary
		},
		schema: CUSTOMER_FORM_SCHEMA
	});

	const onSubmit = useCallback(async (values: CustomerFormValues) => {
		const dispatchAction = isEdit ? updateCustomer : createCustomer;

		const { payload } = await dispatch(dispatchAction({ ...values, id }));

		Toast.show({
			type: payload ? 'success' : 'error',
			text1: `Cliente ${isEdit ? (payload ? 'editado' : 'editar') : (payload ? 'cadastrado' : 'cadastrar')}!`,
			text2: `O cliente foi ${isEdit ? (payload ? 'editado' : 'editar') : (payload ? 'cadastrado' : 'cadastrar')} ${payload ? 'com sucesso. 🎉' : 'com problema. Por favor, tente novamente. ❌'}`
		});

		if (payload && ref && 'current' in ref && ref.current) {
			ref.current.dismiss();
		}
	}, [dispatch, id, isEdit, ref]);

	const onDismiss = useCallback(() => {
		if (!customer) {
			reset({
				name: '',
				companyValuation: 0,
				salary: 0
			});
		}
	}, [reset, customer]);

	return (
		<CustomerForm
			ref={ref}
			actionLoading={actionLoading}
			control={control}
			errors={errors}
			isEdit={isEdit}
			onDismiss={onDismiss}
			onSubmit={handleSubmit(onSubmit)}
		/>
	);
});

export default CustomerFormContainer;
