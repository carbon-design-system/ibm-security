/**
 * @file Combo button item.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Button from '../../Button';
import OverflowMenuItem from '../../OverflowMenuItem';

import { namespace as comboButtonNamespace } from '../ComboButton';

export const namespace = `${comboButtonNamespace}__item`;

class ComboButtonItem extends Component {
  render() {
    const {
      primary,
      renderIcon: Icon,
      children,
      className,
      onClick,
      iconDescription,
      ...other
    } = this.props;
    const classNames = classnames(
      namespace,
      { [`${namespace}--primary`]: primary },
      className
    );

    if (primary) {
      return (
        <Button
          className={classNames}
          renderIcon={Icon}
          onClick={onClick}
          iconDescription={iconDescription}
          {...other}
        >
          {children}
        </Button>
      );
    }

    return (
      <OverflowMenuItem {...other} className={classNames} itemText={children} />
    );
  }
}

ComboButtonItem.propTypes = {
  primary: PropTypes.bool,
  className: PropTypes.string,
  renderIcon: PropTypes.node,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  iconDescription: PropTypes.string,
};

export default ComboButtonItem;
