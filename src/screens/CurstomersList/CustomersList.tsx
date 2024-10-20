import { Button, Container } from '../../components';

interface CustomersListProps {
    onCreateCustomerPress: () => Promise<void>;
    ids: number[];
}

const CustomersList = ({ onCreateCustomerPress }: CustomersListProps) => (
	<Container padded scrollable>
		<Button block outline onPress={onCreateCustomerPress}>Criar cliente</Button>
	</Container>
);

export default CustomersList;
