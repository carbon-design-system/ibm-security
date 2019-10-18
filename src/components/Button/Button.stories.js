/**
 * @file Button stories.
 * @copyright IBM Security 2019
 */

import Add16 from '@carbon/icons-react/lib/add/16';
import Add24 from '@carbon/icons-react/lib/add/24';
import Search16 from '@carbon/icons-react/lib/search/16';
import Search24 from '@carbon/icons-react/lib/search/24';

import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { settings } from 'carbon-components';
import React from 'react';

import { components } from '../../../.storybook';

import { Button, ButtonSkeleton } from '../..';

const { prefix } = settings;

const kinds = {
  'Primary button (primary)': 'primary',
  'Secondary button (secondary)': 'secondary',
  'Danger button (danger)': 'danger',
  'Ghost button (ghost)': 'ghost',
  'Ghost danger button (ghost-danger)': 'ghost-danger',
};

const sizes = {
  Default: 'default',
  Field: 'field',
  Large: 'large',
  Small: 'small',
};

const iconsToUse = {
  Add16,
  Add24,
  Search16,
  Search24,
};

const props = {
  regular: (
    iconToUse = iconsToUse[
      (() => {
        const icons = {};

        Object.keys(iconsToUse).forEach(icon => {
          icons[`${icon} (${icon} from '@carbon/icons-react')`] = `${icon}`;
        });

        return select(
          'Icon (icon)',
          {
            None: 'None',
            ...icons,
          },
          'none'
        );
      })()
    ]
  ) => {
    return {
      className: 'some-class',
      kind: select('Button kind (kind)', kinds, 'primary'),
      disabled: boolean('Disabled (disabled)', false),
      size: select('Button size (size)', sizes, 'default'),
      renderIcon: !iconToUse || iconToUse.svgData ? undefined : iconToUse,
      iconDescription: text(
        'Icon description (iconDescription)',
        'Button icon'
      ),
      onClick: action('onClick'),
      onFocus: action('onFocus'),
    };
  },

  set: () => {
    return {
      className: 'some-class',
      disabled: boolean('Disabled (disabled)', false),
      size: select('Button size (size)', sizes, 'default'),
      onClick: action('onClick'),
      onFocus: action('onFocus'),
    };
  },
};

/* eslint-disable react/prop-types */
const CustomLink = ({ children, href, ...other }) => (
  <a href={href} {...other}>
    {children}
  </a>
);
/* eslint-enable react/prop-types */

storiesOf(components('Button'), module)
  .add(
    'default',
    () => {
      const regularProps = props.regular();
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Button {...regularProps} className="some-class">
            Button
          </Button>
          &nbsp;
          <Button {...regularProps} href="#" className="some-class">
            Link
          </Button>
          &nbsp;
          <Button {...regularProps} as="p" href="#" className="some-class">
            Element
          </Button>
          &nbsp;
          <Button
            {...regularProps}
            as={CustomLink}
            href="#"
            className="some-class"
          >
            Custom component
          </Button>
        </div>
      );
    },
    {
      info: {
        text: `
          Buttons are used to initialize an action, either in the background or
          foreground of an experience.
          There are several kinds of buttons.
          Primary buttons should be used for the principle call to action
          on the page.
          Secondary buttons should be used for secondary actions on each page.
          Danger buttons should be used for a negative action (such as Delete) on the page.
          Modify the behavior of the button by changing its event properties.
          Small buttons may be used when there is not enough space for a
          regular sized button. This issue is most found in tables. Small button should have three words
          or less.
          When words are not enough, icons can be used in buttons to better communicate what the button does. Icons are
          always paired with text.
        `,
      },
    }
  )
  .add(
    'Sets of Buttons',
    () => {
      const setProps = props.set();
      return (
        <div className={`${prefix}--btn-set`}>
          <Button kind="secondary" {...setProps}>
            Secondary button
          </Button>
          <Button kind="primary" {...setProps}>
            Primary button
          </Button>
        </div>
      );
    },
    {
      info: {
        text: `
          When an action required by the user has more than one option, always use a a negative action button (secondary) paired with a positive action button (primary) in that order. Negative action buttons will be on the left. Positive action buttons should be on the right. When these two types buttons are paired in the correct order, they will automatically space themselves apart.
        `,
      },
    }
  )
  .add(
    'skeleton',
    () => (
      <div>
        <ButtonSkeleton />
        &nbsp;
        <ButtonSkeleton href="#" />
        &nbsp;
        <ButtonSkeleton small />
      </div>
    ),
    {
      info: {
        text: `
          Placeholder skeleton state to use when content is loading.
        `,
      },
    }
  );
