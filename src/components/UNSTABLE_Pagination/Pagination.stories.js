/**
 * @file Unstable pagination stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { UNSTABLE_Pagination, PageChanger } from '../..';

import { components } from '../../../.storybook';

storiesOf(components('UNSTABLE Pagination'), module)
  .addDecorator(story => <div style={{ width: '800px' }}>{story()}</div>)
  .add('default', () => (
    <UNSTABLE_Pagination totalItems={350} pageSizes={[10, 20]}>
      {({ currentPage, onSetPage, totalPages }) => (
        <PageChanger
          labelText=""
          id="select-1"
          // TODO: event.target.value is always a string?
          onChange={event => onSetPage(Number(event.target.value))}
          // TODO: fix totalPages?
          totalPages={totalPages}
          value={currentPage}
        />
      )}
    </UNSTABLE_Pagination>
  ));
