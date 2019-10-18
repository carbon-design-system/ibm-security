/**
 * @file Data table stories.
 * @copyright IBM Security 2019
 */

import { storiesOf } from '@storybook/react';

import { components } from '../../../.storybook';

const props = () => ({
  useZebraStyles: false,
});

const readmeURL = 'https://goo.gl/dq6CEK';

/* eslint-disable global-require */
storiesOf(components('DataTable'), module)
  .add('default', () => require('./stories/default').default(props()), {
    info: {
      /* eslint-disable no-useless-escape */
      text: `
          Data Tables are used to represent a collection of resources, displaying a
          subset of their fields in columns, or headers. The \`DataTable\` component
          that we export from Carbon requires two props to be passed in: \`rows\`
          and \`headers\`.
          You can find more detailed information surrounding usage of this component
          at the following url: ${readmeURL}
        `,
      /* eslint-enable no-useless-escape */
    },
  })
  .add(
    'with batch actions',
    () => require('./stories/with-batch-actions').default(props()),
    {
      info: {
        text: `
          Uses <TableToolbar> alongside <TableBatchActions> and <TableBatchAction>
          to create the toolbar and placeholder for where the batch action menu will
          be displayed.
          You can use the \`getBatchActionProps\` prop getter on the
          <TableBatchActions> component to have it wire up the ghost menu for you.
          Individual <TableBatchAction> components take in any kind of event handler
          prop that you would expect to use, like \`onClick\`. You can use these
          alongside the \`selectedRows\` property in your \`render\` prop function
          to pass along this info to your batch action handler.
          You can find more detailed information surrounding usage of this component
          at the following url: ${readmeURL}
        `,
      },
    }
  )
  .add(
    'with expansion',
    () => require('./stories/with-expansion').default(props()),
    {
      info: {
        text: `
          DataTable with expansion
          You can find more detailed information surrounding usage of this component
          at the following url: ${readmeURL}
        `,
      },
    }
  )
  .add('with overflow menu', () =>
    require('./stories/with-overflow-menu').default(props())
  )
  .add(
    'with selection',
    () => require('./stories/with-selection').default(props()),
    {
      info: {
        text: `
        DataTable with selection
        You can find more detailed information surrounding usage of this component
        at the following url: ${readmeURL}
      `,
      },
    }
  )
  .add(
    'with sorting',
    () => require('./stories/with-sorting').default(props()),
    {
      info: {
        text: `
        DataTable with sorting
        You can find more detailed information surrounding usage of this component
        at the following url: ${readmeURL}
      `,
      },
    }
  )
  .add(
    'with toolbar',
    () => require('./stories/with-toolbar').default(props()),
    {
      info: {
        text: `
        DataTable with action menu and filtering.
        You can find more detailed information surrounding usage of this component
        at the following url: ${readmeURL}
      `,
      },
    }
  )
  .add('with skeleton', () =>
    require('./stories/with-skeleton').default(props())
  );
/* eslint-enable */
