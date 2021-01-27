/**
 * @file Example background container.
 * @copyright IBM Security 2021
 */

import classnames from 'classnames';
import React from 'react';

const className = 'container--example';

export default ({ narrow, ...props }) => (
  <section
    className={classnames(className, {
      [`${className}--narrow`]: narrow,
    })}
    {...props}
  />
);
