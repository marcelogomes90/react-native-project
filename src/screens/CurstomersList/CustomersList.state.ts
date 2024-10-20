import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchCustomers } from '../../services/customers';
import { customersEntitiesAdapter } from '../../store/entities/customers';

interface CustomersListState {
    loading: boolean;
    page: number;
    totalPages: number | null;
    ids: number[];
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
			.addMatcher(isAnyOf(
				fetchCustomers.fulfilled,
				fetchCustomers.fulfilled
			), (state, action) => {
				customersEntitiesAdapter.setMany(state, action.payload.clients);
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
