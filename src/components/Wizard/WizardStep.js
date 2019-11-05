/**
 * @file Wizard step.
 * @copyright IBM Security 2019
 */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class WizardStep extends Component {
  static getPropsFromElement = stepElem => {
    if (!React.isValidElement(stepElem) && stepElem.type !== WizardStep)
      return null;
    return stepElem.props;
  };

  render() {
    const { title, renderMain, next, validate } = this.props;
    return (
      null && {
        title,
        renderMain,
        next,
        validate,
      }
    );
  }
}

WizardStep.propTypes = {
  /** Specify a title for the step */
  title: PropTypes.string.isRequired,

  /** Pass in the nodes that will be rendered within the content of the step */
  renderMain: PropTypes.func,

  /** Provide an asynchronous function that is called after each step */
  next: PropTypes.func,

  /** Provide a pure and synchronous predicate function to validate the `Wizard`'s state against the current step, occuring after every state change (for example, every user keystroke). This should not be used as a hook to trigger any side effects, nor allow the return value to depend on anything else other than the argument. When it returns `true`, parts of the wizard (buttons, navigation, etc.) become active */
  validate: PropTypes.func,
};

WizardStep.defaultProps = {
  renderMain: () => <Fragment />,
  next: async state => state,
  validate: () => true,
};

export default WizardStep;
