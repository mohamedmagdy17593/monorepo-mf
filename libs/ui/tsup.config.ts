import { defineConfig } from 'tsup';

export default defineConfig({
  // sourcemap: true,
  // minify: false,
  dts: true,
  format: ['esm', 'cjs'],
  loader: {
    '.js': 'jsx',
  },
});
