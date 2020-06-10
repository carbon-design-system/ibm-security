/**
 * @file Decorator stories.
 * @copyright IBM Security 2019
 */

import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../../.storybook';

import { Decorator } from '../../..';

import props from '../_mocks_';

const { type, value, score, href } = props;
const { scoreThresholds } = Decorator.defaultProps;

const storyProps = () => ({
  type: text('Type (`type`)', type),
  value: text('Value (`value`)', value),
  title: text('Title (`title`)', value),
  score: number('Score (`score`)', score, {
    max: scoreThresholds[scoreThresholds.length - 1],
    min: scoreThresholds[0],
    range: true,
  }),
  active: boolean('Active (`active`)', false),
  noIcon: boolean('No icon (`noIcon`)', false),
});

storiesOf(components('Decorator'), module)
  .add('Default', () => (
    <>
      <p className="bx--type-body-long-01">This Decorator is inert.</p>
      <p>
        <Decorator {...storyProps()} />
      </p>
    </>
  ))
  .add('Inline', () => (
    <p className="bx--type-body-long-01">
      This is an inline Decorator <Decorator {...storyProps()} inline /> that
      appears alongside some text.
    </p>
  ))
  .add('with href', () => (
    <>
      <p className="bx--type-body-long-01">This Decorator is a link.</p>
      <p>
        <Decorator {...storyProps()} href={text('Link (`href`)', href)} />
      </p>
    </>
  ))
  .add('with onClick', () => (
    <>
      <p className="bx--type-body-long-01">This Decorator is a button.</p>
      <p>
        <Decorator {...storyProps()} onClick={action('onClick')} />
      </p>
    </>
  ))
  .add('Icons', () => {
    const size = select(
      'Icon size (size)',
      {
        12: 12,
        16: 16,
      },
      16
    );

    return (
      <>
        <p className="bx--type-body-long-01">
          You can use Decorator icons as separate components.
        </p>
        <p>
          <Decorator.Unknown description="unknown severity" size={size} />
          <Decorator.Low description="low severity" size={size} />
          <Decorator.Medium description="medium severity" size={size} />
          <Decorator.High description="high severity" size={size} />
          <Decorator.Critical description="critical severity" size={size} />
        </p>
      </>
    );
  });
