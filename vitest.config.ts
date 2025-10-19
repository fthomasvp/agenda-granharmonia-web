import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests.ts",
    outputFile: "TEST-agenda-granharmonia-web.xml",
    reporters: ["junit"],

    coverage: {
      reporter: ["text", "html", "cobertura"],
      exclude: ["src/setupTests.ts", "src/mocks", "src/**/*.{test,spec}.tsx"],
    },
  },
});