import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';

import { Portal } from '../../..';

describe('Portal', () => {
  test('should have no Axe or DAP violations with overlay', async () => {
    const main = document.createElement('main');
    render(
      <div>
        <section>
          <button>test button outside portal</button>
        </section>
        <Portal>
          <section>
            <button>test button inside portal</button>
          </section>
        </Portal>
      </div>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('Portal with overlay');
  });

  test('should have no Axe or DAP violations without overlay', async () => {
    const main = document.createElement('main');
    render(
      <div>
        <section>
          <button>test button outside portal</button>
        </section>
        <Portal hasOverlay={false}>
          <section>
            <button>test button inside portal</button>
          </section>
        </Portal>
      </div>,
      {
        // DAP requires a landmark '<main>' in the DOM:
        container: document.body.appendChild(main),
      }
    );
    await expect(document.body).toHaveNoAxeViolations();
    await expect(document.body).toHaveNoDAPViolations('Portal without overlay');
  });

  test('should set initial focus', () => {
    const { getByText } = render(
      <Portal initialFocus="#test-button-2">
        <section>
          <button>test button 1</button>
          <button id="test-button-2">test button 2</button>
        </section>
      </Portal>
    );

    userEvent.tab();
    expect(getByText(/test button 2/i)).toHaveFocus();
  });

  test('should not stop events bubbling up by default', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Portal>
        <section>
          <button onClick={onClickMock}>test button</button>
        </section>
      </Portal>
    );

    userEvent.click(getByText(/test button/i));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('should stop events bubbling up when `stopProgation` is `true`', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Portal stopPropagation>
        <section>
          <button onClick={onClickMock}>test button</button>
        </section>
      </Portal>
    );

    userEvent.click(getByText(/test button/i));
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });

  test('should stop specific events from bubbling up with `stopPropagationEvents`', () => {
    const onMouseDownMock = jest.fn();
    const onMouseUpMock = jest.fn();

    const { getByText } = render(
      <Portal stopPropagationEvents={['onMouseUp']}>
        <section>
          <button
            id="test-button"
            onMouseDown={onMouseDownMock}
            onMouseUp={onMouseUpMock}
          >
            test button
          </button>
        </section>
      </Portal>
    );

    // userEvent.click(getByText(/test button/i));
    fireEvent.mouseDown(getByText(/test button/i));
    fireEvent.mouseUp(getByText(/test button/i));

    // Expect to be called:
    expect(onMouseDownMock).toHaveBeenCalledTimes(1);

    // Expect to NOT be called, because the even is blocked:
    expect(onMouseUpMock).toHaveBeenCalledTimes(0);
  });
});
