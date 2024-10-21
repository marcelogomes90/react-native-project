import { MutableRefObject, useCallback } from 'react';

import CustomerItemContainer from './CustomerItem';

import { Button, Container, EmptyState, Text, FlatList, Picker, Flex } from '@components/index';
import { SPACING } from '@constants/theme';
import withStates from '@hoc/withStates';
import CustomerFormContainer from '@screens/CustomerForm';

const FlatListWithStates = withStates(FlatList);

interface CustomersListProps {
	onCreateCustomerPress: () => void;
	ids: string[];
	loading: boolean;
	paginating: boolean;
	refreshing: boolean;
	onPaginate: () => void;
	onRefresh: () => void;
	onLimitChange: (value: number | string) => void;
	limit: number;
	bottomSheetRef: MutableRefObject<{ present: () => void; dismiss: () => void; } | null>;
}

const CustomersList = ({
	onCreateCustomerPress,
	bottomSheetRef,
	ids,
	loading,
	paginating,
	refreshing,
	limit,
	onPaginate,
	onRefresh,
	onLimitChange
}: CustomersListProps) => {
	const renderItem = useCallback(({ item }: { item: string }) => (
		<CustomerItemContainer id={item} />
	), []);

	const renderHeader = useCallback(() => (
		<>
			<Text style={{ marginBottom: SPACING.sm, marginTop: SPACING.md }} textAlign="center" type="h4" weight="bold">{`${ids?.length} `}
				<Text type="h4">clientes encontrados</Text>
			</Text>

			<Flex align="center" direction="row" gap={4} justify="center">
				<Text style={{ marginBottom: SPACING.xl }} textAlign="center" type="h4">Clientes por página: </Text>
				<Picker
					compact
					data={[{
						label: '5',
						value: 5
					}, {
						label: '10',
						value: 10
					}, {
						label: '15',
						value: 15
					}]}
					style={{ width: 70 }}
					value={limit}
					onChange={value => onLimitChange(value)}
				/>
			</Flex>

		</>
	), [ids?.length, limit, onLimitChange]);

	return (
		<Container flex padded>
			{renderHeader()}
			<FlatListWithStates
				data={ids}
				emptyComponent={<EmptyState style={{ marginTop: 120 }}/>}
				loading={loading}
				paginating={paginating}
				refreshing={refreshing}
				renderItem={renderItem}
				showsVerticalScrollIndicator={false}
				onPaginate={onPaginate}
				onRefresh={onRefresh}
			/>

			<Button block outline style={{ marginTop: SPACING.md, marginBottom: SPACING.md }} onPress={onCreateCustomerPress}>
            	Criar cliente
			</Button>

			<CustomerFormContainer
				ref={bottomSheetRef}
			/>
		</Container>
	);
};

export default CustomersList;
