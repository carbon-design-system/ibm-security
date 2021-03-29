/**
 * @file Microlayout stories.
 * @copyright IBM Security 2021
 */

import { layout03, layout04 } from '@carbon/layout';

import { Grid } from 'carbon-components-react';
import React from 'react';

import { disableCentered, patterns } from '../../../.storybook';

import { CarbonHeader, HeaderName } from '../..';

const UIShell = () => (
  <div style={{ height: layout04, marginBottom: layout03 }}>
    <CarbonHeader aria-label="IBM Security">
      <HeaderName prefix="IBM">Security</HeaderName>
    </CarbonHeader>
  </div>
);

export default {
  title: patterns('Microlayouts'),
  parameters: {
    ...disableCentered(),
  },
  decorators: [
    story => (
      <>
        <UIShell />

        <Grid>{story()}</Grid>
      </>
    ),
  ],
};
