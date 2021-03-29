/**
 * @file SCSS tests.
 * @copyright IBM Security 2020 - 2021
 */

import { compile, forEachImport } from '../../../scripts/scss/compile';
import { excludeExternals } from '../../../scripts/styles';

describe('SCSS', () => {
  test('Bundle', () => {
    excludeExternals();

    expect(
      compile('tmp/globals/build/index.scss')
        .css.toString()
        .replace(/'/g, '"')
    ).toMatchSnapshot();
  });

  describe('Imports', () => {
    forEachImport(file => {
      test(file, () => {
        expect(compile(file)).not.toHaveProperty('message');
      });
    });
  });
});
