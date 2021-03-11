/**
 * @file Description list module stories.
 * @copyright IBM Security 2020 - 2021
 */

import React from 'react';

import {
  DescriptionListModule,
  TitleBarModule,
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutCell,
  TypeLayoutRow,
} from '../../..';

import { getDocsParameters } from '../../../../.storybook';

import getTitle from '../stories';
import page from './index.mdx';

export default {
  title: getTitle(DescriptionListModule),
  component: DescriptionListModule,
  parameters: {
    docs: { page },

    ...getDocsParameters(),
  },
};

export const Default = () => (
  <DescriptionListModule>
    <TypeLayout>
      <TypeLayoutBody>
        <TypeLayoutRow>
          <TypeLayoutCell>Term</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
            lacus ex at libero.
          </TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell>Term</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell>Term</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell>Term</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TypeLayoutCell>
        </TypeLayoutRow>
      </TypeLayoutBody>
    </TypeLayout>
  </DescriptionListModule>
);

export const Variant = () => (
  <DescriptionListModule>
    <TitleBarModule title="Section title" />

    <TypeLayout>
      <TypeLayoutBody>
        <TypeLayoutRow>
          <TypeLayoutCell>Term</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            accumsan, dui ut pulvinar mattis, diam est imperdiet ex, a varius
            lacus ex at libero.
          </TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell>Term</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell>Term</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell>Term</TypeLayoutCell>

          <TypeLayoutCell>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </TypeLayoutCell>
        </TypeLayoutRow>
      </TypeLayoutBody>
    </TypeLayout>
  </DescriptionListModule>
);

Variant.parameters = {
  viewMode: 'canvas',
};
