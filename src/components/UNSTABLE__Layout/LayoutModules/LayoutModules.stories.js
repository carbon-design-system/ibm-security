/**
 * @file Layout module stories.
 * @copyright IBM Security 2020
 */

import { Column, Grid, Row } from 'carbon-components-react';
import React from 'react';

import { meta, patterns } from '../../../../.storybook';
import { LayoutBackground } from '../../..';

export const layoutBackground = () => (
  <Grid>
    <Row>
      <LayoutBackground>
        <Column>LayoutBackground</Column>
      </LayoutBackground>
    </Row>
  </Grid>
);

export default meta(
  patterns('UNSTABLE LayoutModules'),
  'Create common, modular, page layouts to deliver consistent cross-portfolio experiences to our users while facilitating a faster time to market for offering teams.'
);
