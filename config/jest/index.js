/**
 * @file Enzyme configuration.
 * @copyright IBM Security 2018
 */

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
