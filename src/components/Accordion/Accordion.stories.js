/**
 * @file Accordion stories.
 * @copyright IBM Security 2019
 */
import { action } from '@storybook/addon-actions';
import { boolean, text, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components, info } from '../../../.storybook';

import {
  Accordion,
  AccordionItem,
  AccordionSkeleton,
  Select,
  SelectItem,
} from '../..';

const props = {
  onClick: action('onClick'),
  onHeadingClick: action('onHeadingClick'),
};

storiesOf(components('Accordion'), module)
  .add(
    'Default',
    () => (
      <Accordion>
        <AccordionItem
          title={text('The title (title)', 'Section 1 title')}
          open={boolean('Open the section (open)', false)}
          {...props}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
        <AccordionItem title="Section 2 title" {...props}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
        <AccordionItem title="Section 3 title" {...props}>
          <Select
            onChange={action('onChange')}
            id="select-1"
            defaultValue="placeholder-item"
          >
            <SelectItem
              disabled
              hidden
              value="placeholder-item"
              text="Choose an option"
            />
            <SelectItem value="option-1" text="Option 1" />
            <SelectItem value="option-2" text="Option 2" />
            <SelectItem value="option-3" text="Option 3" />
          </Select>
        </AccordionItem>
        <AccordionItem
          title={
            <h4>
              Section 4 title (<em>the title can be a node</em>)
            </h4>
          }
          {...props}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </AccordionItem>
      </Accordion>
    ),
    info(
      'Accordions allow users to expand and collapse sections of content.',
      'accordion--default'
    )
  )
  .add(
    'with skeleton',
    () => (
      <div style={{ width: '500px' }}>
        <AccordionSkeleton
          open={boolean('Show first item opened (open)', true)}
          count={number('Set number of items (count)', 4)}
        />
      </div>
    ),
    {
      info: {
        text: `
          Accordions allow users to expand and collapse sections of content.
        `,
      },
    }
  );
