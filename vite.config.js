import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
    plugins: [viteSingleFile()],
    base: './', // Use relative paths for assets so it works on CrazyGames and itch.io
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    }
});
