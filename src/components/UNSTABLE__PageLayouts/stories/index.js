/**
 * @file Story information.
 * @copyright IBM Security 2020 - 2021
 */

import { layout03, layout04 } from '@carbon/layout';

import { Grid } from 'carbon-components-react';
import classnames from 'classnames';
import React from 'react';

import { disableCentered } from '../../../../.storybook';

import { CarbonHeader, HeaderName } from '../../..';

export default {
  parameters: {
    ...disableCentered(),
  },
  decorators: [
    story => (
      <>
        <div style={{ height: layout04, marginBottom: layout03 }}>
          <CarbonHeader aria-label="IBM Security">
            <HeaderName prefix="IBM">Security</HeaderName>
          </CarbonHeader>
        </div>

        <Grid>{story()}</Grid>
      </>
    ),
  ],
};

export const withContainer = WrappedComponent => ({ className, ...other }) => (
  <WrappedComponent
    className={classnames('container--narrow', className)}
    {...other}
  />
);
