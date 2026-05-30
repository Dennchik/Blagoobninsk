//! ✅ vite.config.js
import { defineConfig } from 'vite';
//* ✅ Path
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { paths } from './vite/config/path.js';
//* ✅ app
import { app } from './vite/config/app.js';
import { getPugConfig } from './vite/config/pug-config.js';
//* ✅ Plugins
import sortMediaQueries from 'postcss-sort-media-queries';
import postcssMediaMinMax from 'postcss-media-minmax';
import autoprefixer from 'autoprefixer';
import { viteConvertPugInHtml } from '@mish.dev/vite-convert-pug-in-html';
//* ✅ Tasks
import { moveHtmlFiles } from './vite/tasks/moveHtmlFiles.js';
import { fontStyle } from './vite/tasks/fontsStyle.js';
import { convertImagesToWebp } from './vite/tasks/webp.js';
import { compileScss } from './vite/tasks/compileScss.js';
import { fonts } from './vite/tasks/fonts.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

//* ✅ конвертируем шрифты перед dev/build
fonts(paths.fonts.src);

export default defineConfig(({ command }) => {
  const isProd = command === 'build';
  const isDev = command === 'dev';

  return {
    base: './',

    plugins: [
      fonts(),
      fontStyle(),
      convertImagesToWebp(app.webp),
      viteConvertPugInHtml(getPugConfig(isProd)),

      // 🔹 ключевой плагин для переименования HTML
      moveHtmlFiles(), // 👈 ключевой плагин для переименования HTML

      // 🔹 Запускаем compileScss()
      ...(isProd ? [compileScss()] : []), // 👈 только при build

      // 🔹 Добавляем анализатор только в продакшн-сборке
    ],
    server: {
      open: true,
    },
    css: {
      devSourcemap: !isProd, // 👈 только для dev
      postcss: {
        plugins: [
          autoprefixer(app.autoprefixer),

          // 🔹сортировки и объединения медиа-запросов CSS
          ...(isProd ? [] : [sortMediaQueries(app.postcssSortMediaQueries)]),

          // 🔹 конвертация нового синтаксиса медиа-запросов
          ...(isProd ? [] : [postcssMediaMinMax(app.postcssMediaMinMax)]),
        ],
      },
      preprocessorOptions: { scss: {} },
    },
    resolve: {
      alias: { '@': resolve(__dirname, 'src') },
    },

    build: {
      outDir: 'build',
      emptyOutDir: true,
      sourcemap: isDev,
      cssCodeSplit: true, // 👈 теперь стили делятся по Chunks

      chunkSizeWarningLimit: 264,
      modulePreload: {
        polyfill: true,
      },
      minify: 'esbuild',
      commonjsOptions: {
        transformMixedEsModules: true,
      },

      rollupOptions: {
        input: {
          main: resolve(__dirname, 'src/js/main.js'),
          app: resolve(__dirname, 'src/js/app.js'),
          // about: resolve(__dirname, 'src/js/about.js'),
          // catalog: resolve(__dirname, 'src/js/catalog.js'),
          // news: resolve(__dirname, 'src/js/news.js'),
          // card: resolve(__dirname, 'src/js/card.js'),
          // 'card-product': resolve(__dirname, 'src/js/card.js'),
        },
        output: {
          entryFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash].[ext]',
          chunkFileNames: 'assets/vendors/[name]-[hash].js',

          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('lodash') || id.includes('date-fns')) {
                return 'utils';
              }
              if (id.includes('chart.js') || id.includes('d3')) {
                return 'charts';
              }
              return 'vendor';
            }
          },
        },
      },
      optimizeDeps: {
        include: ['lodash', 'axios'],
        exclude: [],
      },
    },

    preview: {
      port: 4173,
      host: true,
    },
  };
});
