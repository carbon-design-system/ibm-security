/**
 * @file Babel configuration.
 * @copyright IBM Security 2019
 */

const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-do-expressions',
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-export-namespace-from',
  '@babel/plugin-proposal-json-strings',
  '@babel/plugin-proposal-private-methods',
  '@babel/plugin-transform-runtime',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-syntax-import-meta',
  'babel-plugin-macros',
];

const presets = ['@babel/preset-env', '@babel/preset-react'];

module.exports = ({ env }) => {
  switch (env()) {
    case 'es': {
      return {
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
            },
          ],
          '@babel/preset-react',
        ],
        plugins: [
          ...plugins,
          [
            './babel/carbon-imports.babel-plugin',
            {
              moduleType: 'es',
            },
          ],
        ],
      };
    }

    case 'rollup': {
      return {
        plugins,
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
            },
          ],
          '@babel/preset-react',
        ],
      };
    }

    default: {
      return {
        plugins: [...plugins, './babel/carbon-imports.babel-plugin'],
        presets,
      };
    }
  }
};
