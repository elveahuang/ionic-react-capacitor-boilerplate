import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// @ts-ignore
export default ({ command, mode }) => {
    const env = loadEnv(mode, process.cwd());
    console.log(`command - ${command}. mode - ${mode}.`);
    return defineConfig({
        base: env.VITE_APP_BASE ?? '/',
        server: {
            port: 8081,
        },
        build: {
            outDir: env.VITE_APP_DIST ?? 'www',
        },
        plugins: [react(), tsconfigPaths()],
    });
};
