/**
 * @file Card tests.
 * @copyright IBM Security 2019
 */

import { shallow } from 'enzyme';
import React from 'react';

import { children, className } from '../../_mocks_';

import { Card, CardSkeleton } from '../../..';

import { image, label, link, tag, text as bodyText, title } from '../_mocks_';

const props = {
  className,
  label,

  header: {
    tag,
    image,
    title,
  },

  body: {
    text: bodyText,
  },

  footer: {
    children,
  },
};

describe('Card', () => {
  let card;

  beforeEach(() => {
    card = shallow(<Card {...props}>{children}</Card>);
  });

  it('renders', () => {
    expect(card).toMatchSnapshot();
  });

  it("renders the HTML of the node's subtree", () => {
    expect(card.render()).toMatchSnapshot();
  });

  it('renders the link variation', () => {
    card.setProps({
      link,
      onClick: jest.fn(),
    });

    expect(card).toMatchSnapshot();
  });

  it('renders the skeleton variation', () => {
    expect(shallow(<CardSkeleton />)).toMatchSnapshot();
  });
});
