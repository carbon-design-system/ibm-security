/**
 * @file Search bar mocks.
 * @copyright IBM Security 2019
 */

const scopes = new Array(3)
  .fill()
  .map((name = 'Scope', id) => ({ id, name: `${name} ${id + 1}` }));

export default {
  submitLabel: 'Submit',
  placeHolderText: 'Placeholder',
  labelText: 'Label',
  clearButtonLabelText: 'Clear',
  value: 'Initial value',
  scopes,
  selectedScopes: [scopes[0]],
  scopesTypeLabel: 'Scopes',
  allSelectedScopesLabel: 'All scopes',
};
