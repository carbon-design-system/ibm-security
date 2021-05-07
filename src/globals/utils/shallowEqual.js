import { shallowEqual } from '@shakacode/recompose';

export const curriedShallowEqual = (arg1 = {}) => (arg2 = {}) =>
  shallowEqual(arg1, arg2);

export default curriedShallowEqual;
