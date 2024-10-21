import * as yup from 'yup';

export const CUSTOMER_FORM_SCHEMA = yup.object().shape({
	name: yup.string().required('Nome é um campo obrigatório'),
	salary: yup.number().moreThan(0.01).required('Sálario é um campo obrigatório'),
	companyValuation: yup.number().moreThan(0.01).required('Valor da empresa é um campo obrigatório')
});
