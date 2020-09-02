module.exports = {
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:import/typescript',
		'prettier/@typescript-eslint',
	],
	overrides: [
		{
			files: ['*.config.js'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
			},
		},
	],
	rules: {
		'@typescript-eslint/no-unused-vars': 'error',
		// https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
		'import/default': 'off',
		'import/named': 'off',
		'import/namespace': 'off',
		'import/no-named-as-default-member': 'off',
		// ---
	},
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
			},
		},
	},
}
