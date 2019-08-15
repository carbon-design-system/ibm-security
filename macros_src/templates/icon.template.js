/* global $PATH, $DEFAULT_TO_NAME */
/* eslint-disable react/react-in-jsx-scope, react/prop-types */

/* BEGIN TEMPLATE */

/**
 * Generated Icon component
 */
function $NAME({
  className = '',
  height = 20,
  width = 20,
  viewBox = '0 0 32 32',
  path,
  description,
  title,
  size,
  style,
  ...other
}) {
  const defaultToPath = $DEFAULT_TO_NAME(path);
  const defaultedTitle = $DEFAULT_TO_NAME(title)(description);
  const iconClassName = [
    className,
    '$ICON_NAMESPACE',
    size ? `button--icon--${size}` : '',
  ]
    .filter(Boolean)
    .join(' ')
    .trim();
  return (
    <svg
      className={iconClassName}
      height={height}
      width={width}
      viewBox={viewBox}
      style={style}
      {...other}
    >
      {defaultedTitle && <title>{defaultedTitle}</title>}
      <path d={defaultToPath($PATH)} />
    </svg>
  );
}
$NAME.displayName = 'Icon';

/* END TEMPLATE */
