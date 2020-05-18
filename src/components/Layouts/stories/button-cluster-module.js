/**
 * @file Button cluster module story.
 * @copyright IBM Security 2020
 */

import React from 'react';

import { Grid, Row, Column } from 'carbon-components-react';

import Activity from '@carbon/icons-react/lib/activity/32';
import Close from '@carbon/icons-react/lib/close/32';
import Copy from '@carbon/icons-react/lib/copy/32';
import Edit from '@carbon/icons-react/lib/edit/32';

import Button from '../../Button';

const story = () => (
  <Grid condensed>
    <Row>
      <Column lg={4}>
        <div className="security--padding-bottom--layout-03">
          <Button kind="ghost" renderIcon={Edit}>
            Edit settings
          </Button>
          <Button kind="ghost" renderIcon={Copy}>
            Duplicate campaign
          </Button>
          <Button kind="ghost" renderIcon={Activity}>
            View activity report
          </Button>
          <Button kind="ghost" renderIcon={Close}>
            Cancel campaign
          </Button>
        </div>
      </Column>
    </Row>
  </Grid>
);

export default story;
