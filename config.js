/**
 * @file Path configuration.
 * @copyright IBM Security 2018 - 2021
 */

// Imports
import path from 'path';

export const paths = {
  src: {
    dir: 'src',
    components: {
      dir: 'components',
      get path() {
        return path.resolve(paths.src.path, paths.src.components.dir);
      },
    },
    get path() {
      return path.resolve(__dirname, paths.src.dir);
    },
    files: {},
  },
  dist: {
    css: 'css',
    scss: 'scss',
    cjs: 'lib',
    es: 'es',
    dist: 'dist',
  },
};

paths.src.files.scss = path.join(paths.src.dir, '**/*.scss');

export const buildBlacklist = ['Component', 'Portal', 'Tooltip'];
export const roots = [__dirname];

export default {
  paths,
  buildBlacklist,
};
