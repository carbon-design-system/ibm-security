/**
 * @file Helper to render jsx in a landmark element.
 * @copyright IBM Security 2020
 */

import { render } from '@testing-library/react';

function renderWithinLandmark(jsxExpression) {
  // DAP requires a landmark '<main>' in the DOM:
  const container = document.createElement('main');
  document.body.appendChild(container);

  return render(jsxExpression, {
    container,
  });
}

export default renderWithinLandmark;
