/**
 * @file Type layout module stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import {
  Title,
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutCell,
  TypeLayoutModule,
  TypeLayoutRow,
} from '../../../..';
import { getTitle } from '../../stories';

import page from './index.mdx';

export default {
  title: getTitle(TypeLayoutModule),
  component: TypeLayoutModule,
  subcomponents: { Title },
  parameters: { docs: { page } },
};

export const Default = () => (
  <TypeLayoutModule>
    <TypeLayout>
      <TypeLayoutBody>
        <TypeLayoutRow>
          <TypeLayoutCell>Term 1</TypeLayoutCell>
          <TypeLayoutCell>Definition 1</TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell>Term 2</TypeLayoutCell>
          <TypeLayoutCell>Definition 2</TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell>Term 3</TypeLayoutCell>
          <TypeLayoutCell>Definition 3</TypeLayoutCell>
        </TypeLayoutRow>
      </TypeLayoutBody>
    </TypeLayout>
  </TypeLayoutModule>
);

export const title = () => (
  <TypeLayoutModule>
    <Title>Section title</Title>

    <TypeLayout>
      <TypeLayoutBody>
        <TypeLayoutRow>
          <TypeLayoutCell>Term 1</TypeLayoutCell>
          <TypeLayoutCell>Definition 1</TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell>Term 2</TypeLayoutCell>
          <TypeLayoutCell>Definition 2</TypeLayoutCell>
        </TypeLayoutRow>

        <TypeLayoutRow>
          <TypeLayoutCell>Term 3</TypeLayoutCell>
          <TypeLayoutCell>Definition 3</TypeLayoutCell>
        </TypeLayoutRow>
      </TypeLayoutBody>
    </TypeLayout>
  </TypeLayoutModule>
);
