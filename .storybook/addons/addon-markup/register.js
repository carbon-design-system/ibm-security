/**
 * @file Markup registration.
 * @copyright IBM Security 2019
 */

import addons from '@storybook/addons';
import React, { Component } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import { action, namespace } from '.';

/**
 * Markup class.
 * @class
 */
class Markup extends Component {
  state = {
    output: null,
    type: null,
  };

  /**
   * Sets the panel to the markup passed into it.
   * @param {Object.<string, string>} render - The configuration to render.
   * @param {string} render.output - The output to display.
   * @param {string} render.type - The language to display.
   */
  onAddMarkup = ({ output, type }) =>
    this.setState({
      output,
      type,
    });

  componentDidMount = () => this.props.channel.on(action, this.onAddMarkup);

  render() {
    const { output, type } = this.state;

    return (
      this.props.active &&
      type === 'html' && (
        <SyntaxHighlighter language={type}>{output}</SyntaxHighlighter>
      )
    );
  }

  componentWillUnmount = () =>
    this.props.channel.removeListener(action, this.onAddMarkup);
}

addons.register(namespace, api =>
  addons.addPanel(`${namespace}/panel`, {
    title: 'Markup',
    render: ({ active }) => (
      <Markup active={active} api={api} channel={addons.getChannel()} />
    ),
  })
);
