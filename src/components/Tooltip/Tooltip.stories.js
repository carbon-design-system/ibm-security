/**
 * @file Tooltip stories.
 * @copyright IBM Security 2019
 */

import { select, text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import OverflowMenuVertical16 from '@carbon/icons-react/lib/overflow-menu--vertical/16';

import { settings } from 'carbon-components';
import React from 'react';

import { components } from '../../../.storybook';

import { Tooltip } from '../..';

const { prefix } = settings;

const directions = {
  'Bottom (bottom)': 'bottom',
  'Left (left)': 'left',
  'Top (top)': 'top',
  'Right (right)': 'right',
};

const props = {
  withIcon: () => ({
    direction: select('Tooltip direction (direction)', directions, 'bottom'),
    triggerText: text('Trigger text (triggerText)', 'Tooltip label'),
    tabIndex: number('Tab index (tabIndex in <Tooltip>)', 0),
  }),
  withoutIcon: () => ({
    showIcon: false,
    direction: select('Tooltip direction (direction)', directions, 'bottom'),
    triggerText: text('Trigger text (triggerText)', 'Tooltip label'),
    tabIndex: number('Tab index (tabIndex in <Tooltip>)', 0),
  }),
  customIcon: () => ({
    showIcon: true,
    direction: select('Tooltip direction (direction)', directions, 'bottom'),
    triggerText: text('Trigger text (triggerText)', 'Tooltip label'),
    tabIndex: number('Tab index (tabIndex in <Tooltip>)', 0),
    renderIcon: React.forwardRef((props, ref) => (
      <div
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '5px',
          background: 'red',
        }}
        ref={ref}
      />
    )),
  }),
  customIconOnly: () => ({
    showIcon: true,
    direction: select('Tooltip direction (direction)', directions, 'bottom'),
    iconDescription: 'Helpful Information',
    tabIndex: number('Tab index (tabIndex in <Tooltip>)', 0),
    renderIcon: OverflowMenuVertical16,
  }),
};

storiesOf(components('Tooltip'), module)
  .add(
    'default (bottom)',
    () => (
      <Tooltip {...props.withIcon()}>
        <p>
          This is some tooltip text. This box shows the maximum amount of text
          that should appear inside. If more room is needed please use a modal
          instead.
        </p>
        <div className={`${prefix}--tooltip__footer`}>
          <a href="/" className={`${prefix}--link`}>
            Learn More
          </a>
          <button
            className={`${prefix}--btn ${prefix}--btn--primary`}
            type="button"
          >
            Create
          </button>
        </div>
      </Tooltip>
    ),
    {
      info: {
        text: `
            Tooltips are used to supply additional information to an element when hovering over it. By default,
            the tooltip will render above the element. The example below shows the default scenario.
          `,
      },
    }
  )
  .add(
    'no icon',
    () => (
      <Tooltip {...props.withoutIcon()}>
        <p>
          This is some tooltip text. This box shows the maximum amount of text
          that should appear inside. If more room is needed please use a modal
          instead.
        </p>
        <div className={`${prefix}--tooltip__footer`}>
          <a href="/" className={`${prefix}--link`}>
            Learn More
          </a>
          <button
            className={`${prefix}--btn ${prefix}--btn--primary`}
            type="button"
          >
            Create
          </button>
        </div>
      </Tooltip>
    ),
    {
      info: {
        text: `
            Tooltips are used to supply additional information to an element when hovering over it. By default,
            the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.
          `,
      },
    }
  )
  .add(
    'custom icon',
    () => (
      <Tooltip {...props.customIcon()}>
        <p>
          This is some tooltip text. This box shows the maximum amount of text
          that should appear inside. If more room is needed please use a modal
          instead.
        </p>
        <div className={`${prefix}--tooltip__footer`}>
          <a href="/" className={`${prefix}--link`}>
            Learn More
          </a>
          <button
            className={`${prefix}--btn ${prefix}--btn--primary`}
            type="button"
          >
            Create
          </button>
        </div>
      </Tooltip>
    ),
    {
      info: {
        text: `
            Tooltips are used to supply additional information to an element when hovering over it. By default,
            the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.
          `,
      },
    }
  )
  .add(
    'only custom icon',
    () => (
      <Tooltip {...props.customIconOnly()}>
        <p>
          This is some tooltip text. This box shows the maximum amount of text
          that should appear inside. If more room is needed please use a modal
          instead.
        </p>
        <div className={`${prefix}--tooltip__footer`}>
          <a href="/" className={`${prefix}--link`}>
            Learn More
          </a>
          <button
            className={`${prefix}--btn ${prefix}--btn--primary`}
            type="button"
          >
            Create
          </button>
        </div>
      </Tooltip>
    ),
    {
      info: {
        text: `
            Tooltips are used to supply additional information to an element when hovering over it. By default,
            the tooltip will render with an information Icon. The example below shows the option to exclude the Icon.
          `,
      },
    }
  );
