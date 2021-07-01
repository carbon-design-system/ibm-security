/**
 * @file `ResizeObserver` mock.
 * @copyright IBM Security 2020 - 2021
 */

import ResizeObserver from 'resize-observer-polyfill';

const { fn } = jest;

const disconnectMock = fn();
const observeMock = fn();

jest.mock('resize-observer-polyfill');

ResizeObserver.mockImplementation(() => ({
  disconnect: disconnectMock,
  observe: observeMock,
}));

export { disconnectMock, observeMock, ResizeObserver };
