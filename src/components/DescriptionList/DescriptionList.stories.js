/**
 * @file Description list stories.
 * @copyright IBM Security 2019 - 2020
 */

import React from 'react';

import { components, getDocsParameters } from '../../../.storybook';

import {
  DescriptionList,
  DescriptionListBody,
  DescriptionListCell,
  DescriptionListRow,
} from '../..';

export default {
  title: components(DescriptionList.name),
  component: DescriptionList,
  subcomponents: {
    DescriptionListBody,
    DescriptionListCell,
    DescriptionListRow,
  },
  argTypes: {
    bordered: { table: { disable: true } },
    children: { control: { disable: true } },
  },
  parameters: {
    ...getDocsParameters(),
  },
};

export const Default = args => (
  <DescriptionList {...args}>
    <DescriptionListBody>
      <DescriptionListRow>
        <DescriptionListCell>Term 1</DescriptionListCell>

        <DescriptionListCell>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </DescriptionListCell>
      </DescriptionListRow>

      <DescriptionListRow>
        <DescriptionListCell>Term 2</DescriptionListCell>

        <DescriptionListCell>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
          lacus ex at libero. Aenean euismod viverra odio, id volutpat turpis
          commodo.
        </DescriptionListCell>
      </DescriptionListRow>

      <DescriptionListRow>
        <DescriptionListCell>Term 3</DescriptionListCell>

        <DescriptionListCell>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
          lacus ex at libero.
        </DescriptionListCell>
      </DescriptionListRow>
    </DescriptionListBody>
  </DescriptionList>
);
