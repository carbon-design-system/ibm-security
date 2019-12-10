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
  .add('default', () => (
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
  ))
  .add('with no page selector or sizer', () => (
    <UNSTABLE_Pagination totalItems={350} />
  ));
