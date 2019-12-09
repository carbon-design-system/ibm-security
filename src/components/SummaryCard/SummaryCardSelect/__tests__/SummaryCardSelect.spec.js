/**
 * @file Summary card select tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';

import { SummaryCardSelect } from '../../../..';

import props from '../_mocks_';

describe('SummaryCardSelect', () => {
  it('renders', () => {
    expect(
      render(<SummaryCardSelect className="className" {...props} />).container
        .firstChild
    ).toMatchSnapshot();
  });
});
