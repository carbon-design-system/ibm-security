/**
 * @file DataDecorator constants.
 * @copyright IBM Security 2019
 */

import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('decorator');

const unknown = `M2,8a6,6 0 1,0 12,0a6,6 0 1,0 -12,0`;

const low = `M 8.00,3.00
           C 8.00,3.00 14.00,12.00 14.00,12.00
             14.00,12.00 2.00,12.00 2.00,12.00
             2.00,12.00 8.00,3.00 8.00,3.00 Z`;

const medium = `M 8.00,1.00
           C 8.00,1.00 15.00,8.00 15.00,8.00
             15.00,8.00 8.00,15.00 8.00,15.00
             8.00,15.00 1.00,8.00 1.00,8.00
             1.00,8.00 8.00,1.00 8.00,1.00 Z`;

const high = `M 14.00,2.00
           C 14.00,2.00 14.00,14.00 14.00,14.00
             14.00,14.00 2.00,14.00 2.00,14.00
             2.00,14.00 2.00,2.00 2.00,2.00
             2.00,2.00 14.00,2.00 14.00,2.00 Z`;

const icons = {
  high,
  low,
  medium,
  unknown,
};

export { icons, namespace };
