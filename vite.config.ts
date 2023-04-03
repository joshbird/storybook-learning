import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import tsconfigPaths from "vite-tsconfig-paths"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        // Configures vite to use the same path aliases as your tsconfig.json
        tsconfigPaths(),
        react(),
    ],
})
