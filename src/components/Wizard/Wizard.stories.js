/**
 * @file Wizard stories.
 * @copyright IBM Security 2019
 */

import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

import { settings } from 'carbon-components';
import React, { Fragment, useState } from 'react';

import { meta, patterns } from '../../../.storybook';

import { Button, CodeSnippet, TextInput, Wizard, WizardStep } from '../..';

const { prefix } = settings;

const {
  defaultProps: { focusTrap, isOpen: isOpenProp, isSequential },
  displayName,
} = Wizard;

const isOpen = !isOpenProp;

const value = state => state || '';

const props = {
  wizard: () => ({
    title: text('Title (title)', displayName),
    subTitle: text('Subtitle (subTitle)', 'Subtitle'),
    isOpen: boolean('Open (isOpen)', isOpen),
    isSequential: boolean('Sequential (isSequential)', !isSequential),
    focusTrap: boolean('Trap focus (focusTrap)', !focusTrap),
    onClose: action('onClose'),
  }),
  steps: () =>
    new Array(2).fill().map((step = 'Step', index) => {
      const id = `input__${index}`;
      const name = `${step} ${index + 1}`;

      const props = {
        key: `step__${index}`,
        title: `${name} title`,
        renderMain: (state, setState) => {
          const props = {
            id,
            labelText: `${name} Text Input`,
            onChange: ({ target: { value } }) => setState({ [`${id}`]: value }),
            value: value(state[id]),
          };

          return (
            <Fragment>
              <TextInput {...props} />
              <h2 className={`${prefix}--type-productive-heading-03`}>
                Wizard state
              </h2>

              <CodeSnippet type="multi">
                {JSON.stringify(state, null, 1)}
              </CodeSnippet>
            </Fragment>
          );
        },

        next: async state =>
          new Promise(resolve => setTimeout(resolve, 1000)).then(() =>
            action('next')(state)
          ),
        validate: state => value(state[id]).trim().length >= 3,
      };

      return <WizardStep key={id} {...props} />;
    }),
};

const { steps, wizard } = props;

export const Default = () => (
  <Wizard {...wizard()}>{steps().map(step => step)}</Wizard>
);

export const trigger = () => {
  const [isWizardOpen, setIsOpen] = useState(!isOpen);
  const toggleWizard = () => setIsOpen(!isWizardOpen);

  return (
    <Fragment>
      <Button onClick={toggleWizard}>Launch Wizard</Button>
      <Wizard {...wizard()} isOpen={isWizardOpen} onClose={toggleWizard}>
        {steps().map(step => step)}
      </Wizard>
    </Fragment>
  );
};

export default meta(Wizard, patterns('Wizard'));
