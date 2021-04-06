/**
 * @file Storybook helpers.
 * @copyright IBM Security 2019 - 2021
 */

// Category labels.
const CATEGORIES = {
  COMPONENTS: 'Components',
  PATTERNS: 'Patterns',
};

const { COMPONENTS, PATTERNS } = CATEGORIES;

const HIERARCHY_ROOT_SEPARATOR = '/';

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
  layout: 'fullscreen',
});

/**
 * Configuration for disabling the centering addon in individual stories.
 * @param {Object<string, Object>} stories The collection of stories to disable the addon for.
 * @returns {Object<string, Object>} The collection of stories.
 */
const disableCenteredStories = stories =>
  stories.addParameters(disableCentered());

/**
 * Helper configuration for aligning stories supporting Storybook Docs with the same addon and tab configuration.
 * @returns {Object<string, Object>} The helper configuration.
 */
const getDocsParameters = () => ({
  controls: { disable: false },
  info: {
    disable: true,
  },
  knobs: { disable: true },
  previewTabs: {
    'storybook/docs/panel': {
      hidden: false,
    },
  },
  viewMode: 'docs',
});

/**
 * Configuration for applying information to individual stories.
 * @param {string} description The information to apply to individual stories.
 * @param {{library: string, story: string, id: string}} [component={}] An object containing component information to redirect to.
 * @returns {Object<string, string>} The configuration containing information to apply.
 */

const info = (
  description,
  { group = 'components', library = 'react', story } = {}
) => ({
  info: story
    ? `${description}

Also refer to http://${library}.carbondesignsystem.com/?path=/docs/${group}-${story}`
    : description,
});

export {
  deprecate,
  disableCentered,
  disableCenteredStories,
  getComponentsCategory as components,
  getDocsParameters,
  getPatternsCategory as patterns,
  HIERARCHY_ROOT_SEPARATOR,
  info,
  ORDER,
};
