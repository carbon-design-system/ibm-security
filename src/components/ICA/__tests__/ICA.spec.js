/**
 * @file Important content area tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import { ICA } from '../../..';
import { Locales } from '../ICA';

import props from '../_mocks_';

const { label, total, value } = props;

const defaultProps = { label, value };

describe('ICA', () => {
  let ica;
  const largeValue = value * total;

  beforeEach(() => {
    ica = shallow(<ICA {...defaultProps} />);
  });

  it('renders', () => {
    expect(ica).toMatchSnapshot();
  });

  it('renders the null value', () => {
    ica.setProps({ value: null });

    expect(ica).toMatchSnapshot();
  });

  it('renders a large value', () => {
    ica.setProps({ value: largeValue });

    expect(ica).toMatchSnapshot();
  });

  it('renders a subset of values', () => {
    ica.setProps({ total });

    expect(ica).toMatchSnapshot();
  });

  it('does not render a subset when the total is close to the provided value', () => {
    ica.setProps({ total: largeValue - value, value: largeValue });
    expect(ica).toMatchSnapshot();
  });

  it('renders with a value that is same as the total value', () => {
    ica.setProps({ total: value });

    expect(ica).toMatchSnapshot();
  });

  it('renders a percentage', () => {
    ica.setProps({ percentage: true, total });

    expect(ica).toMatchSnapshot();
  });

  it('renders a total when forced', () => {
    ica.setProps({ forceShowTotal: true, total: value });

    expect(ica).toMatchSnapshot();
  });

  Locales.forEach(locale =>
    it(`accepts '${locale}' locale`, () => {
      ica.setProps({ locale });

      expect(() => ica).not.toThrow();
    })
  );
});
