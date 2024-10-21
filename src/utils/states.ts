import { PayloadAction } from '@reduxjs/toolkit';

interface ExtendedPayloadAction extends PayloadAction<any> {
	meta: {
		arg?: {
			action: 'fetch' | 'refresh' | 'paginate';
		};
	},
	requestId: string;
	requestStatus: string;
}

export const getLoadingAction = (action: ExtendedPayloadAction) => {
	const actionType = action.meta?.arg?.action;
	return {
		fetch: 'loading',
		refresh: 'refreshing',
		paginate: 'paginating'
	}[actionType ?? 'fetch'] || 'loading';
};
