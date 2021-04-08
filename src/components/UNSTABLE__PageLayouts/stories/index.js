/**
 * @file Story information.
 * @copyright IBM Security 2020 - 2021
 */

import { layout04 } from '@carbon/layout';
import classnames from 'classnames';
import React from 'react';

import { disableCentered } from '../../../../.storybook';

import {
  CarbonHeader,
  Grid,
  HeaderName,
  InlineNotification,
  NotificationActionButton,
} from '../../..';

export default {
  parameters: {
    ...disableCentered(),
  },
  decorators: [
    story => (
      <>
        <div style={{ height: layout04 }}>
          <CarbonHeader aria-label="IBM Security">
            <HeaderName prefix="IBM">Security</HeaderName>
          </CarbonHeader>
        </div>

        <InlineNotification
          className="page-layouts__banner"
          actions={
            <NotificationActionButton
              href="https://github.com/carbon-design-system/carbon/issues/7717"
              rel="noopener noreferrer"
              target="_blank"
            >
              More info
            </NotificationActionButton>
          }
          kind="info"
          subtitle="Page layouts utilize Carbon CSS Grid updates. They will remain Canary until the 2021 Carbon release."
          title=""
          hideCloseButton
        />

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
