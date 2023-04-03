import js from "@eslint/js"
import globals from "globals"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import ts from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import prettierConfig from "eslint-config-prettier"

// Default file pattern

const baseConfig = {
    files: ["src/**/*.{js,jsx,ts,tsx}"],
    rules: {
        ...js.configs.recommended.rules,
    },
    // add browser globals
    languageOptions: {
        globals: {
            ...globals.browser,
        },
    },
}

const reactConfig = {
    files: ["src/**/*.{jsx,tsx}"],
    plugins: {
        react,
        "react-hooks": reactHooks,
    },
    // Include react plugin recommended and jsx-runtime rules
    // Also include react-hooks recommended rules
    rules: {
        ...react.configs.recommended.rules,
        ...react.configs["jsx-runtime"].rules,
        ...reactHooks.configs.recommended.rules,
    },
    // Allow for JSX
    languageOptions: {
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },
    },
}

const tsConfig = {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
        "@typescript-eslint": ts,
    },
    languageOptions: {
        parser: tsParser,
        parserOptions: {
            project: true,
        },
    },
    rules: {
        ...ts.configs["eslint-recommended"].rules,
        ...ts.configs.recommended.rules,
        ...ts.configs["recommended-requiring-type-checking"].rules,
    },
}

export default [
    baseConfig,
    reactConfig,
    tsConfig,
    prettierConfig, // Make sure this one is last
]
