import { useCallback } from 'react';

import CustomerItemContainer from './CustomerItem';

import { Button, Container, EmptyState, Text } from '@components/index';
import { SPACING } from '@constants/theme';

interface CustomersListProps {
    onCreateCustomerPress: () => Promise<void>;
    ids: string[];
}

const CustomersList = ({ onCreateCustomerPress, ids }: CustomersListProps) => {
	const renderItem = useCallback((id: string) => (
		<CustomerItemContainer key={`CUSTOMER_${id}`} id={id} />
	), []);

	return (
		<Container padded scrollable>
			<Text style={{ marginBottom: SPACING.sm, marginTop: SPACING.md }} textAlign="center" type="h4" weight="bold">{`${ids?.length} `}
				<Text type="h4">clientes encontrados</Text>
			</Text>

			<Text style={{ marginBottom: SPACING.xl }} textAlign="center" type="h4">Clientes por página: </Text>

			{ids?.length > 0 ? ids.map(renderItem) : <EmptyState style={{ marginBottom: SPACING.md, marginTop: SPACING.xxl }} />}

			<Button block outline style={{ marginTop: SPACING.md, marginBottom: SPACING.xxl }} onPress={onCreateCustomerPress}>
                Criar cliente
			</Button>
		</Container>
	);
};

export default CustomersList;
