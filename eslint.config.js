import js from '@eslint/js'
import globals from 'globals'
import pluginVue from 'eslint-plugin-vue'
import pluginVuetify from 'eslint-plugin-vuetify'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import eslintConfigPrettier from 'eslint-config-prettier'

export default defineConfigWithVueTs(
  // 1. Ignore build and dependency folders
  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/node_modules/**'],
  },

  // 2. Define browser globals for JS, TS, and Vue files
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue,js,mjs}'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  // 3. Base JavaScript, Vue 3, TypeScript, and Vuetify rules
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  vueTsConfigs.recommended,
  ...pluginVuetify.configs['flat/recommended'],

  // 4. Custom rule overrides
  {
    name: 'app/custom-rules',
    rules: {
      // Allow single-word component names (common for Vuetify pages/views)
      'vue/multi-word-component-names': 'off',
      'vue/first-attribute-linebreak' : 'off',
      // Warn instead of error on unused variables
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },

  // 5. Disable ESLint formatting rules that conflict with Prettier (must be last)
  eslintConfigPrettier,
)
