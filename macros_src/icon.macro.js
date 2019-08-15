/* eslint-disable */

import { createMacro } from 'babel-plugin-macros';

import icons from '@ibmduo/icons/ibm-icons.json';
import { iconTemplate } from './templates';

import {
  converge,
  identity,
  propEq,
  pipe,
  find,
  __,
  filter,
  join,
  map,
  lensPath,
  view,
  defaultTo,
  prop,
} from 'ramda';

/**
 * @template A
 */
class OptionBase {
  /**
   * @template B
   * @param {function(A): B} f
   * @returns {OptionBase<B>}
   */
  map(f) {}

  /**
   * @template B
   * @param {function(A): B} f
   * @returns {B}
   */
  flatMap(f) {}

  /**
   * call ifSome - when instanceof Some
   * call ifNone - when None
   * @param ifNone
   * @param ifSome
   */
  fold(ifNone, ifSome) {}
}
const None = (() => {
  class None extends OptionBase {
    map = _f => {
      return this;
    };
    flatMap = _f => {
      return this;
    };
    fold = (ifNone, ifSome) => {
      return ifNone();
    };
  }
  return new None();
})();

/**
 * @template A
 */
class Some extends OptionBase {
  /**
   * @private x
   */
  #x;

  /**
   * @param {A} x
   */
  constructor(x) {
    super();
    this.#x = x;
  }
  map = f => {
    return Option(f(this.#x));
  };
  flatMap = f => {
    return f(this.#x);
  };
  fold = (ifNone, ifSome) => {
    return ifSome(this.#x);
  };
}
/**
 * Option type factory. Creates Option type variants (Some(x)|None) for given x
 * @param {A} x
 * @returns {Option.<A>}
 */
const Option = x => (x != null ? new Some(x) : None);

/**
 * creates instances of Some
 * @param x
 * @returns {Some}
 */
const some = x => new Some(x);
/**
 * get a None (None is a singleton)
 * @param _x
 * @returns {None}
 */
const none = _x => None;

/**
 * @template A
 * @typedef {None|Some.<A>} Option
 */

const namespace = 'security--';

const getComponentNamespace = componentName => `${namespace}${componentName}`;

const getReactIcon = (() => {
  const iconsObject = require('@ibmduo/icons-react');
  const icons = Object.keys(iconsObject).reduce((icons, name) => {
    const plainName = name.replace(/\d{2}$/, '');
    const size = name.replace(plainName, '');
    if (!icons.has(plainName)) {
      icons.set(
        plainName,
        importName =>
          `import ${importName} from "@ibmduo/icons-react/lib/${plainName}/16";`
      );
    }
    icons.set(
      name,
      importName =>
        `import ${importName} from "@ibmduo/icons-react/lib/${plainName}/${size}";`
    );
    return icons;
  }, new Map());
  return name => {
    if (!icons.has(name)) {
      return none();
    }
    return some(icons.get(name));
  };
})();

const getIcon = (icons => {
  const iconTable = Object.entries(icons).map(([indexName, iconObj]) => ({
    ...iconObj,
    indexName,
  }));
  const some = predicateFn => (...args) => args.some(predicateFn);
  const selector = converge(some(identity), [
    propEq('name'),
    propEq('indexName'),
    propEq('id'),
  ]);

  /**
   * @sig findIcon :: IconObject ico, Option opt => string -> opt ico
   */
  return pipe(
    selector,
    find(__, iconTable),
    Option
  );
})(icons);

/**
 * interpolates the icon template
 * @param {string} pathElem
 * @param {string} name
 * @returns {string}
 */
const template = (pathElem, name) =>
  iconTemplate({
    $NAME: name,
    $PATH: pathElem,
    $DEFAULT_TO_NAME: 'DEFAULT_TO',
    $ICON_NAMESPACE: getComponentNamespace('icon'),
  });

const removeEmpty = filter(Boolean);
const joinBySpace = join(' ');
const transformPaths = map(prop('d'));

const svgPathLens = lensPath(['svgData', 'paths']);

const reducePaths = pipe(
  transformPaths,
  removeEmpty,
  joinBySpace
);

/**
 * gets all imports and require statements in a file (just at the top level)
 * -> needed to find the right position for inserting the generated icon components
 * @param file
 * @returns {*}
 */
const getImports = file =>
  file.path.get('body').filter(path => {
    if (path.type === 'VariableDeclaration') {
      return path
        .get('declarations')
        .some(
          declarationPath =>
            declarationPath.get('init').isCallExpression() &&
            declarationPath.get('init.callee').node.name === 'require'
        );
    }
    return path.type === 'ImportDeclaration';
  });

/**
 * inserts the generated Icon components into the file's AST
 * - just below the import and require declarations
 * @param ast
 * @param file
 */
const insert = (ast, file) => {
  const imports = getImports(file);
  imports[imports.length - 1].insertAfter(ast);
};

/**
 * renames the usages of the icon elements to their new name
 * @param openingElement
 * @param closingElement
 * @param name
 */
const renameIconElements = (openingElement = {}, closingElement = {}, name) => {
  if (!name) {
    throw new TypeError('name must be specified');
  }
  if (openingElement.node && openingElement.node.name) {
    openingElement.node.name.name = name;
  }
  if (closingElement.node && closingElement.node.name) {
    closingElement.node.name.name = name;
  }
};

/**
 * Compiles to an Icon component.
 *
 */
module.exports = createMacro(({ references, state, babel }) => {
  const { default: defaultImport = [] } = references;
  // generate a unique name for the helper function
  const defaultToIdentifier = state.file.scope.generateUidIdentifier(
    'defaultTo'
  );
  /**
   * defaultTo helper function for generated icon components
   */
  const defaultToTemplate = `function DEFAULT_TO(defaultVal) {
      return function(value) {
        if (value == null || Number.isNaN(value)) {
          return defaultVal;
        }
        return value;
      };
    }`;

  const rawSourceTemplates = [];
  const imports = [];

  // go through all useages of the default import
  defaultImport.forEach(path => {
    const { parentPath } = path;
    const _path = path;

    // throw if macro is not used as JSX element
    if (parentPath.type !== 'JSXOpeningElement') {
      throw path.hub.file.buildCodeFrameError(
        path.node,
        'This macro must be used as JSX element.'
      );
    }
    // read element attributes
    if (parentPath.type === 'JSXOpeningElement') {
      const propsByType = parentPath.parentPath
        .get('openingElement.attributes')
        .reduce(
          (propsByType, attributePath) => {
            switch (attributePath.type) {
              case 'JSXAttribute': {
                propsByType.props[
                  attributePath.get('name').node.name
                ] = attributePath.get('value');
                break;
              }
              case 'JSXSpreadAttribute': {
                propsByType.spread[
                  attributePath.get('argument').node.name
                ] = attributePath.get('argument');
                break;
              }
              default: {
                break;
              }
            }
            return propsByType;
          },
          { props: {}, spread: {} }
        );
      let { path, name = '', iconName } = propsByType.props;
      // takes a path and statically evaluates its value
      const evaluate = path => {
        if (path) {
          if (path.isStringLiteral()) {
            return path.evaluate().value;
          }
          if (path.isJSXExpressionContainer()) {
            return path.get('expression').evaluate().value;
          }
        }
      };
      const componentName = parentPath.hub.file.scope.generateUid(
        evaluate(name) || evaluate(iconName) || 'Icon'
      );
      const component = do {
        // creates a unique name for the generated component
        if (!path) {
          name = evaluate(name) || evaluate(iconName);
          // finds the icon and concatenates its path data
          const maybeIcon = getIcon(name).map(
            pipe(
              view(svgPathLens),
              defaultTo([]),
              reducePaths
            )
          );
          maybeIcon.fold(
            // we did not find a path. So we will take a look, if we find the icon in the react icons package
            () =>
              getReactIcon(name).fold(
                // we did not find an icon nor a path.
                // We pass null as path and let the defaultTo handler handle that case.
                () => template(`null`, componentName),
                // interpolate the template with the unique name
                iconTemplate => ({
                  type: 'import',
                  template: iconTemplate(componentName),
                })
              ),
            // we found a path. So we insert it's string representation to the generated component
            path => {
              const pathElem = `'${path}'`;
              return {
                type: 'component',
                template: template(pathElem, componentName),
              };
            }
          );
        } else {
          ({
            type: 'component',
            template: template(`null`, componentName),
          });
        }
      };
      // add the template to the sources that we are going to insert
      switch (component.type) {
        case 'import': {
          imports.push(component.template);
          break;
        }
        default: {
          rawSourceTemplates.push(component.template);
        }
      }
      renameIconElements(
        _path.parentPath.parentPath.get('openingElement'),
        _path.parentPath.parentPath.get('closingElement'),
        componentName
      );
    }
  });
  // generate an AST from concatenated source templates
  // TODO: dedupe generated icon components
  if (imports.length) {
    const importsAst = babel.template(imports.join('\n'))();
    state.file.path.get('body')[0].insertBefore(importsAst);
  }
  if (rawSourceTemplates.length) {
    const ast = babel.template.statements(
      defaultToTemplate + '\n' + rawSourceTemplates.join('\n'),
      {
        plugins: ['jsx', 'objectRestSpread'],
        preserveComments: true,
      }
    )({ DEFAULT_TO: defaultToIdentifier.name });
    //console.log(babel.generate(ast));
    insert(ast, state.file);
  }
});
