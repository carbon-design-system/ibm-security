/**
 * @file SCSS tests.
 * @copyright IBM Security 2020 - 2021
 */

import { resolve } from 'path';
import { compile, forEachImport } from '../../../scripts/scss/compile';

describe('SCSS', () => {
  test('Bundle', () => {
    console.log(__dirname);

    expect(
      compile('src/index.scss')
        .css.toString()
        .replace(/'/g, '"')
    ).toMatchSnapshot();
  });

  describe('Imports', () => {
    forEachImport(file => {
      test(file, () => {
        console.log(file);

        expect(compile(file)).not.toHaveProperty('message');
      });
    });
  });
});
