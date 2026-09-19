import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Se publicares no GitHub Pages num repositório (ex: username.github.io/cleusa-portfolio),
// define `base: "/cleusa-portfolio/"`. Para Vercel ou domínio próprio, deixa "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
