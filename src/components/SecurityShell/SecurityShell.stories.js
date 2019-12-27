/**
 * @file Shell stories.
 * @copyright IBM Security 2019
 */

import Help20 from '@carbon/icons-react/lib/help/20';
import Menu20 from '@carbon/icons-react/lib/menu/20';
import Settings20 from '@carbon/icons-react/lib/settings/20';

import React from 'react';

import { disableCentered, patterns, meta } from '../../../.storybook';

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
      <SecurityShellToolbarAction aria-label="Toggle menu" renderIcon={Menu20}>
        SecurityShellToolbarAction 1
      </SecurityShellToolbarAction>
      <SecurityShellToolbarAction
        aria-label="Toggle settings"
        renderIcon={Settings20}
      >
        SecurityShellToolbarAction 2
      </SecurityShellToolbarAction>
      <SecurityShellToolbarAction aria-label="Toggle help" renderIcon={Help20}>
        SecurityShellToolbarAction 3
      </SecurityShellToolbarAction>
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

export default meta(
  patterns('SecurityShell'),
  'SecurityShell',
  disableCentered()
);
