/**
 * @file Filter Panel utility tests.
 * @copyright IBM Security 2019
 */

import { filterData } from '../../_mocks_';
import {
  getFilterCategoriesArray,
  getFilterSubcategoriesArray,
  getFiltersArray,
  getSelectedFiltersArray,
} from '../FilterPanelUtilities';

describe('FilterPanelUtilities', () => {
  it('getFilterCategoriesArray gets array of categories', () =>
    expect(getFilterCategoriesArray(filterData)).toMatchSnapshot());

  it('getFilterSubcategoriesArray gets array of subcategories', () =>
    expect(getFilterSubcategoriesArray(filterData)).toMatchSnapshot());

  it('getFiltersArray gets array of filters', () =>
    expect(getFiltersArray(filterData)).toMatchSnapshot());

  it('getSelectedFiltersArray gets array of filters', () => {
    expect(getSelectedFiltersArray(filterData)).toMatchSnapshot();
  });
});
