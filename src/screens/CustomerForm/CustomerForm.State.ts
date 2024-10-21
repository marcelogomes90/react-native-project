import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { createCustomer, updateCustomer } from '@services/customers';

const initialState = {
	actionLoading: false
};

const customerFormReducer = createSlice({
	name: 'customerForm',
	initialState,
	extraReducers: builder => {
	  	builder
			.addMatcher(isAnyOf(
				createCustomer.pending,
				updateCustomer.pending
			), state => {
				state.actionLoading = true;
			})
			.addMatcher(isAnyOf(
				createCustomer.fulfilled,
				createCustomer.rejected,
				updateCustomer.fulfilled,
				updateCustomer.rejected
			), state => {
				state.actionLoading = false;
			});
	},
	reducers: {}
});

export const getCustomerFormState = (state: { customerForm: any; }) => state.customerForm;

export default customerFormReducer.reducer;
