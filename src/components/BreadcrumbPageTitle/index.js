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
import { throttle } from 'throttle-debounce';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const [style, setStyle] = useState(null);

  let height;

  if (isClient()) {
    useLayoutEffect(() => {
      const onScroll = throttle(50, () => {
        const { scrollY } = window;

        setIsScrolled(scrollY > height);

        if (!isScrolled) {
          const calculation = scrollY / height;

          setStyle({
            opacity: 1 - calculation,
            transform: `translate3d(0, -${Math.round(
              (calculation / 2) * 100
            )}%, 0)`,
          });
        }
      });

      height = height || ref.current.getBoundingClientRect().height;

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

      {!isScrolled && (
        <Title className={`${namespace}__title`} ref={ref} style={style} />
      )}
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
