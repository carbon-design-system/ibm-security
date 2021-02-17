/**
 * @file Story information.
 * @copyright IBM Security 2020 - 2021
 */

import { patterns } from '../../../../.storybook';

export default ({ displayName, name }) =>
  patterns(`Layout Modules/${displayName || name}`);
