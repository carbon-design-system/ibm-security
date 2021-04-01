/**
 * @file Search bar mocks.
 * @copyright IBM Security 2019 - 2021
 */

const scopes = [
  {
    id: 'scope-2',
    name: 'Scope 2',
  },
  {
    id: 'scope-1',
    name: 'Scope 1',
  },
  {
    id: 'scope-3',
    name: 'Scope 3',
  },
];

export default {
  allSelectedScopesLabel: 'All scopes',
  clearButtonLabelText: 'Clear',
  labelText: 'Label',
  placeholder: 'Placeholder',
  scopes,
  scopesTypeLabel: 'Scopes',
  selectedScopes: [scopes[0]],
  submitLabel: 'Submit',
  value: 'Initial value',
};
