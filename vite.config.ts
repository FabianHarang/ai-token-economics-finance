import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react(),
    {
      name: "legacy-local-path-redirect",
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.startsWith("/ai-token-eu-digital-twin")) {
            res.statusCode = 302;
            res.setHeader(
              "Location",
              req.url.replace(
                "/ai-token-eu-digital-twin",
                "/ai-token-economics-finance",
              ),
            );
            res.end();
            return;
          }

          next();
        });
      },
    },
  ],
  base: "/ai-token-economics-finance/",
  test: {
    environment: "jsdom",
    globals: true
  }
});
