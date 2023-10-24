import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/

export default defineConfig({
    plugins: [dts()],

    build: {
        lib: {
            // Could also be a dictionary or array of multiple entry points
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'my-lib',
            // the proper extensions will be added
            fileName: 'my-lib',
        },
    },
});
