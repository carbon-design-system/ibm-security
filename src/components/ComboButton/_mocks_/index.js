/**
 * @file Combo button mocks.
 * @copyright IBM Security 2019
 */

import { ArrowRight20, FolderDetails20 } from '@carbon/icons-react';

const actions = [
  {
    label: 'Start a task',
    iconDescription: 'arrow right',
    renderIcon: ArrowRight20,
    onClick: () => {},
  },
  {
    label: 'Add to folder',
    renderIcon: FolderDetails20,
    onClick: () => {},
  },
];

export default actions;
