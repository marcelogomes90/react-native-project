import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

import { deleteCustomer, fetchCustomers } from '@services/customers';
import { customersEntitiesAdapter } from '@store/entities/customers';
import { Customer } from 'src/types/customer';

interface CustomersListState {
    loading: boolean;
    page: number;
    totalPages: number | null;
    ids: string[];
}

const initialState = customersEntitiesAdapter.getInitialState({
	loading: false,
	page: 1,
	totalPages: null
});

const customersListReducer = createSlice({
	name: 'customersList',
	initialState,
	extraReducers: builder => {
	  builder
			.addCase(fetchCustomers.pending, state => {
				state.loading = true;
			})
			.addCase(deleteCustomer.fulfilled, (state, action: PayloadAction<string>) => {
				customersEntitiesAdapter.removeOne(state, action.payload);
			})
			.addMatcher(isAnyOf(
				fetchCustomers.fulfilled,
				fetchCustomers.rejected
			), (state, action) => {
				customersEntitiesAdapter.setMany(state, (action.payload as { clients: Customer[] }).clients);
				state.loading = false;
			});
	},
	reducers: {
		resetState: () => initialState
	}
});

export const { resetState } = customersListReducer.actions;

export const getCustomersListState = (state: { customersList: CustomersListState }) => state.customersList;

export default customersListReducer.reducer;
