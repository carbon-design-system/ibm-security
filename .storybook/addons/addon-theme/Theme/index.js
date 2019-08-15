/**
 * @file Theme component.
 * @copyright IBM Security 2019
 */

import { Component } from 'react';

/**
 * Theme class.
 * @class
 */

export default class Theme extends Component {
  componentDidMount = () => {
    this.root = document.querySelector('html');

    this.toggle(this.props.theme);
  };

  componentDidUpdate = prevProps => {
    const { theme } = this.props;
    const { theme: previousTheme } = prevProps;

    if (theme !== previousTheme) {
      this.toggle(previousTheme);
      this.toggle(theme);
    }
  };

  componentWillUnmount = () => this.toggle(this.props.theme);

  /**
   * Toggles the theme.
   * @param {string} theme The theme to toggle.
   */
  toggle = theme => this.root.classList.toggle(`theme--${theme}`);

  render = () => this.props.children;
}
