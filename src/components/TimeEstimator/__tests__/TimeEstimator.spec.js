/**
 * @file Time estimator tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { Default as TimeEstimator } from '../TimeEstimator.stories';

describe('TimeEstimator', () => {
  it('renders', () => {
    expect(render(<TimeEstimator />).container.firstChild).toMatchSnapshot();
  });
});
