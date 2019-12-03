/**
 * @file Filter subcategory tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import {
  MockFilterData,
  filterData,
  filtersExpandLabel,
  filtersCollapseLabel,
  labels,
} from '../../_mocks_';

import { namespace } from '../FilterSubcategory';
import FilterSubcategory from '..';

describe('FilterSubcategory', () => {
  let filterSubcategory;
  const uniqueProps = {
    filtersExpandLabel,
    filtersCollapseLabel,
  };

  beforeEach(() => {
    filterSubcategory = shallow(
      <FilterSubcategory
        filterData={filterData}
        subcategory={MockFilterData.subcategories.DEFAULT}
        labels={labels}
      />
    );
  });

  describe('Rendering', () => {
    it('renders', () => expect(filterSubcategory).toMatchSnapshot());

    it('does not truncate short list of filters', () => {
      filterSubcategory.setProps({
        subcategory: { ...MockFilterData.subcategories.DEFAULT, open: true },
      });
      expect(filterSubcategory).toMatchSnapshot();
    });

    it('truncates long list of filters', () => {
      filterSubcategory.setProps({
        subcategory: { ...MockFilterData.subcategories.TRUNCATED, open: true },
      });
      expect(filterSubcategory).toMatchSnapshot();
    });

    it('does not render with no filters', () => {
      filterSubcategory.setProps({
        subcategory: MockFilterData.subcategories.NO_FILTERS,
      });
      expect(filterSubcategory).toMatchSnapshot();
    });

    it('does not render when count is 0', () => {
      filterSubcategory.setProps({
        subcategory: MockFilterData.subcategories.ZERO_FILTERS_COUNT,
      });
      expect(filterSubcategory).toMatchSnapshot();
    });

    it('renders open subcategory', () => {
      filterSubcategory.setProps({
        subcategory: MockFilterData.subcategories.OPEN,
      });
      expect(filterSubcategory).toMatchSnapshot();
    });

    it('should not override `labels` if unique props are defined', () => {
      filterSubcategory.setProps({ ...uniqueProps });
      expect(filterSubcategory).toMatchSnapshot();
    });
  });

  describe('Events', () => {
    it('expands truncated list of filters', () => {
      filterSubcategory.setProps({
        subcategory: { ...MockFilterData.subcategories.TRUNCATED, open: true },
      });
      filterSubcategory.find(`.${namespace}__button--toggle`).simulate('click');
      expect(filterSubcategory).toMatchSnapshot();
    });

    it('collapses expanded truncated list of filters', () => {
      filterSubcategory.setProps({
        subcategory: { ...MockFilterData.subcategories.TRUNCATED, open: true },
      });
      filterSubcategory.find(`.${namespace}__button--toggle`).simulate('click');
      filterSubcategory.find(`.${namespace}__button--toggle`).simulate('click');
      expect(filterSubcategory).toMatchSnapshot();
    });
  });
});
