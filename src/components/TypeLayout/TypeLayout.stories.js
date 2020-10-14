/**
 * @file Type layout stories.
 * @copyright IBM Security 2019 - 2020
 */

import React from 'react';

import { components, getDocsParameters } from '../../../.storybook';

import {
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutCell,
  TypeLayoutRow,
} from '../..';

export default {
  title: components(TypeLayout.name),
  component: TypeLayout,
  subcomponents: { TypeLayoutBody, TypeLayoutCell, TypeLayoutRow },
  argTypes: {
    bordered: { table: { disable: true } },
    children: { control: { disable: true } },
  },
  parameters: {
    ...getDocsParameters(),
  },
};

export const Default = args => (
  <TypeLayout {...args}>
    <TypeLayoutBody>
      <TypeLayoutRow>
        <TypeLayoutCell>Term 1</TypeLayoutCell>

        <TypeLayoutCell>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </TypeLayoutCell>
      </TypeLayoutRow>

      <TypeLayoutRow>
        <TypeLayoutCell>Term 2</TypeLayoutCell>

        <TypeLayoutCell>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
          lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis
          commodo.
        </TypeLayoutCell>
      </TypeLayoutRow>

      <TypeLayoutRow>
        <TypeLayoutCell>Term 3</TypeLayoutCell>

        <TypeLayoutCell>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
          lacus ex at libero.
        </TypeLayoutCell>
      </TypeLayoutRow>
    </TypeLayoutBody>
  </TypeLayout>
);
