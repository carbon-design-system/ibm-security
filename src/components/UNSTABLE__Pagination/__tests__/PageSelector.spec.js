/**
 * @file Page selector tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { PageSelector } from '../../../..';

import { namespace } from '../PageSelector';

describe('PageSelector', () => {
  test('should have root class with security namespace', () => {
    render(<PageSelector currentPage={1} totalPages={5} />);

    expect(document.querySelector(`.${namespace}`)).toBeInTheDocument();
  });
});
