/**
 * @file Card tests.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import { Card } from '../../..';

import { icon } from '../../_mocks_';

describe('Card', () => {
  test('should have no Axe or DAP violations', async () => {
    const main = document.createElement('main');
    render(
      <Card
        header={{
          image: icon,
          tag: 'test tag',
          title: 'test title',
        }}
        label="test label"
        body={{
          text: 'test content',
        }}
        footer={{
          children: <span>test footer</span>,
        }}
      />,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('Card');
  });

  test('should have no Axe or DAP violations when rendered as a link', async () => {
    const main = document.createElement('main');
    render(
      <Card
        header={{
          title: 'test title',
        }}
        link="#"
      />,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('Card as a link');
  });

  test('should invoke click mock when card is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Card
        header={{
          title: 'test title',
        }}
        link="#"
        onClick={onClickMock}
      />
    );

    userEvent.click(getByText(/test title/i));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('should add custom class', () => {
    const { getByText } = render(
      <Card
        header={{
          title: 'test title',
        }}
        className="custom-class"
      />
    );
    expect(getByText(/test title/i).parentNode.parentNode).toHaveClass(
      'custom-class'
    );
  });
});
