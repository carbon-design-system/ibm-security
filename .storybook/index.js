/**
 * @file Storybook helpers.
 * @copyright IBM Security 2019
 */

// Category labels.
const CATEGORIES = {
  COMPONENTS: 'Components',
  PATTERNS: 'Patterns',
};

const { COMPONENTS, PATTERNS } = CATEGORIES;

const HIERARCHY_ROOT_SEPARATOR = '|';

const ORDER = [PATTERNS, COMPONENTS];

/**
 * Returns a formatted string for the Storybook category.
 * @param {string} categoryName The category name to format.
 * @param {string} storyName The story name to format.
 * @returns {string} The formatted category and story name.
 */
const getCategory = (categoryName, storyName) =>
  `${categoryName}${HIERARCHY_ROOT_SEPARATOR}${storyName}`;

/**
 * Binds Storybook category to the `getCategory` method.
 * @param {string} categoryName The category name to bind.
 */
const bindCategory = categoryName => getCategory.bind(this, categoryName);

/**
 * Returns a formatted string for the components category.
 * @param {string} storyName The story name to format.
 * @returns {string} The formatted component category and story name.
 */
const getComponentsCategory = bindCategory(COMPONENTS);

/**
 * Returns a formatted string for the patterns category.
 * @param {string} storyName The story name to format.
 * @returns {string} The formatted pattern category and story name.
 */
const getPatternsCategory = bindCategory(PATTERNS);

/**
 * Returns a formatted string for deprecated components.
 * @param {string} name The name to deprecated.
 * @returns {string} The formatted deprecated string.
 */
const deprecate = name => `${name} [Deprecated]`;

/**
 * Configuration for disabling the centering addon.
 * @returns {Object<string, Object>} The disabled configuration.
 */
const disableCentered = () => ({
  centered: {
    disable: true,
  },
});

/**
 * Configuration for disabling the centering addon in individual stories.
 * @param {Object<string, Object>} stories The collection of stories to disable the addon for.
 * @returns {Object<string, Object>} The collection of stories.
 */
const disableCenteredStories = stories =>
  stories.addParameters(disableCentered());
/**
 * Configuration for applying information to individual stories.
 * @param {string} description The information to apply to individual stories.
 * @param {{library: string, story: string, id: string}} [component={}] An object containing component information to redirect to.
 * @returns {Object<string, string>} The configuration containing information to apply.
 */
const info = (description, component = {}) => ({
  info:
    component.library && component.story && component.id
      ? `${description}

Also refer to http://${component.library}.carbondesignsystem.com/?path=/story/${component.story}--${component.id}`
      : description,
});

/**
 * Configuration for applying metadata information to stories.
 * @param {string} title The title to apply to stories.
 * @param {string} description The information to apply to individual stories.
 * @param {Object<string, Object>} parameters Additional parameters to apply to the stories.
 * @returns {Object<string, string>} The configuration containing information to apply.
 */
const meta = (title, description, parameters) => ({
  parameters: { ...info(description), ...parameters },
  title,
});

export {
  deprecate,
  disableCentered,
  disableCenteredStories,
  getComponentsCategory as components,
  getPatternsCategory as patterns,
  HIERARCHY_ROOT_SEPARATOR,
  info,
  meta,
  ORDER,
};
