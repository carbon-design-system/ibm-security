/**
 * @file Theming documentation.
 * @copyright IBM Security 2019
 */

const { readFileSync, writeFileSync } = require('fs');
const { compile } = require('handlebars');
const { resolve } = require('path');
const { renderSync } = require('sass-extract');

const { value: themeMap } = renderSync({
  file: 'src/globals/theme/_variables.scss',
  includePaths: ['node_modules'],
}).vars.global['$security--themes'];

const themes = Object.keys(themeMap);

const tokens = {};

Object.keys(themeMap[themes[0]].value).forEach(token => {
  tokens[token] = [];
});

themes.forEach(theme => {
  const { value } = themeMap[theme];

  Object.keys(value).forEach(token => {
    tokens[token].push(value[token].value.hex);
  });
});

writeFileSync(
  'docs/themes/themes.md',
  compile(readFileSync(resolve(__dirname, 'templates/index.hbs'), 'utf8'))({
    themes,
    tokens,
  })
);
