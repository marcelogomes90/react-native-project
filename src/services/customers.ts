import { createAsyncThunk } from '@reduxjs/toolkit';

import serverClient from '@config/api';

export const fetchCustomers = createAsyncThunk('customers/fetch', async (params: { page: number; limit: number })=> {
	const { data } = await serverClient.get('/users', {
		params
	});

	return data;
});

export const createCustomer = createAsyncThunk('customers/post', async customerData => {
	const { data } = await serverClient.post('/users', customerData);

	return data;
});

// export const updateCustomer = createAsyncThunk('customers/patch', async customerData => {
// 	const { data } = await serverClient.patch(`/users/${customerData.id}`, customerData);

// 	return data;
// });

export const deleteCustomer = createAsyncThunk<string, string>('customers/delete', async id => {
	await serverClient.delete(`/users/${id}`);

	return id;
});
