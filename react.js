module.exports = {
	env: {
		browser: true,
	},
	extends: [
		'plugin:jsx-a11y/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'prettier/react',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ['emotion'],
	rules: {
		'emotion/styled-import': 'error',
		'emotion/syntax-preference': ['error', 'object'],
		'react/display-name': 'warn',
		'react/prop-types': ['warn', { skipUndeclared: true }],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
