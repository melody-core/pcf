import react from "@vitejs/plugin-react";
import { defineConfig } from "@midwayjs/hooks-kit";

export default defineConfig({
  vite: {
    plugins: [react() as any],
    resolve: {
      alias: [{ find: /^~/, replacement: "" }],
    },
    server: {
      host: "0.0.0.0",
      port: 7002,
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
  },
});
