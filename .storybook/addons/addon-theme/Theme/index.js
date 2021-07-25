/**
 * @file Theme component.
 * @copyright IBM Security 2019 - 2020
 */

import { useEffect } from 'react';

import { getComponentNamespace } from '../../../../src/globals/namespace';

const namespace = getComponentNamespace('theme');

export default ({ children, theme }) => {
  useEffect(() => {
    const { classList } = document.querySelector('html');

    classList.remove(
      [...classList].find((className) => className.includes(namespace))
    );

    classList.add(`${namespace}--${theme}`);
  }, []);

  return children;
};
