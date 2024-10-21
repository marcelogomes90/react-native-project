// eslint-disable-next-line import/named
import { createSlice, createEntityAdapter, EntityState, PayloadAction, isAnyOf } from '@reduxjs/toolkit';

import { createCustomer, deleteCustomer, fetchCustomers, updateCustomer } from '@services/customers';
import { Customer } from 'src/types/customer';

export const customersEntitiesAdapter = createEntityAdapter();

const customersEntitiesSlice = createSlice({
	name: 'customers',
	initialState: customersEntitiesAdapter.getInitialState(),
	extraReducers: builder => {
		builder
			.addCase(fetchCustomers.fulfilled, (state, action: PayloadAction<{ clients: Customer[] }>) => {
				customersEntitiesAdapter.setMany(state, action.payload.clients || []);
			})
			.addCase(deleteCustomer.fulfilled, (state, action: PayloadAction<string>) => {
				customersEntitiesAdapter.removeOne(state, action.payload);
			})
			.addMatcher(isAnyOf(
				createCustomer.fulfilled,
				updateCustomer.fulfilled
			), (state, action) => {
				customersEntitiesAdapter.setOne(state, action.payload);
			});
	},
	reducers: {}
});

export const {
	selectAll: getCustomers,
	selectById: getCustomerById
} = customersEntitiesAdapter.getSelectors((state: { entities: { customers: EntityState<Customer, string> } }) => state.entities?.customers);

export default customersEntitiesSlice.reducer;
