/**
 * @file Unstable pagination stories.
 * @copyright IBM Security 2019 - 2021
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { array, boolean, number, text } from '@storybook/addon-knobs';

import { UNSTABLE__Pagination, PageSelector } from '../..';

import { security } from '../../../.storybook';

const props = () => ({
  disabled: boolean('Disable backward/forward buttons (disabled)', false),
  pagesUnknown: boolean('Total number of items unknown (pagesUnknown)', false),
  backwardText: text(
    'The description for the backward icon (backwardText)',
    'Previous page'
  ),
  forwardText: text(
    'The description for the forward icon (forwardText)',
    'Next page'
  ),
  pageSize: number('Number of items per page (pageSize)', 10),
  itemsPerPageText: text(
    'Label for `pageSizes` select UI (itemsPerPageText)',
    'Items per page:'
  ),
  onChange: action('onChange'),
});

storiesOf(security('UNSTABLE Pagination'), module)
  .addDecorator(story => <div style={{ width: '800px' }}>{story()}</div>)
  .add(
    'default',
    () => (
      <UNSTABLE__Pagination
        {...props()}
        totalItems={350}
        pageSizes={array('Choices of `pageSize` (pageSizes)', [10, 20, 30])}
      >
        {({ currentPage, onSetPage, totalPages }) => (
          <PageSelector
            currentPage={currentPage}
            id="select-1"
            onChange={event => onSetPage(event.target.value)}
            totalPages={totalPages}
          />
        )}
      </UNSTABLE__Pagination>
    ),
    {
      info: {
        propTables: [UNSTABLE__Pagination, PageSelector],
        text: `
            🚨 This component is *experimental* and may change. 🚨

            \`UNSTABLE__Pagination\` accepts a render prop \`children\`.

            In this case, you can wrap the \`children\` (\`PageSelector\`) in a function, allowing it to pass information back to the parent component.

            \`\`\`jsx
            {/** 
              * Provide \`totalItems\` to \`UNSTABLE__Pagination\` when using the \`PageSelector\` child.
              * \`UNSTABLE__Pagination\` uses \`totalItems\` to calculate \`totalPages\`.
              * And then, \`PageSelector\` uses the calculated \`totalPages\` to accurately display page options.
              */}
            <UNSTABLE__Pagination
              totalItems={350}
              pageSizes={[10, 15, 20, 25]}
            >
              {/** 
                * Below, \`children\` is a render prop, wrapped in a function.
                * - \`currentPage\` is used to display the current page.
                * - \`onSetPage\` is used to update the current page state in the parent component.
                * - \`totalPages\` is calculated using the \`totalItems\` value provided to the parent component, and then is displayed below.
                */}
              {({ currentPage, onSetPage, totalPages }) => (
                <PageSelector
                  currentPage={currentPage}
                  id="select-1"
                  onChange={event => onSetPage(event.target.value)}
                  totalPages={totalPages}
                />
              )}
            </UNSTABLE__Pagination>
            \`\`\`
          `,
      },
    }
  )
  .add(
    'with no page selector or sizer',
    () => <UNSTABLE__Pagination {...props()} totalItems={350} />,
    {
      info: {
        text: `
          🚨 This component is *experimental* and may change. 🚨

          Without \`children\`, \`UNSTABLE__Pagination\` renders without a page selector. 
        `,
      },
    }
  );
