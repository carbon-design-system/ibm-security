/**
 * @file ICA module stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import { getDocsParameters } from '../../../../.storybook';

import { Column, ICA, ICAModule, Row } from '../../..';

import getTitle from '../stories';
import page from './index.mdx';

export default {
  title: getTitle(ICAModule),
  component: ICAModule,
  parameters: {
    docs: { page },

    ...getDocsParameters(),
  },
};

export const Default = () => (
  <ICAModule>
    {() => (
      <Row>
        <Column>
          <ICA label="Label" value={100} />
        </Column>

        <Column>
          <ICA label="Label" value={100} />
        </Column>

        <Column>
          <ICA label="Label" value={100} />
        </Column>
      </Row>
    )}
  </ICAModule>
);

export const Hover = () => (
  <ICAModule>
    {({ getHoverProps }) => (
      <Row>
        <Column {...getHoverProps()}>
          <ICA label="Label" value={100} />
        </Column>

        <Column {...getHoverProps()}>
          <ICA label="Label" value={100} />
        </Column>

        <Column {...getHoverProps()}>
          <ICA label="Label" value={100} />
        </Column>
      </Row>
    )}
  </ICAModule>
);
