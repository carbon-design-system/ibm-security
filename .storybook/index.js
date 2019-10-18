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

// Configuration for disabling the centering addon in individual stories.
const disableCentered = stories =>
  stories.addParameters({
    centered: {
      disable: true,
    },
  });

export {
  disableCentered,
  getComponentsCategory as components,
  getPatternsCategory as patterns,
  HIERARCHY_ROOT_SEPARATOR,
  ORDER,
};
