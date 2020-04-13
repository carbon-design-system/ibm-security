/**
 * @file Filter panel accordion item component.
 * @copyright IBM Security 2020
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { AccordionItem } from '../../Accordion';
import { getComponentNamespace } from '../../../globals/namespace';
import FilterPanelLabel from '../FilterPanelLabel';
import theme from '../../../globals/theme';
import TruncatedList from '../../TruncatedList';

const namespace = getComponentNamespace('filter-panel-accordion-item');

const FilterPanelAccordionItem = ({
  children,
  title,
  expandLabel,
  collapseLabel,
  scrollGradientColor,
  count,
  countLabel,
  className,
  ...other
}) => {
  return (
    <AccordionItem
      title={
        <FilterPanelLabel
          count={count}
          countLabel={countLabel}
          className={`${namespace}__label`}
          countClassName={`${namespace}__count`}
        >
          {title}
        </FilterPanelLabel>
      }
      className={classnames(namespace, className)}
      {...other}
    >
      <TruncatedList
        className={`${namespace}__list`}
        expandLabel={expandLabel}
        collapseLabel={collapseLabel}
        scrollGradientColor={scrollGradientColor}
      >
        {Children.map(children, child => (
          <li className={`${namespace}__filter`} key={child.key}>
            {child}
          </li>
        ))}
      </TruncatedList>
    </AccordionItem>
  );
};

FilterPanelAccordionItem.propTypes = {
  /**
   * Accordion item title.
   */
  title: PropTypes.node,

  /**
   * View more label for truncated content.
   */
  expandLabel: PropTypes.string,

  /**
   * View less label for expanded content.
   */
  collapseLabel: PropTypes.string,

  /**
   * Accordion item content.
   */
  children: PropTypes.node,

  /**
   * Optional color for the scroll gradient.
   */
  scrollGradientColor: PropTypes.string,

  /**
   * Optional count of unique values.
   */
  count: PropTypes.number,

  /**
   * Function returning a translated text labeling the count for accessibility.
   */
  countLabel: PropTypes.func,

  /**
   * Optional class name.
   */
  className: PropTypes.string,
};

FilterPanelAccordionItem.defaultProps = {
  title: 'title',
  expandLabel: 'expandLabel',
  collapseLabel: 'collapseLabel',
  children: undefined,
  scrollGradientColor: theme.uiBackground,
  count: undefined,
  countLabel: count => `${count} items`,
  className: undefined,
};

export default FilterPanelAccordionItem;
