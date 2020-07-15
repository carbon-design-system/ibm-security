/**
 * @file Jest configuration.
 * @copyright IBM Security 2019 - 2020
 */

import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import toHaveNoAxeViolations from './matchers/toHaveNoAxeViolations';
import toHaveNoDAPViolations from './matchers/toHaveNoDAPViolations';

Enzyme.configure({ adapter: new Adapter() });

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
expect.extend({ toHaveNoAxeViolations, toHaveNoDAPViolations });
