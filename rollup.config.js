/**
 * @file Rollup configuration.
 * @copyright IBM Security 2019 - 2021
 */

import autoprefixer from 'autoprefixer';
import { resolve } from 'path';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import nodeResolve from 'rollup-plugin-node-resolve';

import { paths } from './config';
import { dependencies, peerDependencies } from './package.json';

process.env.BABEL_ENV = 'rollup';

const { src, dist } = paths;

const { cjs, es } = dist;

const createFromDefault = ({
  experimentalCodeSplitting = true,
  externals = [
    ...new Set([
      ...Object.keys(dependencies),
      ...Object.keys(peerDependencies),
    ]),
  ],
  format = 'cjs',
  input = {
    'scss-exports': resolve(src.path, 'globals/scss-exports/index.js'),
  },
  out = cjs,
} = {}) => ({
  input,
  output: {
    chunkFileNames: 'chunks/[hash].js',
    [experimentalCodeSplitting ? 'dir' : 'file']: resolve(__dirname, out),
    format,
  },

  // Mark all dependencies and peer dependencies as external, except imported JSON files.
  external: (id) =>
    externals.some(
      (extensionId) =>
        (id === extensionId || id.startsWith(`${extensionId}/`)) &&
        !id.endsWith('.json')
    ),
  plugins: [
    postcss({
      extract: false,
      inject: false,
      minimize: !(process.env.NODE_ENV === 'development'),
      namedExports: (name) => name.replace(/-/, '_'),
      plugins: [autoprefixer],
      use: [
        [
          'sass',
          {
            includePaths: ['node_modules'],
          },
        ],
      ],
    }),
    babel({ runtimeHelpers: true }),
    nodeResolve(),
  ],
});

export default [
  createFromDefault({
    out: cjs,
  }),
  createFromDefault({
    format: 'es',
    out: es,
  }),
];
