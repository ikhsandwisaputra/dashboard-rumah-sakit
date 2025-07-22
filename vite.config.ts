import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
// https://vite.dev/config/
export default defineConfig({
  base: "/dashboard-rumah-sakit",
  resolve: {
   alias: {
      "~": path.resolve(__dirname, "./src"),
      "~/componets": path.resolve(__dirname, "./src/components"),
    }
  },
  plugins: [react(), tailwindcss(), tsconfigPaths()],
})
