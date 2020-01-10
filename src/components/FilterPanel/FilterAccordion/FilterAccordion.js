import React from 'react';
import PropTypes from 'prop-types';

import { Accordion } from '../../Accordion';
import { getComponentNamespace } from '../../../globals/namespace';
import FilterLabel from '../FilterLabel/FilterLabel';

const namespace = getComponentNamespace('filter-accordion');

const FilterAccordion = ({ title, count, children }) => (
  <div className={namespace}>
    {title && (
      <h2 className={`${namespace}__title`}>
        <FilterLabel count={count}>{title}</FilterLabel>
      </h2>
    )}
    <Accordion>{children}</Accordion>
  </div>
);

FilterAccordion.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  children: PropTypes.node,
};

FilterAccordion.defaultProps = {
  title: undefined,
  count: undefined,
  children: undefined,
};

export default FilterAccordion;
