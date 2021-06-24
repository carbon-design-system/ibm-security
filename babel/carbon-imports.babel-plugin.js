const genReplaceRule =
  (cjsPath, esPath) =>
  (moduleType = 'lib') => ({
    from: moduleType === 'es' ? cjsPath : esPath,
    to: moduleType === 'es' ? esPath : cjsPath,
  });

const replaceRules = [
  genReplaceRule('@carbon/icons-react/lib/', '@carbon/icons-react/es/'),
  genReplaceRule('carbon-components-react/lib/', 'carbon-components-react/es/'),
];

function plugin(babel) {
  const { types: t } = babel;

  function replacePath(path, state) {
    if (!path.get('source').node) {
      return;
    }

    replaceRules.forEach((replaceRuleFromType) => {
      const replaceRule = replaceRuleFromType(state.opts.moduleType);
      if (path.get('source').node.value.includes(replaceRule.from)) {
        const replacement = t.stringLiteral(
          path
            .get('source')
            .node.value.replace(replaceRule.from, replaceRule.to)
        );
        path.get('source').replaceWith(replacement);
      }
    });
  }

  return {
    visitor: {
      ImportDeclaration: replacePath,
      ExportNamedDeclaration: replacePath,
    },
  };
}
module.exports = plugin;
