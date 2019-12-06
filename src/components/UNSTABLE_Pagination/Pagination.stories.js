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
      {({ onSetPage, totalPages }) => (
        <PageChanger
          labelText=""
          id="select-1"
          onChange={event => onSetPage(event.target.value)}
          // TODO: handle `totalPages` like this?
          totalPages={totalPages}
        />
      )}
    </UNSTABLE_Pagination>
  ));
