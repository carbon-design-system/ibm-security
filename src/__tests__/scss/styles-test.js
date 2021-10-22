/**
 * @file Style tests.
 * @copyright IBM Security 2020 - 2021
 */

import { sync } from 'glob';
import { resolve } from 'path';
import { exec } from 'shelljs';

import { root } from '../../../config';

function compile(input, options = []) {
  return exec(
    `sass -I ${resolve(root, 'node_modules')} -q ${options.join(' ')} ${input}`
  );
}

const dirname = resolve(__dirname, '../..');

describe('Styles', () => {
  test('Bundle', () => {
    expect(
      compile(resolve(dirname, 'index.scss')).toString()
    ).toMatchSnapshot();
  });

  test.concurrent.each(
    sync(resolve(dirname, '**/*.scss'), {
      ignore: '**/css-gridish/**',
    })
  )("Compile '%s'", async (input) => {
    expect(compile(input, ['-s', 'compressed']).code).toBe(0);
  });
});
