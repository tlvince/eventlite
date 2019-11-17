module.exports = {
  extends: ['tlvince', 'plugin:react/recommended'],
  rules: {
    'react/prop-types': 'off',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
