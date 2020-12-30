module.exports = {
	env: {
		'react-native/react-native': true,
	},
	extends: ['./react', 'plugin:react-native/all'],
	rules: {
		'react-native/no-raw-text': 'warn',
	},
	settings: {
		'import/resolver': {
			'react-native': {
				platform: 'any',
			},
		},
	},
}
