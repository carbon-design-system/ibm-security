/**
 * @file Filter Subcategory.
 * @copyright IBM Security 2019
 */

import Add16 from '@carbon/icons-react/lib/add/16';
import Subtract16 from '@carbon/icons-react/lib/subtract/16';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as defaultLabels from '../../../globals/nls';
import { getComponentNamespace } from '../../../globals/namespace';
import theme from '../../../globals/themes';

import { AccordionItem } from '../../Accordion';
import Button from '../../Button';
import FilterSelector from '../FilterSelector';
import {
  filterSubcategoryPropTypes,
  filterDataPropTypes,
} from '../FilterPanelUtilities';
import ScrollGradient from '../../ScrollGradient';

export const namespace = getComponentNamespace('filter-subcategory');

class FilterSubcategory extends Component {
  static visibleFiltersContainerClassName = `${namespace}__filters--visible`;

  state = { isExpanded: false };

  componentDidMount = () => this.updateListContainerHeight();

  componentDidUpdate = () => this.updateListContainerHeight();

  /**
   * Saves reference to scrolling element.
   * @param {HTMLElement} element Element to save reference to.
   */
  setReference = element => {
    this.listContainer = element;
  };

  /**
   * @type {HTMLElement} Reference to list container.
   */
  listContainer = null;

  /**
   * Toggles the expanded state of this component.
   */
  toggleExpand = () => this.setState({ isExpanded: !this.state.isExpanded });

  /**
   * Updates height of filter list container so that only a certain number of filters are displayed
   * at once.
   */
  updateListContainerHeight = () => {
    const { listContainer } = this;
    if (listContainer) {
      listContainer.style.height = `${
        listContainer.querySelector(
          `.${FilterSubcategory.visibleFiltersContainerClassName}`
        ).clientHeight
      }px`;
    }
  };

  render() {
    const {
      filterData,
      subcategory,
      onChange,
      labels,
      filtersExpandLabel,
      filtersCollapseLabel,
    } = this.props;
    const { isExpanded } = this.state;
    const filters = subcategory.filters
      .map(filterId => filterData.filters[filterId])
      .filter(filter => filter.count > 0);

    const componentLabels = {
      ...defaultLabels.labels,
      ...defaultLabels.filterFalsey({
        FILTER_PANEL_CATEGORY_EXPAND_LABEL: filtersExpandLabel,
        FILTER_PANEL_CATEGORY_COLLAPSE_LABEL: filtersCollapseLabel,
      }),
      ...labels,
    };

    const shouldTruncate = filters.length > 10;

    let displayCount = shouldTruncate ? 5 : filters.length;
    if (shouldTruncate && isExpanded) {
      displayCount = 10;
    }

    const buttonLabel = isExpanded
      ? componentLabels.FILTER_PANEL_CATEGORY_COLLAPSE_LABEL
      : componentLabels.FILTER_PANEL_CATEGORY_EXPAND_LABEL;

    return (
      <AccordionItem
        title={subcategory.name}
        className={namespace}
        open={subcategory.open}
      >
        <ul className={`${namespace}__filter-list`}>
          <ScrollGradient
            scrollElementClassName={`${namespace}__scroller`}
            color={theme.uiBackground}
            getScrollElementRef={this.setReference}
          >
            <div
              role="presentation"
              className={`${namespace}__filters ${FilterSubcategory.visibleFiltersContainerClassName}`}
            >
              {filters.slice(0, displayCount).map(filter => (
                <li className={`${namespace}__filter`} key={filter.id}>
                  <FilterSelector filter={filter} onChange={onChange} />
                </li>
              ))}
            </div>
            {shouldTruncate && isExpanded && (
              <div
                role="presentation"
                className={`${namespace}__filters ${namespace}__filters--hidden`}
              >
                {filters.slice(displayCount).map(filter => (
                  <li className={`${namespace}__filter`} key={filter.id}>
                    <FilterSelector filter={filter} onChange={onChange} />
                  </li>
                ))}
              </div>
            )}
          </ScrollGradient>
        </ul>
        {shouldTruncate && (
          <Button
            className={`${namespace}__button--toggle`}
            iconDescription={buttonLabel}
            kind="ghost"
            onClick={this.toggleExpand}
            renderIcon={isExpanded ? Subtract16 : Add16}
          >
            {isExpanded
              ? buttonLabel
              : `${buttonLabel} (${filters.length - displayCount})`}
          </Button>
        )}
      </AccordionItem>
    );
  }
}

FilterSubcategory.propTypes = {
  /** @type {string} Label for truncated filters list to expand */
  filtersExpandLabel: PropTypes.string,

  /** @type {string} Label for expanded filters list to collapse */
  filtersCollapseLabel: PropTypes.string,

  /** @type {(filter: Filter) => {}} Callback function when any filter is toggled */
  onChange: PropTypes.func,

  /** @type {FilterSubcategory} Subcategory to render */
  subcategory: filterSubcategoryPropTypes.isRequired,

  /** @type {FilterData}  Filter data to used to render panel */
  filterData: filterDataPropTypes.isRequired,

  /** @type {object} Labels for filter panel and search */
  labels: defaultLabels.propType,
};

FilterSubcategory.defaultProps = {
  onChange: () => {},
  filtersExpandLabel: '',
  filtersCollapseLabel: '',
  labels: {},
};

export default FilterSubcategory;
