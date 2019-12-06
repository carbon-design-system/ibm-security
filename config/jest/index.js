/**
 * @file Jest configuration.
 * @copyright IBM Security 2019
 */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });
