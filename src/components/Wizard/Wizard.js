/**
 * @file Wizard.
 * @copyright IBM Security 2019
 */

/* eslint-disable compat/compat,no-nested-ternary */

import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { StepIndicator, Step as SingleStep } from '../..';
import WizardStep from './WizardStep';
import { Tearsheet } from '../Tearsheet';
import Nav from '../Nav';
import NavItem from '../Nav/NavItem';
import * as defaultLabels from '../../globals/nls';

import { isClient, isNode } from '../../globals/utils/capabilities';
import { getComponentNamespace } from '../../globals/namespace';

const namespace = getComponentNamespace('wizard');

class Wizard extends Component {
  state = {
    steps: this.steps,
    componentState: this.props.initState,
    stepInitState: this.props.initState,
    currentStep: 0,
    isOpen: true,
    loading: false,
    controlledOpen: this.props.isOpen != null,
    deleteIsLoading: false,
  };

  static getDerivedStateFromProps(props, state) {
    let nextState = state;
    if (state.controlledOpen && props.isOpen && !state.isOpen) {
      nextState = {
        ...nextState,
        currentStep: 0,
        componentState: props.initState,
      };
    }
    nextState = {
      ...nextState,
      isOpen: state.controlledOpen ? props.isOpen : state.isOpen,
    };
    return nextState;
  }

  setNextState = async cb => {
    this.setState({ loading: true });
    try {
      const changes = await this.currentStep.next(this.state.componentState);
      const isLastStep = this.isLastStep();

      this.setState(
        ({ currentStep, componentState }) => ({
          currentStep: currentStep + (isLastStep ? 0 : 1),
          componentState: {
            ...componentState,
            ...changes,
            error: undefined,
          },
          loading: false,
          valid: undefined,
        }),
        () => {
          this.setState(({ componentState }) => ({
            stepInitState: componentState,
          }));
          if (isLastStep) {
            if (cb) {
              cb();
            }

            this.props.onClose(this.state.componentState);
            this.setState({ isOpen: false });
          }
        }
      );
    } catch (err) {
      this.setState(({ componentState }) => ({
        loading: false,
        componentState: { ...componentState, error: err },
      }));
    }
  };

  get editMode() {
    return this.props.onDelete !== Wizard.defaultProps.onDelete;
  }

  get sequentialMode() {
    if (typeof this.props.isSequential !== 'undefined') {
      return this.props.isSequential;
    }
    return !this.editMode;
  }

  get currentStep() {
    if (this.state.steps[this.state.currentStep]) {
      return {
        ...WizardStep.defaultProps,
        ...this.state.steps[this.state.currentStep],
      };
    }
    return undefined;
  }

  get steps() {
    if (Children.count(this.props.children)) {
      return Children.map(
        this.props.children,
        WizardStep.getPropsFromElement
      ).filter(props => props != null);
    } else if (Array.isArray(this.props.steps)) {
      return this.props.steps;
    }
    return [];
  }

  get isValid() {
    if (this.state.valid == null) {
      const valid = this.currentStep.validate(this.state.componentState);
      this.setState({ valid });

      return valid;
    }

    return this.state.valid;
  }

  setComponentState = (changes, cb) => {
    if (typeof changes === 'function') {
      this.setState(({ componentState }) => {
        const newComponentState = {
          ...componentState,
          ...changes(componentState),
        };
        return {
          componentState: newComponentState,

          valid: this.currentStep.validate(newComponentState),
        };
      }, cb);
    } else {
      const newComponentState = { ...this.state.componentState, ...changes };
      this.setState(
        {
          componentState: newComponentState,
          valid: this.currentStep.validate(newComponentState),
        },
        cb
      );
    }
  };

  isLastStep = () => this.state.currentStep === this.steps.length - 1;

  /**
   * Keeps the state in sync with the current props.
   * @param {Props} nextProps The current props passed to the component.
   * @returns {Object.<Object, *>} The updated state for the component.
   * @static
   */

  secondaryAction = () => {
    this.setState(({ componentState, currentStep, steps }) => {
      const previousStep = currentStep - 1;

      return {
        currentStep: previousStep,
        valid: steps[previousStep].validate(componentState),
      };
    });
  };

  closeAction = () => {
    this.props.onClose(this.state.componentState);
    if (!this.state.controlledOpen) this.setState({ isOpen: false });
  };

  deleteAction = async () => {
    this.setState({ deleteIsLoading: true });
    try {
      await this.props.onDelete(this.state.componentState);
      this.setState(({ controlledOpen }) => ({
        deleteIsLoading: false,
        isOpen: !controlledOpen,
      }));
    } catch (e) {
      this.setState({ deleteIsLoading: false, deleteButtonText: 'Failed' });
      setTimeout(() => this.setState({ deleteButtonText: undefined }), 5000);
    }
  };

  handleItemSelect = event => {
    const { id } = event.target;

    this.setState(({ componentState, steps }) => ({
      currentStep: Number(id),
      valid: steps[id].validate(componentState),
    }));
  };

