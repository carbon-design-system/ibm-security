/**
 * @file Documentation container.
 * @copyright IBM Security 2020
 */

import { Anchor, DocsContainer } from '@storybook/addon-docs/blocks';
import React from 'react';

// https://github.com/storybookjs/storybook/issues/10983
export default ({ children, context }) => (
  <DocsContainer context={context}>
    <Anchor storyId={context.id} />
    {children}
  </DocsContainer>
);
