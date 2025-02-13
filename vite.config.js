import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // ...existing aliases...
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.node']
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.node': 'file'
      }
    }
  },
  server: {
    force: true // Force the server to re-optimize dependencies
  }
});
