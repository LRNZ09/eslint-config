// eslint-disable-next-line unicorn/no-array-reduce
const abbreviationsWhitelist = ['arg', 'prop', 'ref'].reduce(
	(accumulator, current) => {
		// Singular
		accumulator[current] = false
		// Plural
		accumulator[`${current}s`] = false

		return accumulator
	},
	{},
)

module.exports = {
	env: {
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:import/recommended',
		'plugin:unicorn/recommended',
		'plugin:prettier/recommended',
		'prettier',
		'prettier/unicorn',
	],
	parserOptions: {
		ecmaFeatures: {
			impliedStrict: true,
		},
	},
	rules: {
		'import/exports-last': 'error',
		'import/first': 'error',
		'import/group-exports': 'error',
		'import/newline-after-import': 'error',
		'import/no-absolute-path': 'error',
		'import/no-cycle': ['warn', { ignoreExternal: true }],
		'import/no-deprecated': 'warn',
		'import/no-duplicates': 'error',
		'import/no-dynamic-require': 'warn',
		'import/no-extraneous-dependencies': 'warn',
		'import/no-mutable-exports': 'warn',
		'import/no-self-import': 'error',
		'import/no-unassigned-import': 'warn',
		'import/no-useless-path-segments': ['error', { noUselessIndex: true }],
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
		'no-undefined': 'error',
		'unicorn/no-fn-reference-in-iterator': 'off',
		'unicorn/no-null': 'off',
		'unicorn/no-array-callback-reference': 'warn',
		'unicorn/no-array-reduce': 'warn',
		'unicorn/prevent-abbreviations': [
			'error',
			{
				checkProperties: true,
				checkShorthandProperties: true,
				replacements: abbreviationsWhitelist,
			},
		],
		'unicorn/prefer-ternary': 'off',
	},
}
