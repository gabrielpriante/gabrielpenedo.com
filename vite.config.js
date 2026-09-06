import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The footer copyright year is fixed at build time.
export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_YEAR__: JSON.stringify(String(new Date().getFullYear())),
  },
});
