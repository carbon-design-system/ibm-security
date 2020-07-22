/**
 * @file Breadcrumb page title.
 * @copyright IBM Security 2020
 */

import classnames from 'classnames';
import { arrayOf, elementType, shape, string } from 'prop-types';
import React, {
  createElement,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

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
  const Title = forwardRef((props, ref) =>
    createElement(element, { ref, ...props }, title)
  );

  const ref = useRef(null);
  const [isTitleVisible, setIsTitleVisible] = useState(false);

  if (isClient()) {
    useLayoutEffect(() => {
      const { height } = ref.current.getBoundingClientRect();

      const onScroll = () => {
        const { scrollY } = window;
        const calculation = scrollY / height;

        requestAnimationFrame(() => {
          Object.assign(ref.current.style, {
            opacity: 1 - calculation,
            transform: `translate3d(0, -${Math.round(
              (calculation / 2) * 100
            )}%, 0)`,
          });
        });

        setIsTitleVisible(scrollY >= height);
      };

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll);
    }, []);
  }

  return (
    <div className={classnames(namespace, className)} {...other}>
      <Breadcrumb
        className={`${namespace}__breadcrumb`}
        aria-label={ariaLabel}
        noTrailingSlash
      >
        {path &&
          path.map(({ children, href, id }) => (
            <BreadcrumbItem key={id} href={href}>
              {children}
            </BreadcrumbItem>
          ))}

        <Transition className={namespace}>
          {isTitleVisible && (
            <BreadcrumbItem isCurrentPage>
              <Title />
            </BreadcrumbItem>
          )}
        </Transition>
      </Breadcrumb>

      <Title
        className={`${namespace}__title`}
        aria-hidden={isTitleVisible}
        ref={ref}
      />
    </div>
  );
};

BreadcrumbPageTitle.propTypes = {
  /** Specify the text of the title */
  title: string.isRequired,

  /** Specify the label for the breadcrumb container */
  'aria-label': string.isRequired,

  /** Specify an array of paths for the breadcrumbs - See also https://react.carbondesignsystem.com/?path=/story/breadcrumb--current-page  */
  path: arrayOf(
    shape({
      /** Specify the label for the breadcrumb container */
      id: string.isRequired,
      ...BreadcrumbItem.propTypes,
    })
  ),

  /** Specify the base element to use to build the title */
  element: elementType,

  /** Provide an optional class to be applied to the containing node */
  className: string,
};

BreadcrumbPageTitle.defaultProps = {
  path: null,
  element: 'h1',
  className: null,
};

export default BreadcrumbPageTitle;
