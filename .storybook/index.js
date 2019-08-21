/**
 * @file Storybook helpers.
 * @copyright IBM Security 2019
 */

// Category labels.
const CATEGORIES = {
  COMPONENTS: 'Components',
  EXPERIMENTAL: 'Experimental',
  PATTERNS: 'Patterns',
};

const { COMPONENTS, EXPERIMENTAL, PATTERNS } = CATEGORIES;

const HIERARCHY_ROOT_SEPARATOR = '|';

const ORDER = [PATTERNS, COMPONENTS, EXPERIMENTAL];

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
 * Returns a formatted string for the experimetnal category.
 * @param {string} storyName The story name to format.
 * @returns {string} The formatted experimental category and story name.
 */
const getExperimentalCategory = bindCategory(EXPERIMENTAL);

/**
 * Returns a formatted string for the patterns category.
 * @param {string} storyName The story name to format.
 * @returns {string} The formatted pattern category and story name.
 */
const getPatternsCategory = bindCategory(PATTERNS);

export {
  getComponentsCategory as components,
  getExperimentalCategory as experimental,
  getPatternsCategory as patterns,
  HIERARCHY_ROOT_SEPARATOR,
  ORDER,
};
