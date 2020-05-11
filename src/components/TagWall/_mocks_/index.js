/**
 * @file Tag wall mocks
 * @copyright IBM Security 2019
 */

export default {
  items: new Array(8).fill().map((value = 'Tag', id) => ({
    id: `${id}`,
    label: `${value} ${id + 1}`,
    isSelected: id < 3,
    props: {
      exampleProp: 'example-value',
    },
  })),
  label: 'Label',
  addLabel: 'Add',
};
