/**
 * @file Summary card stories.
 * @copyright IBM Security 2019
 */

import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

import Add20 from '@carbon/icons-react/lib/add/20';
import Add24 from '@carbon/icons-react/lib/add/24';
import Edit20 from '@carbon/icons-react/lib/edit/20';
import Edit24 from '@carbon/icons-react/lib/edit/24';
import Locked24 from '@carbon/icons-react/lib/locked/24';
import Notification24 from '@carbon/icons-react/lib/notification/24';

import React from 'react';

import { patterns } from '../../../.storybook';
import { SummaryCard, SummaryCardSkeleton } from '../..';

const actions = [
  {
    label: 'Action 1',
    onClick: action('onClick'),
    renderIcon: Add24,
  },
  {
    label: 'Action 2',
    onClick: action('onClick'),
    renderIcon: Edit24,
  },
  {
    label: 'Action 3',
    onClick: action('onClick'),
    renderIcon: Locked24,
  },
  {
    label: 'Action 4',
    onClick: action('onClick'),
    renderIcon: Notification24,
  },
];

const expandedProps = () => ({
  expandedContent: text(
    'Expanded body content (expandedContent)',
    'EXPANDED CONTENT'
  ),
  expandedHeader: {
    label: text(
      'Expanded header label (expandedHeader.label)',
      'EXPANDED HEADER'
    ),
    renderIcon: Edit20,
  },
});

/* eslint-disable react/prop-types */
const LinkComponent = ({ href, className, children }) => (
  <a href={href} className={className}>
    {children}
  </a>
);
/* eslint-enable react/prop-types */

const customLink = { component: LinkComponent, props: { href: '#' } };

const primaryActionButton = {
  label: text(
    'Primary action label (primaryAction.label)',
    'Primary action button'
  ),
  renderIcon: Add20,
  expandable: true,
};

storiesOf(patterns('SummaryCard'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add('with primary label', () => (
    <SummaryCard
      loading={boolean('Loading (loading)', true)}
      primaryAction={{
        label: text(
          'Primary action label (primaryAction.label)',
          'Primary action button'
        ),
        expandable: false,
      }}
      secondaryActionBar={actions}
      status={{
        label: text('Status label (status.label)', 'Status'),
      }}
      title={text('Title (title)', 'Title')}
    >
      {text('Body content (children)', 'BODY CONTENT')}
    </SummaryCard>
  ))
  .add('with primary action and expandable content', () => (
    <SummaryCard
      {...expandedProps()}
      loading={boolean('Loading (loading)', false)}
      primaryAction={primaryActionButton}
      secondaryActionBar={actions}
      status={{
        label: text('Status label (status.label)', 'Status'),
        tooltip: {
          renderIcon: Edit20,
          message: text(
            'Status icon tooltip (status.tooltip.message)',
            'Tooltip message'
          ),
        },
      }}
      title={text('Title (title)', 'Title')}
    >
      {text('Body content (children)', 'BODY CONTENT')}
    </SummaryCard>
  ))
  .add('with custom link component and secondary action', () => (
    <SummaryCard
      {...expandedProps()}
      customLink={customLink}
      href="#"
      primaryAction={primaryActionButton}
      secondaryActionButton={{
        label: 'close',
        onClick: action('secondaryClick'),
      }}
      status={{
        label: text('Status label (status.label)', 'Status'),
      }}
      title={text('Title (title)', 'Title')}
    >
      {text('Body content (children)', 'BODY CONTENT')}
    </SummaryCard>
  ))
  .add('skeleton', () => <SummaryCardSkeleton />);
