import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from '@mdx-js/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx() },
    react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
    react({ jsxImportSource: '@emotion/react' })
    react({
      babel: {
        presets: [...],
        // Your plugins run before any built-in transform (eg: Fast Refresh)
        plugins: [...],
        // Use .babelrc files
        babelrc: true,
        // Use babel.config.js files
        configFile: true,
      }})
  ],
});
