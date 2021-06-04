/**
 * @file SCSS tests.
 * @copyright IBM Security 2020 - 2021
 */

import { compile, forEachImport } from '../../../scripts/scss/compile';
import excludeExternals from '../../../scripts/styles';

describe('SCSS', () => {
  describe('Bundle', () => {
    excludeExternals();

    ['src/index', 'tmp/globals/build'].forEach(path => {
      test(path, () => {
        expect(
          compile(`${path}.scss`)
            .css.toString()
            .replace(/'/g, '"')
        ).toMatchSnapshot();
      });
    });
  });

  describe('Imports', () => {
    forEachImport(file => {
      test(file, () => {
        expect(compile(file)).not.toHaveProperty('message');
      });
    });
  });
});
