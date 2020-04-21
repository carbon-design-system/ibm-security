/**
 * @file SCSS tests.
 * @copyright IBM Security 2020
 */

import { compile, forEachImport } from '../../../scripts/scss/compile';

describe('SCSS', () => {
  describe('Bundle', () => {
    let css;

    beforeEach(() => {
      ({ css } = compile('src/index.scss'));
    });

    test('Unpacked size', () => {
      expect(
        `${Math.round(css.byteLength / 1024).toFixed(1)} KB`
      ).toMatchSnapshot();
    });

    test('Snapshot', () => {
      expect(css.toString()).toMatchSnapshot();
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
