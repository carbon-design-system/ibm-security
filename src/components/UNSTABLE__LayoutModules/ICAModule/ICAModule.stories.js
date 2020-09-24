/**
 * @file ICA module stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import { Column, ICA, ICAModule, Row, withHover } from '../../..';
import getTitle from '../stories';
import page from './index.mdx';

export default {
  title: getTitle(ICAModule),
  component: ICAModule,
  parameters: {
    docs: { page },
    info: {
      disable: true,
    },
  },
};

export const Default = () => (
  <ICAModule>
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
  </ICAModule>
);

export const Hover = () => {
  const HoverColumn = withHover(Column);

  return (
    <ICAModule>
      <Row>
        <HoverColumn>
          <ICA label="Label" value={100} />
        </HoverColumn>

        <HoverColumn>
          <ICA label="Label" value={100} />
        </HoverColumn>

        <HoverColumn>
          <ICA label="Label" value={100} />
        </HoverColumn>
      </Row>
    </ICAModule>
  );
};
