import { type ConfigEnv, loadEnv, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPathsPlugin from "vite-tsconfig-paths";

const config = ({ mode }: ConfigEnv): ReturnType<typeof defineConfig> => {
  const { VITE_APP_DEVELOPMENT_PORT } = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [react(), tsconfigPathsPlugin()],
    server: {
      port: Number(VITE_APP_DEVELOPMENT_PORT),
    },
  });
};

export default config;
