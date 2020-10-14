/**
 * @file ICA module stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import { getDocsParameters } from '../../../../.storybook';

import { Column, ICA, ICAModule, Row } from '../../..';

import getTitle from '../stories';

export default {
  title: getTitle(ICAModule),
  component: ICAModule,
  parameters: {
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

export const Interaction = () => (
  <ICAModule hover>
    {({ getLayoutProps }) => (
      <Row>
        <Column {...getLayoutProps()}>
          <ICA label="Label" value={100} />
        </Column>

        <Column {...getLayoutProps()}>
          <ICA label="Label" value={100} />
        </Column>

        <Column {...getLayoutProps()}>
          <ICA label="Label" value={100} />
        </Column>
      </Row>
    )}
  </ICAModule>
);
