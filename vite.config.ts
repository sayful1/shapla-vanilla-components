import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    target: "modules",
    lib: {
      entry: "src/index.ts",
      name: "ShaplaComponent",
      fileName: (format, entryName) => {
        return `${entryName}.${format}.js`;
      },
    },
  },
});
