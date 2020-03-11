# `Button`

Also refer to [migration in Carbon](https://github.com/carbon-design-system/carbon/blob/master/packages/react/src/components/Button/migrate-to-7.x.md).

This now uses [`forwardRef`](https://reactjs.org/docs/forwarding-refs.html) to manage focus and may affect applications that depend on the old behavior.

## Props

| `1.x`       | `2.x`          |
| ----------- | -------------- |
| `largeText` | `size="large"` |
| `path`      | `renderIcon`   |
