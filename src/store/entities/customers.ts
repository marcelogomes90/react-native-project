// eslint-disable-next-line import/named
import { createSlice, createEntityAdapter, EntityState } from '@reduxjs/toolkit';

import { fetchCustomers } from '../../services/customers';
import { Customer } from '../../types/customer';

export const customersEntitiesAdapter = createEntityAdapter();

const customersEntitiesSlice = createSlice({
	name: 'customers',
	initialState: customersEntitiesAdapter.getInitialState(),
	extraReducers: builder => {
		builder
			.addCase(fetchCustomers.fulfilled, (state, action) => {
				customersEntitiesAdapter.setMany(state, action.payload?.clients || []);
			});
	},
	reducers: {}
});

export const {
	selectAll: getCustomers,
	selectById: getCustomerById
} = customersEntitiesAdapter.getSelectors((state: { entities: { customers: EntityState<Customer, string> } }) => state.entities?.customers);

export default customersEntitiesSlice.reducer;
