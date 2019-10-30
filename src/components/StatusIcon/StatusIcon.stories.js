/**
 * @file Status icon stories.
 * @copyright IBM Security 2019
 */

import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { compose, getDisplayName, lifecycle } from 'recompose';
import React from 'react';

import { components } from '../../../.storybook';

import { StatusIcon } from '../..';
import { SIZE, STATUS } from './StatusIcon';

const storyProps = () => ({
  message: text('Label (message)', 'Label'),
  size: select('Size (size)', SIZE, StatusIcon.defaultProps.size),
});

const status = STATUS[0];

storiesOf(components('StatusIcon'), module)
  .add('Default', () => <StatusIcon {...storyProps()} />)
  .add('Status', () => (
    <StatusIcon
      {...storyProps()}
      status={select('Status (status)', STATUS, status)}
    />
  ))
  .add('Dynamic', () => {
    let timeout;

    const StatusIconStory = compose(
      lifecycle({
        componentDidMount() {
          timeout = setTimeout(() => this.setState({ status }), 1000);
        },

        componentWillUnmount: () => clearTimeout(timeout),
      })
    )(StatusIcon);

    StatusIconStory.displayName = getDisplayName(StatusIcon);
    StatusIconStory.__docgenInfo = StatusIcon.__docgenInfo;

    return <StatusIconStory {...storyProps()} />;
  });
