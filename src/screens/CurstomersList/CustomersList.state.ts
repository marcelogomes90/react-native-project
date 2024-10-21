import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';

import { createCustomer, deleteCustomer, fetchCustomers, updateCustomer } from '@services/customers';
import { customersEntitiesAdapter } from '@store/entities/customers';
import { getLoadingAction } from '@utils/states';
import { Customer } from 'src/types/customer';

interface CustomersListState {
    loading: boolean;
    page: number;
    totalPages: number;
    ids: string[];
	refreshing: boolean;
	paginating: boolean;
	limit: number;
	selectedCustomers: string[];
}

interface MetaArg {
	action: 'fetch' | 'refresh' | 'paginate';
	page: number;
	limit: number;
}

interface CustomPayloadAction extends PayloadAction<any, string, { arg: MetaArg; requestId: string; requestStatus: string }> {
	requestId: string;
	requestStatus: string;
}

const initialState = customersEntitiesAdapter.getInitialState({
	loading: false,
	page: 1,
	totalPages: 1,
	refreshing: false,
	paginating: false,
	limit: 5,
	selectedCustomers: [] as string[]
});

const customersListReducer = createSlice({
	name: 'customersList',
	initialState,
	extraReducers: builder => {
	  	builder
			.addCase(fetchCustomers.pending, (state, action) => {
				const loadingByAction = getLoadingAction(action as CustomPayloadAction);

				(state[loadingByAction as keyof CustomersListState] as boolean) = true;
			})
			.addCase(deleteCustomer.fulfilled, (state, action: PayloadAction<string>) => {
				customersEntitiesAdapter.removeOne(state, action.payload);
			})
			.addMatcher(isAnyOf(
				createCustomer.fulfilled,
				updateCustomer.fulfilled
			), (state, action) => {
				customersEntitiesAdapter.setOne(state, action.payload);
			})
			.addMatcher(isAnyOf(
				fetchCustomers.fulfilled,
				fetchCustomers.rejected
			), (state, action) => {
				const loadingByAction = getLoadingAction(action as CustomPayloadAction);

				if (loadingByAction === 'paginating') {
					customersEntitiesAdapter.addMany(state, (action.payload as { clients: Customer[] }).clients);
				} else {
					customersEntitiesAdapter.setAll(state, (action.payload as { clients: Customer[] }).clients);
				}

				state.page = action.payload.currentPage;
				state.totalPages = action.payload.totalPages;

				(state[loadingByAction as keyof CustomersListState] as boolean) = false;
			});
	},
	reducers: {
		resetState: () => initialState,
		limitChanged: (state, action: PayloadAction<number>) => {
			state.limit = action.payload;
		},
		customerSelected: (state, action: PayloadAction<string>) => {
			if (state.selectedCustomers.includes(action.payload)) {
				state.selectedCustomers = state.selectedCustomers.filter(id => id !== action.payload);
			} else {
				state.selectedCustomers = [...state.selectedCustomers, action.payload];
			}
		},
		resetSelectedsCustomers: state => {
			state.selectedCustomers = [];
		}
	}
});

export const { resetState, limitChanged, customerSelected, resetSelectedsCustomers } = customersListReducer.actions;

export const getCustomersListState = (state: { customersList: CustomersListState }) => state.customersList;

export default customersListReducer.reducer;
