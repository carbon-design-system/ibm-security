/**
 * @file Theme entry point.
 * @copyright IBM Security 2019
 */

import addons, { makeDecorator } from '@storybook/addons';

import React, { Component } from 'react';

import Themes, { defaultTheme } from '../../themes';
import Theme from './Theme';

const namespace = 'addon-theme';
const action = `${namespace}/change`;

const title = 'Theme';
/**
 * Alias for getting the theme from `localStorage`.
 */
const getStoredTheme = () => localStorage.getItem(namespace);

/**
 * Alias for setting the theme in `localStorage`.
 * @param {string} theme The theme string to set.
 */
const setStoredTheme = theme => localStorage.setItem(namespace, theme);

let themes = {};

// Map the themes object from the exports.
Object.keys(Themes).map(theme => {
  themes[theme] = Themes[theme];
});

// Explicitly sets the default theme if none exists in `localStorage`.
if (!getStoredTheme()) {
  setStoredTheme(themes[defaultTheme]);
}

class Wrapper extends Component {
  state = {
    theme: getStoredTheme(),
  };

  componentDidMount = () => {
    this.channel = addons.getChannel();

    this.channel.on(action, this.onAction);
  };

  componentWillUnmount = () => {
    this.channel.removeListener(action, this.onAction);
  };

  /**
   * Sets the state and the stored theme for the addon.
   * @param {string} newTheme The new theme to toggle.
   */
  onAction = theme => {
    setStoredTheme(theme);
    this.setState({ theme });
  };

  render = () => (
    <Theme key={this.state.theme} theme={this.state.theme}>
      {this.props.children}
    </Theme>
  );
}

export default makeDecorator({
  name: `with${title}`,
  parameterName: title,
  wrapper: getStory => <Wrapper>{getStory()}</Wrapper>,
});

export { action, getStoredTheme, namespace, themes, title };
