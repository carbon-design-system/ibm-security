/**
 * @file Breadcrumb page title.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';

import {
  arrayOf,
  bool,
  elementType,
  instanceOf,
  shape,
  string,
} from 'prop-types';

import React, { createElement, useLayoutEffect, useRef } from 'react';

import { getComponentNamespace } from '../../globals/namespace';
import { isClient } from '../../globals/utils/capabilities';

import { Breadcrumb, BreadcrumbItem } from '../Breadcrumb';

const namespace = getComponentNamespace('breadcrumb-page-title');

const BreadcrumbPageTitle = ({
  'aria-label': ariaLabel,
  className,
  element,
  isTitleVisible,
  path,
  root,
  title,
  ...other
}) => {
  const Title = props => createElement(element, props, title);

  const ref = useRef(null);

  useLayoutEffect(() => {
    const onScroll = () => {
      const { bottom, height } = ref.current.getBoundingClientRect();

      console.log(root.scrollY > bottom + height);
    };

    if (isClient()) {
      root.addEventListener('scroll', onScroll);
    }

    return () => isClient() && root.removeEventListener('scroll', onScroll);
  });

  return (
    <div className={classnames(namespace, className)} {...other}>
      <div ref={ref}>
        <Breadcrumb aria-label={ariaLabel} noTrailingSlash>
          {path.map(({ children, href, id }) => (
            <BreadcrumbItem key={id} href={href}>
              {children}
            </BreadcrumbItem>
          ))}

          {isTitleVisible && (
            <BreadcrumbItem isCurrentPage>
              <Title />
            </BreadcrumbItem>
          )}
        </Breadcrumb>
      </div>

      {isTitleVisible || <Title className={`${namespace}__title`} />}
    </div>
  );
};

BreadcrumbPageTitle.propTypes = {
  /** Specify the text of the title */
  title: string.isRequired,

  path: arrayOf(shape({ id: string.isRequired, ...BreadcrumbItem.propTypes }))
    .isRequired,

  /** Specify the label for the breadcrumb container */
  'aria-label': string.isRequired,

  /** Determines whether or not the title is visible */
  isTitleVisible: bool,

  /** Specify the root to attach event listeners to */
  root: instanceOf(Node),

  /** Specify the base element to use to build the title */
  element: elementType,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

BreadcrumbPageTitle.defaultProps = {
  isTitleVisible: false,
  root: isClient() && window,
  element: 'h1',
  className: null,
};

export default BreadcrumbPageTitle;
