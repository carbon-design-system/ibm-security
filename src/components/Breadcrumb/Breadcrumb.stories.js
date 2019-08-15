/**
 * @file Breadcrumb stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { components } from '../../../.storybook';

import { Breadcrumb, BreadcrumbItem, BreadcrumbSkeleton } from '../..';

const homepageText = 'Homepage';
const applicationText = 'Application';
const titleText = 'Title';

const longText = text =>
  `A very, very, very, very, very, very, very, very long ${text}`;

const longApplicationText = longText(applicationText);
const longTitleText = longText(titleText);

const props = {
  breadcrumb: (noTrailingSlash = true) => ({
    noTrailingSlash: boolean(
      'No trailing slash (`noTrailingSlash`)',
      noTrailingSlash
    ),
  }),

  item: () => ({
    href: '#',
  }),
};

const { breadcrumb, item } = props;

storiesOf(components('Breadcrumb'), module)
  .addDecorator(withA11y)
  .add(
    'Default',
    () => (
      <Breadcrumb {...breadcrumb()}>
        <BreadcrumbItem {...item()}>
          {text(homepageText, homepageText)}
        </BreadcrumbItem>
        <BreadcrumbItem {...item()}>
          {text(applicationText, applicationText)}
        </BreadcrumbItem>
        <BreadcrumbItem {...item()}>
          {text(titleText, titleText)}
        </BreadcrumbItem>
      </Breadcrumb>
    ),
    {
      info:
        'Breadcrumb enables users to quickly see their location within a path of navigation and move up to a parent level if desired.',
    }
  )
  .add(
    'Over 40 characters',
    () => (
      <Breadcrumb {...breadcrumb()}>
        <BreadcrumbItem {...item()}>
          {text(homepageText, homepageText)}
        </BreadcrumbItem>
        <BreadcrumbItem {...item()}>
          {text(longApplicationText, longApplicationText)}
        </BreadcrumbItem>
        <BreadcrumbItem {...item()}>
          {text(longTitleText, longTitleText)}
        </BreadcrumbItem>
      </Breadcrumb>
    ),
    {
      info:
        'Breadcrumb text length is truncated to approximately 40 characters.',
    }
  )
  .add(
    'Trailing slash',
    () => (
      <Breadcrumb {...breadcrumb(false)}>
        <BreadcrumbItem {...item()}>
          {text(homepageText, homepageText)}
        </BreadcrumbItem>
        <BreadcrumbItem {...item()}>
          {text(applicationText, applicationText)}
        </BreadcrumbItem>
        <BreadcrumbItem {...item()}>
          {text(titleText, titleText)}
        </BreadcrumbItem>
      </Breadcrumb>
    ),
    {
      info:
        'You can choose not to render a trailing slash with the `noTrailingSlash` prop.',
    }
  )
  .add(
    'Current page',
    () => (
      <Breadcrumb {...breadcrumb()}>
        <BreadcrumbItem {...item()}>
          {text(homepageText, homepageText)}
        </BreadcrumbItem>
        <BreadcrumbItem {...item()}>
          {text(applicationText, applicationText)}
        </BreadcrumbItem>
        <BreadcrumbItem
          {...item()}
          isCurrentPage={boolean('isCurrentPage', true)}
        >
          {text(titleText, titleText)}
        </BreadcrumbItem>
      </Breadcrumb>
    ),
    {
      info:
        'You can specify a `BreadcrumbItem` component as the current page with the `isCurrentPage` prop.',
    }
  )
  .add(
    'Current page with `aria-current`',
    () => (
      <Breadcrumb {...breadcrumb()}>
        <BreadcrumbItem {...item()}>
          {text(homepageText, homepageText)}
        </BreadcrumbItem>
        <BreadcrumbItem {...item()}>
          {text(applicationText, applicationText)}
        </BreadcrumbItem>
        <BreadcrumbItem {...item()} aria-current="page">
          {text(titleText, titleText)}
        </BreadcrumbItem>
      </Breadcrumb>
    ),
    {
      info:
        'You can specify a `BreadcrumbItem` component as the current page with the `aria-current` prop by specifying `aria-current="page"`',
    }
  )
  .add('Skeleton', () => <BreadcrumbSkeleton />, {
    info: 'Placeholder skeleton state to use when content is loading.',
  });
