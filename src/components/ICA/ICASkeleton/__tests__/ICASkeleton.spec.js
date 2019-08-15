/**
 * @file Important Content Area (ICA) skeleton tests.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { shallow } from 'enzyme';
import ICASkeleton from '../ICASkeleton';

describe('ICASkeleton', () => {
  it('matches default snapshot', () =>
    expect(shallow(<ICASkeleton />)).toMatchSnapshot());
});
