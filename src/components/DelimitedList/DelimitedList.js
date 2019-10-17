/**
 * @file Delimited List.
 * @copyright IBM Security 2019
 */

import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getComponentNamespace } from '../../globals/namespace';
import { isClient } from '../../globals/utils/capabilities';

const namespace = getComponentNamespace('delimited-list');

/**
 * Delimited List component.
 */
class DelimitedList extends Component {
  state = { hasOverflow: false };

  componentDidMount() {
    if (isClient() && this.props.truncate) {
      this.checkOverflow();
    }
  }

  componentDidUpdate() {
    if (isClient() && this.props.truncate) {
      this.checkOverflow();
    }
  }

  element = createRef();

  checkOverflow = () => {
    if (
      !this.state.hasOverflow &&
      this.element &&
      this.element.current &&
      this.element.current.scrollWidth > this.element.current.clientWidth
    ) {
      this.setState({ hasOverflow: true });
    }
  };

  render() {
    const { className, delimiter, items, truncate } = this.props;

    const classes = classnames(namespace, className);
    const valueClasses = classnames(`${namespace}__value`, {
      [`${namespace}__value--truncated`]: truncate,
    });

    return (
      <div
        className={classes}
        title={this.state.hasOverflow ? items.join(delimiter) : undefined}
      >
        <div ref={this.element} className={valueClasses}>
          {items.length > 0 ? items.join(delimiter) : '–'}
        </div>
        {this.state.hasOverflow && items.length > 0 && (
          <div className={`${namespace}__count`}>{`[${items.length}]`}</div>
        )}
      </div>
    );
  }
}

DelimitedList.propTypes = {
  /** Provide an optional class to be applied to the containing node */
  className: PropTypes.string,

  /** Delimiter used when rendering the items */
  delimiter: PropTypes.string,

  /** Array of items to render */
  items: PropTypes.arrayOf(PropTypes.any),

  /** Specify whether the `DelimitedList` is truncated if it overflows */
  truncate: PropTypes.bool,
};

DelimitedList.defaultProps = {
  className: undefined,
  delimiter: ', ',
  items: [],
  truncate: true,
};

export default DelimitedList;
