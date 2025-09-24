import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/MusicStreamingForntend/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  }
});