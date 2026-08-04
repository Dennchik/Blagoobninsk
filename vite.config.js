//! ✅ vite.config.js
import { viteConvertPugInHtml } from '@mish.dev/vite-convert-pug-in-html';
import autoprefixer from 'autoprefixer';
//* ✅ Path
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import postcssMediaMinMax from 'postcss-media-minmax';
//* ✅ Plugins
import sortMediaQueries from 'postcss-sort-media-queries';
import { defineConfig } from 'vite';
//* ✅ app
import { app } from './vite/config/app.js';
import { paths } from './vite/config/path.js';
import { getPugConfig } from './vite/config/pug-config.js';
import { compileScss } from './vite/tasks/compileScss.js';
import { fontStyle } from './vite/tasks/fontsStyle.js';
//* ✅ Tasks
import { moveHtmlFiles } from './vite/tasks/moveHtmlFiles.js';
import { convertImagesToWebp } from './vite/tasks/webp.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

//* ✅ Вызываем fontStyle ДО конфигурации
fontStyle(paths.fonts.src, paths.fonts.dest);

export default defineConfig(({ command }) => {
  const isProd = command === 'build';
  const isDev = command === 'dev';

  // ✅ Вызываем compileScss() только для продакшн сборки
  if (isProd) {
    compileScss();
  }

  return {
    base: './',

    plugins: [
      convertImagesToWebp(app.webp),
      viteConvertPugInHtml(getPugConfig(isProd)),

      // 🔹 ключевой плагин для переименования HTML
      moveHtmlFiles(), // 👈 ключевой плагин для переименования HTML

      // 🔹 Запускаем compileScss()
      // ...(isProd ? [compileScss()] : []), // 👈 только при build

      // 🔹 Добавляем анализатор только в продакшн-сборке
    ],
    server: {
      open: true,
    },
    css: {
      devSourcemap: !isProd,
      postcss: {
        plugins: [
          ...(isProd
            ? [
                // 1. Конвертируем modern media query синтаксис (width >= 768px)
                postcssMediaMinMax(app.postcssMediaMinMax),

                // 2. Сортируем и объединяем media queries
                sortMediaQueries(app.postcssSortMediaQueries),

                // 3. Добавляем vendors префиксы
                autoprefixer(app.autoprefixer),
              ]
            : []),
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
          entryFileNames: 'assets/[name].js',
          assetFileNames: 'assets/[name].[ext]',
          chunkFileNames: 'assets/vendors/[name].js',

          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('lodash') || id.includes('date-fns')) {
                return 'utils';
              }
              if (id.includes('chart.js') || id.includes('d3')) {
                return 'charts';
              }
              if (id.includes('gsap-vendors')) {
                return 'gsap';
              }
              if (id.includes('animejs') || id.includes('swiper')) {
                return 'anime-vendors';
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
