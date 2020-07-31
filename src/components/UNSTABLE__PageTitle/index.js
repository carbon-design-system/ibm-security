/**
 * @file Page title.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { node, string } from 'prop-types';
import React, { forwardRef, useLayoutEffect, useRef, useState } from 'react';

import { getComponentNamespace } from '../../globals/namespace';
import { isClient } from '../../globals/utils/capabilities';

import { Breadcrumb, BreadcrumbItem } from '../Breadcrumb';
import Transition from '../Transition';

export const namespace = getComponentNamespace('page-title');

/**
 * The page title indicates the user's position on a website or platform, depicting hierarchy, facilitating quick transitions, and displaying the navigation of user path.
 */
const PageTitle = ({ children, className, title, ...other }) => {
  const Title = forwardRef((props, ref) => (
    <h1 ref={ref} {...props}>
      {title}
    </h1>
  ));

  const ref = useRef();
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  if (isClient()) {
    useLayoutEffect(() => {
      const { height } = ref.current.getBoundingClientRect();

      const onScroll = () => {
        const { scrollY } = window;
        const calculation = scrollY / height;

        if (calculation < 1) {
          requestAnimationFrame(() => {
            Object.assign(ref.current.style, {
              opacity: 1 - calculation,
              transform: `translate3d(0, -${Math.round(
                (calculation / 2) * 100
              )}%, 0)`,
            });
          });
        }

        setIsTitleVisible(scrollY >= height);
      };

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }, []);
  }

  return (
    <div className={classnames(namespace, className)}>
      <div className={`${namespace}__container`}>
        {(isTitleVisible || children) && (
          <Breadcrumb noTrailingSlash {...other}>
            {children}
            <Transition className={namespace}>
              {isTitleVisible && (
                <BreadcrumbItem isCurrentPage>
                  <Title />
                </BreadcrumbItem>
              )}
            </Transition>
          </Breadcrumb>
        )}
      </div>

      <Title
        className={classnames(`${namespace}__title`, {
          [`${namespace}__title--hidden`]: isTitleVisible,
        })}
        aria-hidden={isTitleVisible}
        ref={ref}
      />
    </div>
  );
};

PageTitle.propTypes = {
  /** Specify the text of the title */
  title: string.isRequired,

  /** Provide the contents of the `PageTitle` */
  children: node,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

PageTitle.defaultProps = {
  children: null,
  className: null,
};

export default PageTitle;
