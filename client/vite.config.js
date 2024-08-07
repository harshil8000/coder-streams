import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://apicoderstreams.vercel.app',
    },
  },
});
