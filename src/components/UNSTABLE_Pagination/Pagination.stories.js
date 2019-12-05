/**
 * @file Unstable pagination stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { UNSTABLE_Pagination, PageChanger } from '../..';

import { components } from '../../../.storybook';

/* eslint-disable */
const renderSelectItems = total => {
  let counter = 1;
  let itemArr = [];
  while (counter <= total) {
    itemArr.push(
      <SelectItem key={counter} value={counter} text={String(counter)} />
    );
    counter++;
  }
  return itemArr;
};
/* eslint-enable */

storiesOf(components('UNSTABLE Pagination'), module)
  .addDecorator(story => <div style={{ width: '800px' }}>{story()}</div>)
  .add('default', () => (
    <UNSTABLE_Pagination totalItems={350}>
      {({ onSetPage, totalPages }) => (
        <PageChanger
          labelText=""
          id="select-1"
          onChange={event => onSetPage(event.target.value)}
          totalPages={totalPages} // TODO
        />
      )}
    </UNSTABLE_Pagination>
  ));
