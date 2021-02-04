module.exports = {
	env: {
		browser: true,
	},
	extends: [
		'plugin:jsx-a11y/recommended',
		'plugin:react/recommended',
		'plugin:react-hooks/recommended',
		'plugin:import/react',
		'prettier/react',
	],
	rules: {
		'jsx-a11y/no-autofocus': ['warn', { ignoreNonDOM: true }],
		'react/display-name': 'warn',
		'react/prop-types': ['warn', { skipUndeclared: true }],
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
}
