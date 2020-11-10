module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:unicorn/recommended',
		'plugin:you-dont-need-lodash-underscore/compatible',
		'plugin:prettier/recommended',
		'prettier',
		'prettier/unicorn',
	],
	parserOptions: {
		ecmaFeatures: {
			impliedStrict: true,
		},
		sourceType: 'module',
	},
	rules: {
		'import/order': [
			'error',
			{
				alphabetize: { order: 'asc' },
				'newlines-between': 'always',
				pathGroups: [
					{
						group: 'parent',
						pattern: '~/**',
						position: 'before',
					},
				],
			},
		],
		'unicorn/no-fn-reference-in-iterator': 'off',
		'unicorn/no-null': 'off',
		'unicorn/prevent-abbreviations': [
			'error',
			{
				whitelist: {
					Props: true,
					Ref: true,
					args: true,
					props: true,
					ref: true,
				},
			},
		],
		'unicorn/prefer-ternary': 'off',
	},
}
