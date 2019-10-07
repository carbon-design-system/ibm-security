/**
 * @file Summary card primary action.
 * @copyright IBM Security 2019
 */

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Button from '../../Button';
import Icon from '../../Icon';
import Loading from '../../Loading';

import { getComponentNamespace } from '../../../globals/namespace/index';

const namespace = getComponentNamespace('summary-card-primary-action');

const SummaryCardPrimaryAction = ({
  className,
  disabled,
  expandable,
  label,
  loading,
  renderIcon,
}) => {
  const loadingIcon = (
    <Loading small withOverlay={false} className={`${namespace}--loading`} />
  );

  if (expandable) {
    return (
      <Button
        className={classnames(namespace, className)}
        kind="ghost"
        onClick={this.toggleOpen}
        renderIcon={!loading && renderIcon}
        disabled={disabled}
      >
        <Fragment>
          <div className={`${namespace}__label`}>{label}</div>
          {loading && loadingIcon}
        </Fragment>
      </Button>
    );
  }

  return (
    <div className={classnames(namespace, className)}>
      <div className={`${namespace}__label`}>{label}</div>
      {loading && loadingIcon}
      {renderIcon && !loading && <Icon renderIcon={renderIcon} />}
    </div>
  );
};

SummaryCardPrimaryAction.propTypes = {
  /** @type {string} Extra class names to add. */
  className: PropTypes.string,

  /** @type {boolean} Whether or not the action is disabled. */
  disabled: PropTypes.boolean,

  /** @type {boolean} Whether or not the action can open the footer to display expandable content. */
  expandable: PropTypes.boolean,

  /** @type {string} The button text contents or the accessible label on an icon-only action. */
  label: PropTypes.string.isRequired,

  /** @type {boolean} Whether or not the action is loading. */
  loading: PropTypes.boolean,

  /** @type {function|object} Icon to render. */
  renderIcon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

SummaryCardPrimaryAction.defaultProps = {
  className: '',
  disabled: false,
  expandable: false,
  loading: false,
  renderIcon: null,
};

export default SummaryCardPrimaryAction;
