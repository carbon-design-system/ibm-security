/**
 * @file Header popover header.
 * @copyright IBM Security 2019
 */

import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { appendComponentNamespace } from '../../../globals/namespace';
import { namespace as headerNamespace } from '../constants';

const namespace = appendComponentNamespace(headerNamespace, 'popover__header');

/**
 * Header popover header component.
 * @param {Object.<string, *>} props Header popover header props.
 * @returns {HeaderPopoverHeader} Header popover header instance.
 */
const HeaderPopoverHeader = ({ children, className, title }) => (
  <section className={classnames(namespace, className)}>
    {title && <span className={`${namespace}__title`}>{title}</span>}
    {children}
  </section>
);

HeaderPopoverHeader.defaultProps = {
  children: null,
  className: '',
  title: '',
};

HeaderPopoverHeader.propTypes = {
  /** @type {HTMLElement} Children. */
  children: PropTypes.element,

  /** @type {string} Extra classes. */
  className: PropTypes.string,

  /** @type {string} Title. */
  title: PropTypes.string,
};

export default HeaderPopoverHeader;
