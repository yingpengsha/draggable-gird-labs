import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import pluginReact from 'eslint-plugin-react'

/** @type {import('eslint').Linter.Config[]} */
export default [
  { name: 'root' },
  // ======================== default config ========================
  { files: ['**/*.{js,mjs,cjs,ts}'], ignores: ['**/dist'] },
  { languageOptions: {
    ecmaVersion: 2020,
    globals: globals.node } },
  pluginJs.configs.recommended,
  stylistic.configs['recommended-flat'],
  ...tseslint.configs.recommended,

  // ======================== react config ========================
  {
    ...pluginReact.configs.flat.recommended,
    ...pluginReact.configs.flat['jsx-runtime'],
    files: ['website/**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
]
