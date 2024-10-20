module.exports = {
	extends: ['expo', 'prettier'],
	plugins: ['@typescript-eslint', 'react', 'prettier'],
	parser: '@typescript-eslint/parser',
	rules: {
		'prettier/prettier': 'off',
		'no-warning-comments': 'error',
		indent: ['error', 'tab', { SwitchCase: 1 }],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'linebreak-style': ['error', 'unix'],
		'arrow-parens': ['error', 'as-needed'],
		'no-trailing-spaces': ['error'],
		'space-infix-ops': 'error',
		'require-await': 'error',
		'keyword-spacing': 'error',
		'react/display-name': 'off',
		'comma-dangle': ['error', 'never'],
		'object-curly-spacing': ['error', 'always'],
		'import/no-unresolved': 'error',
		'import/named': 'error',
		'react/jsx-filename-extension': [1, {
			'extensions': [
				'.ts',
				'.tsx',
				'.js',
				'.jsx'
			]
		}],
		'import/namespace': ['error', { allowComputed: true }],
		'import/default': 'error',
		'import/export': 'error',
		'arrow-body-style': ['error', 'as-needed'],
		'react/function-component-definition': [
			'error',
			{
				namedComponents: 'arrow-function',
				unnamedComponents: 'arrow-function'
			}
		],
		'import/order': [
			'error',
			{
				groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
				alphabetize: {
					order: 'asc',
					caseInsensitive: true
				},
				'newlines-between': 'always'
			}
		],
		'func-style': ['error', 'expression', { allowArrowFunctions: true }],
		'array-element-newline': ['error', 'consistent'],
		'no-bitwise': 'off',
		'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
		'react/jsx-boolean-value': 'error',
		'react/jsx-sort-props': [
			2,
			{
				callbacksLast: true,
				shorthandFirst: true,
				ignoreCase: true,
				noSortAlphabetically: false,
				reservedFirst: true
			}
		],
		'react/jsx-wrap-multilines': [
			'error',
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'parens-new-line'
			}
		],
		'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
		'eol-last': ['error', 'always']
	},
	settings: {
		'import/resolver': {
			typescript: {
				project: './tsconfig.json'
			},
		  'babel-module': {
				alias: {
					'@components': './src/components/index.ts',
					'@screens': './src/screens',
					'@utils': './src/utils',
					'@assets': './src/assets',
					'@constants': './src/constants',
					'@services': './src/services',
					'@store': './src/store',
					'@hooks': './src/hooks',
					'@navigators': './src/navigators',
					'@hoc': './src/hoc',
					'@config': './src/config'
				}
		  	}
		}
	}
};
