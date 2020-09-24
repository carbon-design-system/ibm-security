/**
 * @file Layout module stories.
 * @copyright IBM Security 2020
 */

import { breakpoints } from '@carbon/layout';

import { Column, Row } from 'carbon-components-react';
import React from 'react';

import { meta, patterns } from '../../../.storybook';

import { ICA as ICAComponent, ICAModule, ICAModuleICA, TitleBar } from '../..';

const ICA = () => (
  <ICAModule>
    <TitleBar title="Summary" />
    <Row>
      <ICAModuleICA interactive>
        <Column>
          <ICAComponent label="Reviews complete" value={300} />
        </Column>
      </ICAModuleICA>
      <ICAModuleICA interactive>
        <Column>
          <ICAComponent label="Approved" value={241} />
        </Column>
      </ICAModuleICA>
      <ICAModuleICA interactive>
        <Column>
          <ICAComponent label="Rejected" value={28} />
        </Column>
      </ICAModuleICA>
    </Row>
  </ICAModule>
);

export default meta(patterns('UNSTABLE Layout Modules [Beta]'), null, null, [
  story => <div style={{ width: breakpoints.lg.width }}>{story()}</div>,
]);

export { ICA };
