import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { forwardRef } from 'react';
import { FieldErrors } from 'react-hook-form';

import { customerFormStyles } from './CustomerForm.styles';
import { CustomerFormValues } from './CustomerFormContainer';

import { BottomSheet, Button, InputField, Text } from '@components/index';
import { SPACING } from '@constants/theme';
import CurrencyInputField from 'src/components/Form/CurrencyInputField';

interface CustomerFormProps {
	onSubmit: () => void;
	control: any;
	isEdit: boolean;
	errors: FieldErrors<CustomerFormValues>;
	actionLoading: boolean;
	onDismiss: () => void;
}

const CustomerForm = forwardRef<BottomSheetModalMethods, CustomerFormProps>(({ onSubmit, control, isEdit, errors, actionLoading, onDismiss }, ref) => (
	<BottomSheet ref={ref} padded snapPoints={['60%']} onDismiss={onDismiss}>
		<Text style={{ marginVertical: SPACING.lg }} type="h5" weight="bold">{isEdit ? 'Editar' : 'Criar'} cliente</Text>
		<InputField
			control={control}
			editable={!actionLoading}
			error={errors.name?.message}
			label="Nome"
			name="name"
			placeholder="Digite o nome:"
		/>

		<CurrencyInputField
			control={control}
			editable={!actionLoading}
			error={errors.salary?.message}
			label="Salário"
			name="salary"
			placeholder="Digite o salário:"
			prefix="R$"
		/>

		<CurrencyInputField
			control={control}
			editable={!actionLoading}
			error={errors.companyValuation?.message}
			label="Valor da empresa"
			name="companyValuation"
			placeholder="Digite o valor da empresa:"
			prefix="R$"
		/>

		<Button
			block
			loading={actionLoading}
			style={customerFormStyles.button}
			onPress={onSubmit}
		>
			{isEdit ? 'Editar cliente' : 'Criar cliente'}
		</Button>
	</BottomSheet>
));

export default CustomerForm;
