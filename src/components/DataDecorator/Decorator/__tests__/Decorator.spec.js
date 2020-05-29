/**
 * @file Decorator tests.
 * @copyright IBM Security 2019
 */

import { render } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import { Decorator } from '../../../..';

import { namespace } from '../constants';

describe('Decorator', () => {
  test('should have no Axe or DAP violations when rendered as a button', async () => {
    const main = document.createElement('main');
    render(<Decorator type="IP" value="10.0.0.0" score={0} />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });

    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('Decorator as a button');
  });

  test('should have no Axe or DAP violations when rendered as a link', async () => {
    const main = document.createElement('main');
    render(<Decorator type="IP" value="10.0.0.0" score={0} href="#" />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });

    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('Decorator as a link');
  });

  test('should have no Axe or DAP violations when inert', async () => {
    const main = document.createElement('main');
    render(<Decorator type="IP" value="10.0.0.0" score={0} invert />, {
      // DAP requires a landmark '<main>' in the DOM:
      container: document.body.appendChild(main),
    });

    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('Decorator as inert');
  });

  test('should apply a score', () => {
    const { queryByTitle } = render(
      <Decorator type="IP" value="10.0.0.0" score={5} />
    );
    // Expect svg's `title` text, which is in the DOM but not necessarily visible:
    expect(queryByTitle(/5/i)).toBeInTheDocument();
  });

  test('should apply a score description', () => {
    const { queryByTitle } = render(
      <Decorator
        type="IP"
        value="10.0.0.0"
        score={5}
        scoreDescription={score => `Test score ${score}`}
      />
    );
    // Expect svg's `title` text, which is in the DOM but not necessarily visible:
    expect(queryByTitle(/Test score 5/i)).toBeInTheDocument();
  });

  test('should apply a value', () => {
    const { queryByText } = render(<Decorator type="IP" value="10.0.0.0" />);
    expect(queryByText(/10.0.0.0/i)).toBeVisible();
  });

  test('should apply a `title` attribute to the `value` element via the `title` prop', () => {
    const { queryByTitle } = render(
      <Decorator type="IP" value="10.0.0.0" title="test title" />
    );
    expect(queryByTitle(/test title/i)).toBeInTheDocument();
  });

  test('should accept a custom class', () => {
    const { container } = render(
      <Decorator type="IP" value="10.0.0.0" className="custom-class" />
    );
    expect(container.firstElementChild).toHaveClass('custom-class');
  });

  test('should invoke click mock when decorator is clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Decorator type="IP" value="10.0.0.0" onClick={onClickMock} />
    );

    userEvent.click(getByText(/10.0.0.0/i).closest('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('should apply an href', () => {
    const { getByText } = render(
      <Decorator type="IP" value="10.0.0.0" href="#" />
    );
    expect(getByText(/10.0.0.0/i).closest('a')).toHaveAttribute('href', '#');
  });

  test('should render as a `span` by default', () => {
    const { container } = render(<Decorator type="IP" value="10.0.0.0" />);
    expect(container.firstElementChild.nodeName).toBe('SPAN');
  });

  test('should render as an `a` element when an `href` is provided', () => {
    const { container } = render(
      <Decorator type="IP" value="10.0.0.0" href="#" />
    );
    expect(container.firstElementChild.nodeName).toBe('A');
  });

  test('should render as a `button` when `onClick` is provided', () => {
    const { container } = render(
      <Decorator type="IP" value="10.0.0.0" onClick={() => {}} />
    );
    expect(container.firstElementChild.nodeName).toBe('BUTTON');
  });

  test('should apply correct active class when `active` is set `true`', () => {
    const { container } = render(
      <Decorator type="IP" value="10.0.0.0" active />
    );
    expect(container.firstElementChild).toHaveClass(`${namespace}--active`);
  });

  test('should apply correct inline class when `inline` is set `true`', () => {
    const { container } = render(
      <Decorator type="IP" value="10.0.0.0" inline />
    );
    expect(container.firstElementChild).toHaveClass(`${namespace}--inline`);
  });
});
