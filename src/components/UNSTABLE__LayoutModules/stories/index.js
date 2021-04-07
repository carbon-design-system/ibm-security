/**
 * @file Story information.
 * @copyright IBM Security 2020 - 2021
 */

import { layoutModules } from '../../../../.storybook';

export default ({ displayName, name }) => layoutModules(displayName || name);
