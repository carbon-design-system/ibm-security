/**
 * @file Modal stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import { settings } from 'carbon-components';

import { components } from '../../../.storybook';

import { Checkbox, Modal } from '../..';

const { prefix } = settings;

const props = () => ({
  className: 'some-class',
  open: boolean('Open (open)', true),
  passiveModal: boolean('Without footer (passiveModal)', false),
  danger: boolean('Danger mode (danger)', false),
  shouldSubmitOnEnter: boolean(
    'Enter key to submit (shouldSubmitOnEnter)',
    false
  ),
  modalHeading: text('Modal heading (modalHeading)', 'Modal heading'),
  modalLabel: text('Optional label (modalLabel)', 'Label'),
  modalAriaLabel: text(
    'ARIA label (modalAriaLabel)',
    'A label to be read by screen readers on the modal root node'
  ),
  primaryButtonText: text(
    'Primary button text (primaryButtonText)',
    'Primary Button'
  ),
  secondaryButtonText: text(
    'Secondary button text (secondaryButtonText)',
    'Secondary Button'
  ),
  selectorPrimaryFocus: text(
    'Primary focus element selector (selectorPrimaryFocus)',
    '[data-modal-primary-focus]'
  ),
  iconDescription: text(
    'Close icon description (iconDescription)',
    'Close the modal'
  ),
  onBlur: action('onBlur'),
  onClick: action('onClick'),
  onFocus: action('onFocus'),
  onRequestClose: action('onRequestClose'),
  onRequestSubmit: action('onRequestSubmit'),
  onSecondarySubmit: action('onSecondarySubmit'),
});

storiesOf(components('Modal'), module).add(
  'Default',
  () => (
    <Modal {...props()}>
      <p className={`${prefix}--modal-content__text`}>
        {new Array(250).fill().map((labelText = 'Checkbox', index) => {
          const id = `checkbox__${index}`;

          return (
            <Checkbox key={id} id={id} labelText={`${labelText} ${index}`} />
          );
        })}
      </p>
    </Modal>
  ),
  {
    info: {
      text: `
            Modals communicate information via a secondary window and allow the user to maintain the context of a particular task.
            Use the Modal Wrapper component to encapsulate your Modal within a button.
          `,
    },
  }
);
