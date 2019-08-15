/* eslint-disable jsdoc/check-tag-names */
// check-tag-names does not work on polymorphic types
/* eslint-disable import/prefer-default-export */
import escapeStringRegexp from 'escape-string-regexp';
import fs from 'fs';
import path from 'path';
import { pipe, toPairs, map, reduce } from 'ramda';

const beginTemplateMarker = /\/\*\s*BEGIN\sTEMPLATE\s*\*\//gm;
const endTemplateMarker = /\/\*\s*END\sTEMPLATE\s*\*\//gm;

/**
 * picks the given index from an array
 * @template T
 * @param index
 * @returns {function(Array<T>): T}
 */
const pickIndex = index => array => array[index];
/**
 * Splits the input at the begin template marker
 * @param {string} str
 * @returns {Array<string>}
 */
const splitByBeginMarker = str => str.split(beginTemplateMarker);
/**
 * Splits the input at the end template marker
 * @param {string} str
 * @returns {Array<string>}
 */
const splitByEndMarker = str => str.split(endTemplateMarker);
/**
 * cuts out the template from begin marker to end marker
 * @function
 * @param {string} rawTemplate
 * @returns {string} template from begin to end marker
 */
const sliceOutTemplate = pipe(
  splitByBeginMarker,
  pickIndex(1),
  splitByEndMarker,
  pickIndex(0)
);
/**
 * transforms the input object into an array of [regex, string] pairs
 * needed to search and replace interpolations
 * @function
 * @param {Object.<string, string>} interpolation values
 * @returns {Array.<[RegExp, string]>>}
 */
const processVars = pipe(
  toPairs,
  map(([key, value]) => [new RegExp(escapeStringRegexp(key), 'gm'), value])
);
/**
 * Processes the input template with the list of regex,string pairs
 * @function
 * @param {string} template
 * @param {Array.<[Regexp, string]>} interpolation regex, value pairs
 * @returns {string} processed (i.e. interpolated) template
 */
const processTemplate = reduce((template, [regex, replaceValue]) =>
  template.replace(regex, replaceValue)
);

/**
 * Interpolate a template with the variable values
 * @param {string} template
 * @returns {function(Object.<string, string>): string}
 */
const interpolate = template => {
  const cleanedTemplate = sliceOutTemplate(template);
  return (vars = {}) => processTemplate(cleanedTemplate, processVars(vars));
};

/**
 * interpolate the icons template
 * @function
 * @param {Object.<string, string>} the interpolations to apply
 * @returns {string} the interpolated template
 */
export const iconTemplate = interpolate(
  fs.readFileSync(path.join(__dirname, 'icon.template.js'), 'utf8')
);
