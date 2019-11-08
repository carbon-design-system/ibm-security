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
 * Configuration for disabling the centering addon in individual stories.
 * @param {Object<string, Object>} stories The collection of stories to disable the addon for.
 * @returns {Object<string, Object>} The collection of stories.
 */
const disableCentered = stories =>
  stories.addParameters({
    centered: {
      disable: true,
    },
  });

/**
 * Configuration for applying information to individual stories.
 * @param {string} description The information to apply to individual stories.
 * @param {Object.<string, string>} carbon - An object containing Carbon information to redirect to.
 * @returns {Object<string, string>} The configuration containing information to apply.
 */
const info = (description, carbon = null) => ({
  info: carbon
    ? `${description}

Also refer to http://react.carbondesignsystem.com/?path=/story/${carbon.story}--${carbon.id}`
    : description,
});

/**
 * Configuration for applying metadata information to stories.
 * @param {string} title The title to apply to stories.
 * @param {string} info The information to apply to stories.
 * @returns {Object<string, string>} The configuration containing information to apply.
 */
const meta = (title, info) => ({
  parameters: {
    info,
  },
  title,
});

export {
  disableCentered,
  getComponentsCategory as components,
  getPatternsCategory as patterns,
  HIERARCHY_ROOT_SEPARATOR,
  info,
  meta,
  ORDER,
};
