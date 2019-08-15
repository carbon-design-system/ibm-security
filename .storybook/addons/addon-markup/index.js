/**
 * @file Markup entry point.
 * @copyright IBM Security 2019
 */

import addons, { makeDecorator } from '@storybook/addons';
import { html } from 'js-beautify';
import { renderToString } from 'react-dom/server';

const namespace = 'addon-markup';
const action = `${namespace}/add`;

const configuration = {
  inline: '',
};

export { action, namespace };

/**
 * Creates a render object to pass to the panel.
 * @param {string} output - The output to display.
 * @param {string} type - The language to display.
 * @returns {Object.<string, string>} The configuration to render.
 */
const createRender = (output, type) => ({
  output,
  type,
});

export default makeDecorator({
  name: 'withMarkup',
  parameterName: 'markup',
  wrapper: (getStory, context) => {
    const story = getStory(context);

    let render;

    try {
      render = createRender(
        html(renderToString(story.props.children), configuration),
        'html'
      );
    } catch (error) {
      render = createRender(error.message, 'bash');
    }

    addons.getChannel().emit(action, render);

    return story;
  },
});
