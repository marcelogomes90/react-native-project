import currencyFormatter from 'currency.js';

class FormatterUtils {
	static money(value = 0, { prefix = 'R$', formatWithSymbol = true, precision = 2 } = {}) {
		const formattedPrefix = prefix ? `${prefix} ` : '';

		return currencyFormatter(value, {
			decimal: ',',
			precision,
			separator: '.',
			symbol: formatWithSymbol ? formattedPrefix : ''
		}).format();
	}
}

export default FormatterUtils;
