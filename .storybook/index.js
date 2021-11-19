/**
 * @file Storybook helpers.
 * @copyright IBM Security 2019 - 2021
 */

import { LIBRARY } from '../src/components/LayoutModules/stories';

// Category labels.
const CATEGORIES = {
  COMPONENTS: 'Components',
  DEPRECATED: 'Deprecated',
  LAYOUT_MODULES: 'Layout modules',
  PAGE_LAYOUTS: 'Layouts',
  PATTERNS: 'Patterns',
};

const { COMPONENTS, DEPRECATED, LAYOUT_MODULES, PAGE_LAYOUTS, PATTERNS } =
  CATEGORIES;

const ORDER = [
  LAYOUT_MODULES,
  [LIBRARY],
  PAGE_LAYOUTS,
  PATTERNS,
  COMPONENTS,
  DEPRECATED,
];

/**
 * Returns a formatted string for the Storybook category.
 * @param {string} categoryName The category name to format.
 * @param {string} storyName The story name to format.
 * @returns {string} The formatted category and story name.
 */
const getCategory = (categoryName, storyName) => `${categoryName}/${storyName}`;

/**
 * Binds Storybook category to the `getCategory` method.
 * @param {string} categoryName The category name to bind.
 */
const bindCategory = (categoryName) => getCategory.bind(this, categoryName);

/**
 * Returns a formatted string for the components category.
 * @param {string} storyName The story name to format.
 * @returns {string} The formatted component category and story name.
 */
const getComponentsCategory = bindCategory(COMPONENTS);

/**
 * Returns a formatted string for the deprecated category.
 * @param {string} storyName The story name to format.
 * @returns {string} The formatted deprecated category and story name.
 */
const getDeprecatedCategory = bindCategory(DEPRECATED);

/**
 * Returns a formatted string for the layout modules category.
 * @param {string} storyName The story name to format.
 * @returns {string} The formatted layout module category and story name.
 */
const getLayoutModulesCategory = bindCategory(LAYOUT_MODULES);

/**
 * Returns a formatted string for the page layouts category.
 * @param {string} storyName The story name to format.
 * @returns {string} The formatted page layout category and story name.
 */
const getPageLayoutsCategory = bindCategory(PAGE_LAYOUTS);

/**
 * Returns a formatted string for the patterns category.
 * @param {string} storyName The story name to format.
 * @returns {string} The formatted pattern category and story name.
 */
const getPatternsCategory = bindCategory(PATTERNS);

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
const disableCenteredStories = (stories) =>
  stories.addParameters(disableCentered());

// Returns the formatted ID to embed a story in Docs — https://storybook.js.org/docs/rax/api/mdx#embedding-stories
function getDocsId(id) {
  return id;
}

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

const parameters = {};

export {
  disableCentered,
  disableCenteredStories,
  getComponentsCategory as components,
  getDeprecatedCategory as deprecated,
  getDocsId,
  getDocsParameters,
  getLayoutModulesCategory as layoutModules,
  getPageLayoutsCategory as pageLayouts,
  getPatternsCategory as patterns,
  info,
  ORDER,
  parameters,
};
