/**
 * @file Accordion tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';

import { carbonPrefix } from '../../../globals/namespace';

import { Accordion, AccordionItem } from '../../..';

describe('Accordion', () => {
  test('should have icon aligned at start by default', () => {
    const { getByLabelText, getByText } = render(
      <Accordion>
        <AccordionItem title="test title" iconDescription="test icon label">
          test content
        </AccordionItem>
      </Accordion>
    );
    // Expect accordion to have correct alignment class:
    expect(getByText(/test title/i).closest('ul')).toHaveClass(
      `${carbonPrefix}accordion--start`
    );
    // Expect the icon to be first inside the accordion item heading button:
    expect(getByText(/test title/i).closest('button').firstChild).toBe(
      getByLabelText(/test icon label/i)
    );
  });

  test('should pass custom class through spread attribute', () => {
    const { getByText } = render(
      <Accordion className="custom-class">
        <AccordionItem title="test title">test content</AccordionItem>
      </Accordion>
    );
    expect(getByText(/test title/i).closest('ul')).toHaveClass('custom-class');
  });
});
