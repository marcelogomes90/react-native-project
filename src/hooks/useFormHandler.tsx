import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

interface useFormHandlerProps {
    schema: yup.ObjectSchema<any>;
    defaultValues?: Record<string, any>;
}

const useFormHandler = ({ schema, defaultValues = {} }: useFormHandlerProps) => {
	const {
		control,
		getValues,
		handleSubmit,
		formState: { errors, isDirty },
		reset,
		setValue
	} = useForm({
		resolver: yupResolver(schema),
		defaultValues
	});

	return {
		control,
		getValues,
		handleSubmit,
		errors,
		isDirty,
		reset,
		setValue
	};
};

export default useFormHandler;
