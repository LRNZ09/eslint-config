// eslint-disable-next-line unicorn/no-array-reduce
const abbreviationsWhitelist = ['arg', 'env', 'param', 'prop', 'ref'].reduce(
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
		'no-undefined': 'warn',
		'unicorn/no-fn-reference-in-iterator': 'off',
		'unicorn/no-null': 'off',
		'unicorn/no-array-callback-reference': 'warn',
		'unicorn/no-array-reduce': 'warn',
		'unicorn/numeric-separators-style': 'error',
		'unicorn/prevent-abbreviations': [
			'warn',
			{
				checkProperties: true,
				checkShorthandProperties: true,
				replacements: abbreviationsWhitelist,
			},
		],
		'unicorn/prefer-array-flat-map': 'error',
		// TODO: Enable this by default when targeting Node.js 16.
		'unicorn/prefer-string-replace-all': 'off',
		'unicorn/prefer-ternary': 'off',
	},
}
