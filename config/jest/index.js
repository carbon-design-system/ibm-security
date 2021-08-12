/**
 * @file Jest configuration.
 * @copyright IBM Security 2019 - 2021
 */

import '@testing-library/jest-dom';
import { configure } from '@testing-library/dom';

import { configure as enzyme } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import toBeAccessible from './matchers/toBeAccessible';
import toHaveNoAxeViolations from './matchers/toHaveNoAxeViolations';

configure({ testIdAttribute: 'data-test-id' });
enzyme({ adapter: new Adapter() });

// We can extend `expect` using custom matchers as defined by:
// https://jest-bot.github.io/jest/docs/expect.html#expectextendmatchers
//
// As recommended by `jest-extended`
// (https://github.com/jest-community/jest-extended) we're going to place this
// inside of the `setupFilesAfterEnv` option for Jest. If we used the default
// `setupFiles` option, we would be unable to hook into the testing framework
// that is loaded in after those files are run.
//
// For more information, check out the docs here:
// https://jestjs.io/docs/en/configuration.html#setupfilesafterenv-array
expect.extend({ toBeAccessible, toHaveNoAxeViolations });

const { fn } = jest;

// https://github.com/nickcolley/jest-axe/issues/147
const { getComputedStyle } = window;
window.getComputedStyle = fn((element) => getComputedStyle(element));

window.ResizeObserver = fn().mockImplementation(() => ({
  disconnect: fn(),
  observe: fn(),
}));
