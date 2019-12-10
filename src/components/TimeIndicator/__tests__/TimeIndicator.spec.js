/**
 * @file Time indicator tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { Default as TimeIndicator } from '../TimeIndicator.stories';

describe('TimeIndicator', () => {
  it('renders', () => {
    expect(render(<TimeIndicator />).container.firstChild).toMatchSnapshot();
  });
});
