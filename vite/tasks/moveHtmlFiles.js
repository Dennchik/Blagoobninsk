import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function moveHtmlFiles() {
  return {
    name: 'move-html-files',
    apply: 'build',
    closeBundle() {
      const buildDir = path.resolve(__dirname, '../../build');

      function walk(dir) {
        for (const file of fs.readdirSync(dir)) {
          const fullPath = path.join(dir, file);
          const stat = fs.statSync(fullPath);

          if (stat.isDirectory()) {
            walk(fullPath);
          } else if (file === 'index.html' && dir !== buildDir) {
            const parentDirName = path.basename(dir);
            const parentDirRelative = path.relative(buildDir, dir);

            // Читаем HTML
            let html = fs.readFileSync(fullPath, 'utf8');

            // Считаем глубину вложенности
            const depth = parentDirRelative.split(path.sep).length;
            // Если файл был в корне pages (depth=1) → './'
            // Если глубже (depth>1) → '../'
            const newPrefix = depth > 1 ? '../' : './';

            // Исправляем пути к ассетам и картинкам
            html = html.replace(
              /(\shref|\ssrc)=["'](\.\.\/)+/g,
              `$1="${newPrefix}`
            );

            // Новый путь
            const newPath = path.join(
              buildDir,
              path.dirname(parentDirRelative),
              `${parentDirName}.html`
            );

            fs.writeFileSync(newPath, html, 'utf8');

            // Удаляем старый файл и пустую папку
            fs.rmSync(dir, { recursive: true, force: true });
          }
        }
      }

      walk(buildDir);
    },
  };
}
