/**
 * @file Jest mocks.
 * @copyright IBM Security 2019
 */

const { fn } = jest;

export default fn(function ResizeObserver() {
  this.observe = fn();
  this.disconnect = fn();
});
