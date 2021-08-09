/**
 * @file Decorators.
 * @copyright IBM Security 2020
 */

import React from 'react';

export default (story) => <div className="decorator">{story()}</div>;
