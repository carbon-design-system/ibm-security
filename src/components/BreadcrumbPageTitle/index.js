/**
 * @file Breadcrumb page title.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { arrayOf, elementType, shape, string } from 'prop-types';
import React, { createElement, useLayoutEffect, useRef, useState } from 'react';

import { getComponentNamespace } from '../../globals/namespace';
import { isClient } from '../../globals/utils/capabilities';

import { Breadcrumb, BreadcrumbItem } from '../Breadcrumb';
import Transition from '../Transition';

const namespace = getComponentNamespace('breadcrumb-page-title');

const BreadcrumbPageTitle = ({
  'aria-label': ariaLabel,
  className,
  element,
  path,
  title,
  ...other
}) => {
  const Title = props => createElement(element, props, title);

  const ref = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  if (isClient()) {
    useLayoutEffect(() => {
      const onScroll = () =>
        setIsScrolled(
          window.scrollY > ref.current.getBoundingClientRect().height
        );

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    });
  }

  return (
    <div className={classnames(namespace, className)} {...other}>
      <span ref={ref}>
        <Breadcrumb aria-label={ariaLabel} noTrailingSlash>
          {path.map(({ children, href, id }) => (
            <BreadcrumbItem key={id} href={href}>
              {children}
            </BreadcrumbItem>
          ))}

          <Transition className={namespace}>
            {isScrolled && (
              <BreadcrumbItem isCurrentPage>
                <Title />
              </BreadcrumbItem>
            )}
          </Transition>
        </Breadcrumb>
      </span>

      <Transition className={namespace}>
        {!isScrolled && <Title className={`${namespace}__title`} />}
      </Transition>
    </div>
  );
};

BreadcrumbPageTitle.propTypes = {
  /** Specify the text of the title */
  title: string.isRequired,

  /** Specify an array of paths for the breadcrumbs - See also https://react.carbondesignsystem.com/?path=/story/breadcrumb--current-page  */
  path: arrayOf(shape({ id: string.isRequired, ...BreadcrumbItem.propTypes }))
    .isRequired,

  /** Specify the label for the breadcrumb container */
  'aria-label': string.isRequired,

  /** Specify the base element to use to build the title */
  element: elementType,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

BreadcrumbPageTitle.defaultProps = {
  element: 'h1',
  className: null,
};

export default BreadcrumbPageTitle;
