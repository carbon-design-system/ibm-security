/**
 * @file Filter Search tests.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { shallow } from 'enzyme';
import FilterSearch from '../FilterSearch';
import {
  filterData,
  noFiltersResultsLabel,
  filterSearchLabel,
  labels,
} from '../../_mocks_';

const props = {
  filterData,
  labels,
  onChange: () => {},
};

const uniqueProps = {
  noFiltersResultsLabel,
  filterSearchLabel,
};

describe('FilterSearch', () => {
  describe('Rendering', () => {
    it('renders', () =>
      expect(shallow(<FilterSearch {...props} />)).toMatchSnapshot());

    it('accepts initial search value', () =>
      expect(
        shallow(<FilterSearch {...props} initialSearchValue="filter 10" />)
      ).toMatchSnapshot());

    it('displays message when no filters match search value', () => {
      const wrapper = shallow(
        <FilterSearch
          {...props}
          initialSearchValue="should not match a filter"
        />
      );
      expect(wrapper).toMatchSnapshot();
    });

    it('partially matches any string', () => {
      const wrapper = shallow(
        <FilterSearch {...props} initialSearchValue="FiLTer 1" />
      );
      expect(wrapper).toMatchSnapshot();
      expect(wrapper).toMatchSnapshot();
    });

    it('should not overwrite `labels` when unique props defined', () => {
      const wrapper = shallow(<FilterSearch {...props} {...uniqueProps} />);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('displays search results when value typed in', () => {
      const wrapper = shallow(<FilterSearch {...props} />);
      wrapper
        .find('Search')
        .simulate('change', { target: { value: 'filter 10' } });
      expect(wrapper).toMatchSnapshot();
    });

    it('hides results when filter has been toggled', () => {
      const wrapper = shallow(
        <FilterSearch {...props} initialSearchValue="filter 10" />
      );
      wrapper
        .find('FilterSelector')
        .at(0)
        .simulate('change');
      expect(wrapper).toMatchSnapshot();
    });

    it('invokes onChange when filter is toggled', () => {
      const onChange = jest.fn();
      const wrapper = shallow(
        <FilterSearch
          {...props}
          onChange={onChange}
          initialSearchValue="filter 10"
        />
      );
      const filterSelector = wrapper.find('FilterSelector').at(0);
      const filterObject = filterSelector.prop('filter');

      filterSelector.simulate('change', filterObject);
      expect(onChange).toHaveBeenCalledWith(filterObject);
    });
  });
});
