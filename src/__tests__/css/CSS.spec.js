/**
 * @file CSS snapshots.
 * @copyright IBM Security 2020
 */

import { renderSync } from 'node-sass';
import React from 'react';

describe('CSS', () => {
  const { css } = renderSync({
    file: 'src/index.scss',
    includePaths: ['node_modules'],
    outputStyle: 'expanded',
  });

  test('Unpacked size', () => {
    expect(
      `${Math.round(css.byteLength / 1024).toFixed(1)} KB`
    ).toMatchSnapshot();
  });

  test('Snapshot', () => {
    expect(<style>{css.toString()}</style>).toMatchSnapshot();
  });
});
