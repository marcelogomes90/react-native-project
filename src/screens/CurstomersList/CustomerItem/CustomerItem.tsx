import { Feather } from '@expo/vector-icons';
import { MutableRefObject } from 'react';
import { TouchableOpacity } from 'react-native';

import { Card, Flex, Text } from '@components/index';
import { COLORS, SPACING } from '@constants/theme';
import CustomerFormContainer from '@screens/CustomerForm';
import FormatterUtils from '@utils/formatter';
import { Customer } from 'src/types/customer';

interface CustomerItemProps {
    customer: Customer;
    onDeleteCustomerPress: () => void;
	onEditCustomerPress: () => void;
	id: string;
	bottomSheetRef: MutableRefObject<{ present: () => void; dismiss: () => void; } | null>;
}

const CustomerItem: React.FC<CustomerItemProps> = ({ customer, onDeleteCustomerPress, id, onEditCustomerPress, bottomSheetRef }) => (
	<Card style={{ marginBottom: SPACING.md, gap: SPACING.sm }}>
		<Text textAlign="center" type="h5" weight="bold">{customer?.name}</Text>
		<Text textAlign="center" type="h5">{FormatterUtils.money(customer?.salary)}</Text>
		<Text textAlign="center" type="h5">{FormatterUtils.money(customer?.companyValuation)}</Text>

		<Flex direction="row" justify="space-between" style={{ marginTop: SPACING.sm, marginBottom: SPACING.xs }}>
			<TouchableOpacity onPress={() => {}}>
				<Feather color={COLORS.dark.pure} name="plus" size={20} />
			</TouchableOpacity>

			<TouchableOpacity onPress={onEditCustomerPress}>
				<Feather color={COLORS.dark.pure} name="edit" size={20} />
			</TouchableOpacity>

			<TouchableOpacity onPress={onDeleteCustomerPress}>
				<Feather color={COLORS.danger.pure} name="trash" size={20} />
			</TouchableOpacity>
		</Flex>

		<CustomerFormContainer ref={bottomSheetRef} id={id} />
	</Card>
);

export default CustomerItem;
