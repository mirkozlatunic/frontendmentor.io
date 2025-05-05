import path from 'path';

export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  build: {
    // Explicitly set the output directory
    outDir: path.resolve(__dirname, 'dist'),
    // When using a custom root, you need to adjust where assets are loaded from
    emptyOutDir: true,
  },
  server: {
    port: 8080,
    hot: true,
  },
};
