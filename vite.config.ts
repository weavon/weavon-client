import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsConfgiPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsConfgiPaths()],
  server: {
    port: 3000,
  },
  build: {
    outDir: "dist",
  },
});
