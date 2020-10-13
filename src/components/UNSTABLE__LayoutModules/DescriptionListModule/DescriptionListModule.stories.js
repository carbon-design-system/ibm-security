/**
 * @file Description list module stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import {
  DescriptionList,
  DescriptionListBody,
  DescriptionListCell,
  DescriptionListModule,
  DescriptionListRow,
  TitleBarModule,
} from '../../..';

import { getDocsParameters } from '../../../../.storybook';

import getTitle from '../stories';

export default {
  title: getTitle(DescriptionListModule),
  component: DescriptionListModule,
  parameters: {
    ...getDocsParameters(),
  },
};

export const Default = () => (
  <DescriptionListModule>
    <DescriptionList>
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
  </DescriptionListModule>
);

export const Title = () => (
  <DescriptionListModule>
    <TitleBarModule title="Section title" />

    <DescriptionList>
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
  </DescriptionListModule>
);
