import eslint from '@eslint/js'
import react from 'eslint-plugin-react'
import tseslint from 'typescript-eslint'

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  eslint.configs.recommended, // Base ESLint rules
  ...tseslint.configs.recommended, // TypeScript-specific rules
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react,
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      // ✅ React rules
      'react/react-in-jsx-scope': 'off', // Vite handles React auto-import
      'react/prop-types': 'off', // Not required in TypeScript

      // ✅ TypeScript rules
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn', // Avoid excessive use of `any`
      '@typescript-eslint/explicit-function-return-type': 'off', // Optional for inferred types

      // ✅ General best practices
      'no-console': 'warn',
      'no-unused-vars': 'off', // Handled by TypeScript's rule
      eqeqeq: ['error', 'always'], // Enforce strict equality
    },
  },
]
