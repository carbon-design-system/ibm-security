/**
 * @file Wizard stories.
 * @copyright IBM Security 2019
 */

import { action } from '@storybook/addon-actions';
import { boolean, object, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import { settings } from 'carbon-components';
import FormGroup from 'carbon-components-react/lib/components/FormGroup';
import React, { Fragment } from 'react';
import { withReducer } from 'recompose';

import 'prismjs';
import 'prismjs/components/prism-jsx';

import { info, patterns } from '../../../.storybook';

import {
  Button,
  Checkbox,
  RadioButton,
  RadioButtonGroup,
  TextInput,
  Wizard as WizardComponent,
  WizardStep,
} from '../..';

const { prefix } = settings;

const {
  defaultProps: { focusTrap, isOpen, isSequential },
  displayName,
} = WizardComponent;

const sleep = async (duration = 1000) =>
  new Promise(resolve => setTimeout(resolve, duration));

const value = state => state || '';

const props = {
  wizard: () => ({
    title: text('Title (title)', displayName),
    subTitle: text('Subtitle (subTitle)', 'Subtitle'),
    isOpen: boolean('Open (isOpen)', !isOpen),
    isSequential: boolean('Sequential (isSequential)', !isSequential),
    focusTrap: boolean('Trap focus (focusTrap)', !focusTrap),
    onClose: action('onClose'),
  }),
  steps: () =>
    new Array(2).fill().map((step = 'Step', index) => {
      const name = `${step} ${index + 1}`;
      const id = `input__${index}`;

      return {
        key: `step__${index}`,
        title: `${name} title`,
        renderMain: (state, setState) => (
          <TextInput
            id={id}
            labelText={`${name} Text Input`}
            value={value(state[id])}
            onChange={({ target: { value } }) => setState({ [`${id}`]: value })}
          />
        ),

        next: async state => sleep().then(() => action('next')(state)),
        validate: state => value(state[id]).trim().length >= 3,
      };
    }),
};

let steps = [
  {
    title: 'First Step',
    renderMain: (state, setState) => (
      <section>
        <p>Please fill out the form.</p>
        <TextInput
          id="input1"
          labelText="Name"
          value={state.input1Value}
          onChange={({ target }) => setState({ input1Value: target.value })}
        />
      </section>
    ),
    next: async state => sleep(1000).then(() => action('next')(state)),
    validate: ({ input1Value = '' }) => input1Value.trim().length >= 3,
  },
  {
    title: 'Second Step',
    renderMain: ({ input1Value, checkboxValue = false }, setState) => (
      <section>
        <p>Hi {input1Value}.</p>
        <p>Is your name correct? </p>

        <Checkbox
          id="name-checkbox"
          labelText="My name is correct."
          checked={checkboxValue}
          onChange={checked => setState({ checkboxValue: checked })}
        />
      </section>
    ),
    next: async state => sleep(1000).then(() => action('next_done')(state)),
    validate: ({ checkboxValue = false }) => checkboxValue,
  },
];

const reducers = {
  TOGGLE_OPEN: state => ({ ...state, isOpen: !state.isOpen }),
  UPDATE_INIT_STATE: (state, { initState = {} } = {}) => ({
    ...state,
    initState,
  }),
  DEFAULT: (state = {}) => state,
};

const reduceState = (reducers = { DEFAULT: (state = {}) => state }) => (
  state = {},
  { type, ...otherState } = {}
) => (reducers[type] || reducers.DEFAULT)(state, { type, ...otherState });

const enhanceWithState = (initState = {}) =>
  withReducer('state', 'dispatch', reduceState(reducers), {
    isOpen: false,
    initState,
  });

function WizardWrapper({ state, dispatch, ...otherProps }) {
  return (
    <Fragment>
      <Button
        onClick={() =>
          dispatch({ type: 'TOGGLE_OPEN' }, ({ isOpen }) =>
            action('isOpen')(isOpen)
          )
        }
      >
        Launch Wizard
      </Button>
      <WizardComponent
        {...props.wizard()}
        {...otherProps}
        initState={state.initState}
        isOpen={state.isOpen}
        onClose={componentState => {
          dispatch(
            { type: 'UPDATE_INIT_STATE', initState: componentState },
            ({ initState }) => action('onClose')(initState)
          );
          dispatch({ type: 'TOGGLE_OPEN' });
        }}
      />
    </Fragment>
  );
}

const markdown = (useDefault = true) =>
  `
  ~~~jsx
  /// ...
  /// Example use:
  render() {
    const {isOpen, wizardState = {}} = this.state;
    return (
      <div>
        <Button
          onClick={(_)=>this.setState(
            ({isOpen}) => ({isOpen: !isOpen})
          )}
        >
          {this.state.isOpen ? 'Close' : 'Open'}
        </Button>

          <Wizard
            title="Example"
            subTitle="Example Wizard"
            isOpen={(wizardState) => this.setState({isOpen: true})}
            onClose={(wizardState) => this.setState({wizardState, isOpen: false})}
            initState={wizardState} ${
              useDefault
                ? `
            isOpen={isOpen}`
                : ''
            }
            onDelete={/*passing a onDelete handler will enable edit mode*/}
          >
            <WizardStep
              title="First Step"
              renderMain={(state, setState) => (<div><p>....</p>...</div>)}
              next={async state => state}
              validate={({ input1Value = '' }) => input1Value.trim().length >= 3}
            />
            <WizardStep
              title="2nd Step"
              renderMain={(state, setState) => (<div><p>....</p>...</div>)}
              validate={({ checkboxValue = false }) => checkboxValue}
              next={async state => state}
            />
          </Wizard>
      </div>
    );
  }
  ///...
  ~~~
  `;

storiesOf(patterns('Wizard'), module)
  .add('First', () => (
    <WizardComponent {...props.wizard()}>
      {props.steps().map(step => (
        <WizardStep key={step.key} {...step} />
      ))}
    </WizardComponent>
  ))
  /* .add(
    'Default',
    () => {
      // WizardComponent.displayName = 'Wizard';

      WizardComponent.__docgenInfo = {
        ...WizardComponent.__docgenInfo,
        props: {
          ...WizardComponent.__docgenInfo.props,
          rootNode: {
            ...WizardComponent.__docgenInfo.props.rootNode,
            defaultValue: { value: 'document.body', computed: true },
          },
          steps: {
            ...WizardComponent.__docgenInfo.props.steps,
            type: { name: 'array' },
          },
        },
      };

      return (
        <WizardComponent
          {...props.wizard()}
          initState={object('initState', {})}
          onDelete={
            boolean('editMode', false)
              ? componentState =>
                  new Promise(resolve => {
                    action('onDelete')(componentState);
                    setTimeout(() => {
                      resolve();
                    }, 3000);
                  })
              : undefined
          }
        >
          <WizardStep {...steps[0]} />
          <WizardStep {...steps[1]} />
        </WizardComponent>
      );
    },
    info(`## Default use of the Wizard Component
        ${markdown(true)}
        `)
  ) */

  .add(
    'Trigger',
    () => {
      const WizardWithState = enhanceWithState(object('initState', {}))(
        WizardWrapper
      );
      WizardWithState.displayName = 'Wizard';
      WizardWithState.__docgenInfo = {
        ...WizardComponent.__docgenInfo,
        props: {
          ...WizardComponent.__docgenInfo.props,
          steps: {
            ...WizardComponent.__docgenInfo.props.steps,
            type: { name: 'array' },
          },
        },
      };
      WizardWithState.defaultProps = WizardComponent.defaultProps;
      return (
        <WizardWithState {...props.wizard()}>
          {steps.map(step => (
            <WizardStep key={step.title} {...step} />
          ))}
        </WizardWithState>
      );
    },
    info(`## Wizard with open/close button
        ${markdown(false)}
        `)
  );
