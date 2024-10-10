import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import jsdoc from 'eslint-plugin-jsdoc'

export default [
    {
        settings: {
            react: {
                version: "detect"
            }
        }
    },
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    {
        plugins: {
            jsdoc
        },
        rules: {
            'jsdoc/require-jsdoc': ['error', { publicOnly: true }]
        }
    },
    {
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            semi: ['error', 'never'],
            indent: ['error', 4]
        }
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    pluginReact.configs.flat.recommended
]
