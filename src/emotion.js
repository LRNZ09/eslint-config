module.exports = {
	plugins: ['@emotion'],
	rules: {
		'@emotion/import-from-emotion': 'error',
		'@emotion/no-vanilla': 'error',
		'@emotion/syntax-preference': ['error', 'object'],
		'@emotion/styled-import': 'error',
		'@emotion/jsx-import': 'off',
	},
}
