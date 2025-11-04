import { defineConfig } from "vitest/config";
import * as path from "node:path";

export default defineConfig({
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
