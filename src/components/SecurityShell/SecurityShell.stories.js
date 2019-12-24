/**
 * @file Shell stories.
 * @copyright IBM Security 2019
 */

import React from 'react';

import { patterns, meta } from '../../../.storybook';

import {
  SecurityShell,
  SecurityShellHeader,
  SecurityShellHeaderAction,
  SecurityShellHeaderActions,
  SecurityShellHeaderName,
  SecurityShellToolbar,
  SecurityShellToolbarAction,
} from '../..';

export const Default = () => (
  <SecurityShell>
    <SecurityShellToolbar>
      <SecurityShellToolbarAction>Action 1</SecurityShellToolbarAction>
      <SecurityShellToolbarAction>Action 2</SecurityShellToolbarAction>
      <SecurityShellToolbarAction>Action 3</SecurityShellToolbarAction>
    </SecurityShellToolbar>

    <SecurityShellHeader>
      <SecurityShellHeaderName href="#" offering="Cloud Pak for" prefix="IBM">
        Security
      </SecurityShellHeaderName>

      <SecurityShellHeaderActions>
        <SecurityShellHeaderAction>Action 1</SecurityShellHeaderAction>
        <SecurityShellHeaderAction>Action 2</SecurityShellHeaderAction>
        <SecurityShellHeaderAction>Action 3</SecurityShellHeaderAction>
      </SecurityShellHeaderActions>
    </SecurityShellHeader>
  </SecurityShell>
);

export default meta(patterns('SecurityShell'));
