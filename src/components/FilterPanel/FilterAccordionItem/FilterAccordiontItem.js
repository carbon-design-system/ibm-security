/**
 * @file Filter accordion item component.
 * @copyright IBM Security 2020
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Add16 from '@carbon/icons-react/lib/add/16';
import Subtract16 from '@carbon/icons-react/lib/subtract/16';
import { g100 as theme } from '@carbon/themes';

import ScrollGradient from '../../ScrollGradient';
import { AccordionItem } from '../../Accordion';
import Button from '../../Button';
import { getComponentNamespace } from '../../../globals/namespace';
import FilterLabel from '../FilterLabel/FilterLabel';

export const namespace = getComponentNamespace('filter-accordion-item');

const FilterAccordionItem = ({
  children,
  expandLabel,
  collapseLabel,
  title,
  open,
  scrollGradientColor,
  count,
  className,
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
        <FilterLabel
          count={count}
          className={`${namespace}__label`}
          countClassName={`${namespace}__count`}
        >
          {title}
        </FilterLabel>
      }
      className={classnames(namespace, className)}
      open={open}
    >
      <ul className={`${namespace}__list`}>
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
            {childrenArray.slice(0, displayCount).map(child => (
              <li className={`${namespace}__list-item`} key={child.key}>
                {child}
              </li>
            ))}
          </div>
          {shouldTruncate && isExpanded && (
            <div
              role="presentation"
              className={`${namespace}__list-items ${namespace}__list-items--hidden`}
            >
              {childrenArray.slice(displayCount).map(child => (
                <li className={`${namespace}__filter`} key={child.key}>
                  {child}
                </li>
              ))}
            </div>
          )}
        </ScrollGradient>
      </ul>
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

FilterAccordionItem.propTypes = {
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
   * Optional class name.
   */
  className: PropTypes.string,
};

FilterAccordionItem.defaultProps = {
  title: 'title',
  expandLabel: 'expandLabel',
  collapseLabel: 'collapseLabel',
  children: undefined,
  open: false,
  scrollGradientColor: theme.uiBackground,
  count: undefined,
  className: undefined,
};

export default FilterAccordionItem;
