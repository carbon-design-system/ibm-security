/**
 * @file Filter panel accordion item component.
 * @copyright IBM Security 2020
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Add16 from '@carbon/icons-react/lib/add/16';
import Subtract16 from '@carbon/icons-react/lib/subtract/16';

import ScrollGradient from '../../ScrollGradient';
import { AccordionItem } from '../../Accordion';
import Button from '../../Button';
import { getComponentNamespace } from '../../../globals/namespace';
import FilterPanelLabel from '../FilterPanelLabel';
import theme from '../../../globals/theme';

export const namespace = getComponentNamespace('filter-panel-accordion-item');

const FilterPanelAccordionItem = ({
  children,
  expandLabel,
  collapseLabel,
  title,
  open,
  scrollGradientColor,
  count,
  countLabel,
  className,
  ...other
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [listContainer, setListContainer] = React.useState(null);
  const visibleChildren = React.useRef(null);

  const childrenLength = Children.count(children);
  const shouldTruncate = childrenLength > 10;

  const getDisplayCount = () => {
    if (!shouldTruncate) {
      return childrenLength;
    }

    if (isExpanded) {
      return 10;
    }

    return 5;
  };

  const displayCount = getDisplayCount();

  // After the component's expanded state has changed update the height of the list container to be
  // the same as its visible children set.
  React.useEffect(() => {
    if (shouldTruncate && listContainer && visibleChildren.current) {
      listContainer.style.height = `${visibleChildren.current.clientHeight}px`;
    }
  }, [isExpanded]);

  const handleExpand = () => {
    // Pre-set the height of the list container to its own current height so we can smoothly
    // transition into its new height in the React Effect hook.
    if (listContainer && visibleChildren.current) {
      listContainer.style.height = `${listContainer.clientHeight}px`;
    }
    setIsExpanded(!isExpanded);
  };

  const childrenArray = Children.toArray(children);
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
      open={open}
      {...other}
    >
      <ScrollGradient
        scrollElementClassName={`${namespace}__scroller`}
        getScrollElementRef={setListContainer}
        color={scrollGradientColor}
      >
        <div
          role="presentation"
          ref={visibleChildren}
          className={`${namespace}__list-items ${namespace}__list-items--visible`}
        >
          <ul className={`${namespace}__list`}>
            {childrenArray.slice(0, displayCount).map(child => (
              <li className={`${namespace}__list-item`} key={child.key}>
                {child}
              </li>
            ))}
          </ul>
        </div>
        {shouldTruncate && isExpanded && (
          <div
            role="presentation"
            className={`${namespace}__list-items ${namespace}__list-items--hidden`}
          >
            <ul className={`${namespace}__list`}>
              {childrenArray.slice(displayCount).map(child => (
                <li className={`${namespace}__filter`} key={child.key}>
                  {child}
                </li>
              ))}
            </ul>
          </div>
        )}
      </ScrollGradient>
      {shouldTruncate && (
        <Button
          className={`${namespace}__button--toggle`}
          iconDescription=""
          kind="ghost"
          onClick={handleExpand}
          renderIcon={isExpanded ? Subtract16 : Add16}
        >
          {isExpanded
            ? collapseLabel
            : `${expandLabel} (${childrenLength - displayCount})`}
        </Button>
      )}
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
   * Whether or no the accordion item should render open by default.
   */
  open: PropTypes.bool,

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
  open: false,
  scrollGradientColor: theme.uiBackground,
  count: undefined,
  countLabel: count => `${count} items`,
  className: undefined,
};

export default FilterPanelAccordionItem;
