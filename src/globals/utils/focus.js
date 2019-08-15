/**
 * @file Helper methods for element focusing.
 * @copyright IBM Security 2018
 */

export const focusableElements =
  'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';

export const keyableElements = 'li:not([disabled])';

export const focusFirstElement = element => {
  const focusable = element.querySelector(focusableElements);
  if (focusable) {
    focusable.focus();
  }
};

export const trapTabFocus = (element, event) => {
  const focusable = element.querySelectorAll(focusableElements);
  if (focusable.length > 0) {
    if (event.target === focusable[0] && event.shiftKey) {
      event.preventDefault();
      focusable[focusable.length - 1].focus();
    } else if (
      event.target === focusable[focusable.length - 1] &&
      !event.shiftKey
    ) {
      event.preventDefault();
      focusable[0].focus();
    }
  }
};
