/**
 * @file Theme registration component.
 * @copyright IBM Security 2019 - 2020
 */

import addons from '@storybook/addons';
import { Form } from '@storybook/components';

import React, { Component } from 'react';

import { action, getStoredTheme, namespace, themes, title } from '.';

const { addPanel, getChannel, register } = addons;
const { Field, Select } = Form;

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
      <Form>
        <Field label={title}>
          <Select onChange={this.onChange} value={this.state.value}>
            {Object.keys(themes).map((theme) => (
              <option key={theme} value={themes[theme]}>
                {theme}
              </option>
            ))}
          </Select>
        </Field>
      </Form>
    );
}

const panel = `${namespace}/panel`;

register(namespace, (api) =>
  addPanel(panel, {
    title,
    render: ({ active }) => (
      <Theme key={panel} active={active} api={api} channel={getChannel()} />
    ),
  })
);
