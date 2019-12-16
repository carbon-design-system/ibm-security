/**
 * @file Unstable pagination stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { UNSTABLE_Pagination, PageSelector } from '../..';

import { components } from '../../../.storybook';

storiesOf(components('UNSTABLE Pagination'), module)
  .addDecorator(story => <div style={{ width: '800px' }}>{story()}</div>)
  .add(
    'default',
    () => (
      <UNSTABLE_Pagination totalItems={350} pageSizes={[10, 15, 20, 25]}>
        {({ currentPage, onSetPage, totalPages }) => (
          <PageSelector
            id="select-1"
            onChange={event => onSetPage(event.target.value)}
            totalPages={totalPages}
            value={currentPage}
          />
        )}
      </UNSTABLE_Pagination>
    ),
    {
      info: {
        propTables: [UNSTABLE_Pagination, PageSelector],
        text: `
            🚨 This component is *experimental* and may change. 🚨

            \`UNSTABLE_Pagination\` accepts a render prop \`children\`.

            In this case, you can wrap the \`children\` (\`PageSelector\`) in a function, allowing it to pass information back to the parent component.

            \`\`\`jsx
            <UNSTABLE_Pagination totalItems={350} pageSizes={[10, 15, 20, 25]}>
              {/** 
                * Below, \`children\` is a render prop, wrapped in a function.
                * - \`currentPage\` is used to display the current page.
                * - \`onSetPage\` is used to update the current page state in the parent component.
                * - \`totalPages\` is calculated in the parent component and can be displaued in the child below.
              */}
              {({ currentPage, onSetPage, totalPages }) => (
                <PageSelector
                  id="select-1"
                  onChange={event => onSetPage(event.target.value)}
                  totalPages={totalPages}
                  value={currentPage}
                />
              )}
            </UNSTABLE_Pagination>
            \`\`\`
          `,
      },
    }
  )
  .add(
    'with no page selector or sizer',
    () => <UNSTABLE_Pagination totalItems={350} />,
    {
      info: {
        text: `
          🚨 This component is *experimental* and may change. 🚨

          Without \`children\`, \`UNSTABLE_Pagination\` renders without a page selector. 
        `,
      },
    }
  );