  renderSidebar = () => {
    const { currentStep, valid } = this.state;

    return !this.sequentialMode ? (
      <Nav label="">
        {this.steps.map(({ title }, index) => (
          <NavItem
            key={title}
            id={String(index)}
            className={`${namespace}__navItem`}
            current={String(currentStep)}
            disabled={!valid}
            handleItemSelect={this.handleItemSelect}
            link={false}
          >
            {title}
          </NavItem>
        ))}
      </Nav>
    ) : (
      <StepIndicator currentIndex={currentStep}>
        {this.steps.map(({ title }) => (
          <SingleStep key={title} label={title} />
        ))}
      </StepIndicator>
    );
  };

  /**
   * Renders the component.
   */
  render() {
    const { labels } = this.props;
    const componentLabels = {
      ...defaultLabels.labels,
      ...labels,
    };
    const { isOpen = true } = this.state;

    if (!this.currentStep) {
      return null;
    }

    const buttons = {
      primary: {
        onClick: () => this.setNextState(),
        isDisabled: !this.isValid || this.state.loading,
      },
      secondary:
        this.state.currentStep === 0
          ? {
              onClick: this.closeAction,
              isDisabled: true,
            }
          : {
              onClick: () =>
                this.setState(({ componentState, currentStep, steps }) => {
                  const previousStep = currentStep - 1;

                  return {
                    currentStep: previousStep,
                    valid: steps[previousStep].validate(componentState),
                  };
                }),
              isDisabled: false,
            },

      cancelSetup: {
        onClick: this.closeAction,
        isDisabled: false,
        secondaryText: componentLabels.WIZARD_TERTIARY_SECONDARY_TEXT,
      },

      // Wizard should not have a close button in the top right.
      close: {
        isDisabled: true,
      },
      delete: this.editMode
        ? {
            onClick: this.deleteAction,
            isDisabled: this.state.deleteIsLoading,
          }
        : undefined,
    };
    const buttonLabels = {
      TEARSHEET_PRIMARY_BUTTON: this.isLastStep()
        ? componentLabels.WIZARD_FINISH_BUTTON
        : componentLabels.WIZARD_NEXT_BUTTON,
      TEARSHEET_SECONDARY_BUTTON:
        this.state.currentStep === 0
          ? componentLabels.WIZARD_CANCEL_BUTTON
          : componentLabels.WIZARD_BACK_BUTTON,
      TEARSHEET_DELETE_BUTTON: this.editMode
        ? this.state.deleteButtonText ||
          componentLabels.WIZARD_TEARSHEET_DELETE_BUTTON
        : undefined,
      TEARSHEET_TERTIARY_BUTTON: componentLabels.WIZARD_TERTIARY_BUTTON,
    };

    const { focusTrap, title, subTitle } = this.props;
    const renderMain = () =>
      this.currentStep.renderMain(
        this.state.componentState,
        this.setComponentState
      );

    return (
      <Tearsheet
        focusTrap={focusTrap}
        sidebarTitle={title}
        sidebarSubtitle={subTitle}
        mainTitle={this.currentStep.title}
        renderSidebar={this.renderSidebar}
        renderMain={renderMain}
        rootNode={this.props.rootNode}
        primaryButton={buttons.primary}
        secondaryButton={buttons.secondary}
        tertiaryButton={buttons.cancelSetup}
        closeButton={buttons.close}
        deleteButton={buttons.delete}
        isOpen={isOpen}
        labels={{
          ...componentLabels,
          ...defaultLabels.filterFalsey(buttonLabels),
        }}
        loading={this.state.loading}
        loadingMessage={this.props.loadingMessage}
      />
    );
  }
}

Wizard.propTypes = {
  /** Specify a title */
  title: PropTypes.string.isRequired,

  /** Specify a subtitle */
  subTitle: PropTypes.string,

  /** Provide the contents of the `Wizard` */
  children: PropTypes.node,

  /** Specify the initial state object of the `Wizard` */
  initState: PropTypes.instanceOf(Object),

  /** Specify whether the `Wizard` is currently open */
  isOpen: PropTypes.bool,

  /** Specify whether the `Wizard` is sequential */
  isSequential: PropTypes.bool,

  /** Provide an optional `onClose` hook that is called each time the `Wizard` is closed */
  onClose: PropTypes.func,

  /**  Provide an optional `onDelete` hook that is called each time delete button is selected */
  onDelete: PropTypes.func,

  /** Specify whether the `Wizard` should trap focus */
  focusTrap: PropTypes.bool,

  /** Specify the target element to render the `Wizard` to */
  rootNode: isNode() ? PropTypes.instanceOf(Node) : PropTypes.any,

  /** Specify an object for translating default labels */
  labels: defaultLabels.propType,

  /**
   * Deprecated in favor of `children`.
   * Specify the steps of the `Wizard`
   */
  steps: PropTypes.arrayOf(PropTypes.shape(WizardStep.propTypes)),
};

Wizard.defaultProps = {
  subTitle: '',
  children: undefined,
  initState: {},
  isOpen: undefined,
  isSequential: undefined,
  onClose: () => {},
  onDelete: () => Promise.resolve(),
  focusTrap: true,
  rootNode: isClient() ? document.body : undefined,
  labels: {},
  steps: [],
};

export default Wizard;
