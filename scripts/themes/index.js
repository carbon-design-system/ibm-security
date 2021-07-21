/**
 * @file Theming documentation.
 * @copyright IBM Security 2019
 */

const { colors } = require('@carbon/colors');
const { formatTokenName } = require('@carbon/themes');

const { readFileSync, writeFileSync } = require('fs');
const { compile } = require('handlebars');
const { resolve } = require('path');
const { renderSync } = require('sass-extract');

// Gets the Sass maps of currently supported themes.
const { value: themeMap } = renderSync({
  file: 'src/globals/theme/_variables.scss',
  includePaths: ['node_modules'],
}).vars.global['$security--themes'];

// List of themes.
const themes = Object.keys(themeMap);

// Filter by `SassColor` type.
const filterColor = ({ type }) => type === 'SassColor';

// Generates the data for themes and tokens to template with Handlebars.
const tokens = Object.keys(themeMap[themes[0]].value)
  // TODO - currently only handling color tokens.
  .filter((token) => filterColor(themeMap[themes[0]].value[token]))
  .map((token) => ({
    themes: [],
    token,
  }));

// Loops through each of the supported themes, finding and formatting the correct color hex values and names.
themes.forEach((theme) => {
  const { value: tokenObject } = themeMap[theme];

  Object.keys(tokenObject)
    // TODO - currently only handling color tokens.
    .filter((tokenValue) => filterColor(tokenObject[tokenValue]))
    .map((tokenValue) => tokenObject[tokenValue])
    .forEach(({ value }, index) => {
      let { hex: color } = value;

      Object.entries(colors).forEach(([swatch, colorGrades]) => {
        Object.entries(colorGrades).forEach(([colorGrade, colorValue]) => {
          if (colorValue === color) {
            color = formatTokenName(`${swatch}${colorGrade}`);
          }
        });
      });

      tokens[index].themes.push(color);
    });
});

// Write the documentation using the Handlebars template.
writeFileSync(
  'docs/themes/themes.md',
  compile(readFileSync(resolve(__dirname, 'templates/index.hbs'), 'utf8'))({
    themes,
    tokens,
  })
);
