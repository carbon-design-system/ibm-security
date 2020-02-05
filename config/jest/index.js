/**
 * @file Jest configuration.
 * @copyright IBM Security 2019
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';

// Custom matchers - https://jest-bot.github.io/jest/docs/expect.html#expectextendmatchers
import toHaveNoAxeViolations from './matchers/toHaveNoAxeViolations';
import toHaveNoDAPViolations from './matchers/toHaveNoDAPViolations';

configure({ adapter: new Adapter() });
expect.extend({ toHaveNoAxeViolations, toHaveNoDAPViolations });
