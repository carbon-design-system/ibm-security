/**
 * @file Status step tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import { StatusStep, StatusIndicator } from '../../..';

import props from '../_mocks_';

const { statusIndicator: statusIndicatorProps, statusSteps } = props;

describe('StatusIndicator', () => {
  let statusIndicator;

  beforeEach(() => {
    statusIndicator = shallow(
      <StatusIndicator {...statusIndicatorProps}>
        {statusSteps.map(({ key, ...props }) => (
          <StatusStep key={key} {...props} />
        ))}
      </StatusIndicator>
    );
  });

  it('renders', () => {
    expect(statusIndicator).toMatchSnapshot();
  });
});
