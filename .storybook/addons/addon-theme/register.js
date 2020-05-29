/**
 * @file Theme registration component.
 * @copyright IBM Security 2019
 */

import { spacing05 } from '@carbon/layout/lib';
import addons from '@storybook/addons';

import React, { Component } from 'react';

import { action, getStoredTheme, namespace, themes, title } from '.';

import { Form, Select, SelectItem } from '../../../src';

import './index.scss';

const { addPanel, getChannel, register } = addons;

/**
 * Theme registration class.
 * @class
 */
class Theme extends Component {
  state = {
    value: getStoredTheme(),
  };

  /**
   * Change handler for the theme switching `select` element - this emits the theme back to the controller.
   * @param {Object.<string, *>} event An object containing event properties from the `select` element.
   * @param {string} event.target The event's target.
   */
  onChange = ({ target }) => {
    const { value } = target;

    this.setState({ value });
    this.props.api.emit(action, value);
  };

  render = () =>
    this.props.active && (
      <Form style={{ margin: spacing05 }}>
        <Select
          id={namespace}
          labelText={title}
          onChange={this.onChange}
          value={this.state.value}
        >
          {Object.keys(themes).map(theme => (
            <SelectItem key={theme} text={theme} value={themes[theme]} />
          ))}
        </Select>
      </Form>
    );
}

register(namespace, api =>
  addPanel(`${namespace}/panel`, {
    title,
    render: ({ active }) => (
      <Theme
        key="storybook/theme/panel"
        active={active}
        api={api}
        channel={getChannel()}
      />
    ),
  })
);
