export const COLORS = {
	dark: {
		pure: '#000000',
		low: '#333333',
		medium: '#666666',
		high: '#999999',
		extraHigh: '#CCCCCC'
	},
	light: {
		pure: '#FFFFFF',
		low: '#F5F5F5',
		medium: '#E0E0E0',
		high: '#CCCCCC',
		extraHigh: '#B3B3B3'
	},
	danger: {
		pure: '#D32F2F',
		low: '#EF9A9A',
		medium: '#E57373',
		high: '#EF5350',
		extraHigh: '#C62828'
	},
	success: {
		pure: '#388E3C',
		low: '#81C784',
		medium: '#66BB6A',
		high: '#4CAF50',
		extraHigh: '#2E7D32'
	},
	warning: {
		pure: '#F57C00',
		low: '#FFB74D',
		medium: '#FFA726',
		high: '#FF9800',
		extraHigh: '#E65100'
	},
	info: {
		pure: '#2196F3',
		low: '#BBDEFB',
		medium: '#64B5F6',
		high: '#42A5F5',
		extraHigh: '#1E88E5'
	},
	primary: {
		pure: '#EC6724',
		low: '#F8A580',
		medium: '#F48C54',
		high: '#F0752D',
		extraHigh: '#D85614'
	}
};

export const BORDER_RADIUS = {
	none: 0,
	sm: 6,
	md: 10,
	lg: 16,
	xl: 32
};

export const SPACING = {
	auto: 'auto',
	none: 0,
	xs: 4,
	sm: 8,
	md: 12,
	lg: 16,
	xl: 24,
	xxl: 32
};

export const TEXT = {
	fontFamily: 'Inter',
	type: {
		h1: 48,
		h2: 36,
		h3: 24,
		h4: 20,
		h5: 16,
		h6: 14,
		p: 14,
		small: 12
	},
	weight: {
		thin: 100 as const,
		extraLight: 200 as const,
		light: 300 as const,
		regular: 400 as const,
		medium: 500 as const,
		semiBold: 600 as const,
		bold: 700 as const,
		extraBold: 800 as const,
		black: 900 as const
	}
};
