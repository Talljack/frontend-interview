import react from 'eslint-plugin-react';
import globals from 'globals'
import markdown from "eslint-plugin-markdown";
export default [
    ...markdown.configs.recommended,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: {
            react,
        },
        languageOptions: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
            },
        }
    }
]
