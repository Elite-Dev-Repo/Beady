import { defineConfig } from "vite";
import path from "path";
import { fileURLToPath } from "url"; // Add this
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Replicate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
