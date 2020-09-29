/**
 * @file Type layout module stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import {
  TitleBar,
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutCell,
  TypeLayoutRow,
} from '../../..';

import getTitle, { getDocsParameters } from '../stories';

import page from './index.mdx';

export default {
  title: getTitle(TypeLayout),
  component: TypeLayout,
  subcomponents: { TypeLayoutBody, TypeLayoutCell, TypeLayoutRow },
  parameters: {
    ...getDocsParameters(page),
  },
  argTypes: {
    bordered: { table: { disable: true } },
    children: { control: { disable: true } },
  },
};

export const Default = args => (
  <TypeLayout {...args}>
    <TypeLayoutBody>
      <TypeLayoutRow>
        <TypeLayoutCell>Term 1</TypeLayoutCell>

        <TypeLayoutCell>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
          lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis
          commodo.
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
          lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis
          commodo.
        </TypeLayoutCell>
      </TypeLayoutRow>
    </TypeLayoutBody>
  </TypeLayout>
);

export const title = args => (
  <>
    <TitleBar title="Section title" />

    <TypeLayout {...args}>
      <TypeLayoutBody>
        <TypeLayoutRow>
          <TypeLayoutCell>Term 1</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
            lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis
            commodo.
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
            lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis
            commodo.
          </TypeLayoutCell>
        </TypeLayoutRow>
      </TypeLayoutBody>
    </TypeLayout>
  </>
);
