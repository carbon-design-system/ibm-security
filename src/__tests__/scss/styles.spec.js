/**
 * @file Style tests.
 * @copyright IBM Security 2020 - 2021
 */

import compile from '../../../scripts/scss/compile';

describe('Styles', () => {
  test('Bundle', () => {
    expect(
      compile('src/index.scss').css.toString()

      // .replace(/'/g, '"')
    ).toMatchSnapshot();
  });
});
