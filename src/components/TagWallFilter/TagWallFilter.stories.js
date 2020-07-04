/**
 * @file Filter stories.
 * @copyright IBM Security 2019
 */
/* eslint-disable no-param-reassign */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { patterns } from '../../../.storybook';

import TagWallFilter from './index';
import { items } from './Filter/_mocks_';

const buttons = {
  primaryButton: {
    onClick: action('primary-click'),
    label: 'Okay',
    isDisabled: false,
  },
  secondaryButton: {
    onClick: action('secondary-click'),
    label: 'Cancel',
    isDisabled: false,
  },
  closeButton: {
    onClick: action('close-click'),
    label: 'Close',
    isDisabled: false,
  },
};

storiesOf(patterns('TagWallFilter'), module)
  .add(`TagWall with Filter list for multiselect`, () => {
    const selectedItems = object('selectedItems', [items[0]]);
    const availableItems = object('availableItems', items.slice(1));
    const visible = boolean('visible (toggle to apply changes to items)', true);

    return (
      visible && (
        <TagWallFilter
          focusTrap={boolean('focusTrap', false)}
          heading="Cities"
          description="Filter and select city names."
          selectedItems={selectedItems}
          availableItems={availableItems}
          onChange={action('onChange')}
          inputFieldPlaceholder="Search cities"
          tagWallLabel="Cities"
          {...buttons}
        />
      )
    );
  })
  .add('with addition', () => {
    const selectedItems = object('selectedItems', [items[0]]);
    const availableItems = object('availableItems', items.slice(1));
    const newItemPrefix = text('newItemPrefix', 'Add: ');
    const visible = boolean('visible (toggle to apply changes to items)', true);

    return (
      visible && (
        <TagWallFilter
          focusTrap={boolean('focusTrap', false)}
          heading="Cities"
          description="Filter and select city names."
          selectedItems={selectedItems}
          availableItems={availableItems}
          onChange={action('onChange')}
          inputFieldPlaceholder="Search cities"
          tagWallLabel="Cities"
          newItemPrefix={newItemPrefix}
          allowAddition
          {...buttons}
        />
      )
    );
  });
