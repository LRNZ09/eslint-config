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
	rules: {
		'react/display-name': 'warn',
		'react/prop-types': ['warn', { skipUndeclared: true }],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
