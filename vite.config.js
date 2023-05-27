import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "./src/main.js",
      name: "Utilidades",
      fileName: "utilidades"
    }
  },
  test: {
    globals: true,
    coverage: {
      reporter: ["text", "json", "html"],
      provider: "istanbul" // or "c8"
    },
  },
})
