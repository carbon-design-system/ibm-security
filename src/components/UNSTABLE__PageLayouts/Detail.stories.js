/**
 * @file Detail page layout stories.
 * @copyright IBM Security 2020 - 2021
 */

import { Filter16, Search16, View16 } from '@carbon/icons-react';

import { settings } from 'carbon-components';
import React from 'react';

import { pageLayouts } from '../../../.storybook';

import {
  ActionBarModule,
  ActionBarModuleItems,
  CardAreaModule,
  DataTablePagination,
  Decorator,
  DescriptionModule,
  DescriptionListModule,
  ICA,
  ICAModule,
  IconButtonBar,
  SummaryCard as SummaryCardComponent,
  SummaryCardHeader,
  TitleBarModule,
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutCell,
  TypeLayoutRow,
  withBackground,
} from '../..';

import config from './stories';

const { decorators, parameters } = config;
const { prefix } = settings;

const SummaryCard = withBackground(SummaryCardComponent);
const DivWithBackground = withBackground(`div`);

export default {
  title: pageLayouts('Detail'),
  parameters,
  decorators,
};

export const Default = () => (
  <div className={`${prefix}--css-grid ${prefix}--css-grid--narrow`}>
    <div className={`${prefix}--col-span-100 ${prefix}--gutter-start`}>
      <TitleBarModule title="Summary" />
    </div>

    <div className={`${prefix}--col-span-6 ${prefix}--gutter-start`}>
      <DescriptionModule>
        {({ getLayoutProps }) => (
          <p {...getLayoutProps()}>
            BadFlick is a backdoor that is usually seen being distributed using
            exploited word documents. It does not have any persistence to
            survive reboot, but it is capable of opening a reverse shell
            connection to its C2 server where it can download and execute
            possibly other malware.
          </p>
        )}
      </DescriptionModule>
    </div>

    <div
      className={`${prefix}--col-start-9 ${prefix}--col-span-8 ${prefix}--gutter-start`}
    >
      <DescriptionListModule>
        <TypeLayout>
          <TypeLayoutBody>
            <TypeLayoutRow>
              <TypeLayoutCell>Created by</TypeLayoutCell>
              <TypeLayoutCell>X-Force IRIS</TypeLayoutCell>
            </TypeLayoutRow>
            <TypeLayoutRow>
              <TypeLayoutCell>Last updated</TypeLayoutCell>
              <TypeLayoutCell>Jul 14 2019</TypeLayoutCell>
            </TypeLayoutRow>
          </TypeLayoutBody>
        </TypeLayout>
      </DescriptionListModule>
    </div>

    <div className={`${prefix}--col-span-100 ${prefix}--gutter-start`}>
      <TitleBarModule title="Related reports" />
    </div>

    <div className={`${prefix}--col-span-100 ${prefix}--gutter-start`}>
      <ActionBarModule>
        Supplementary details
        <ActionBarModuleItems>
          <IconButtonBar
            actions={[
              {
                label: 'Search',
                renderIcon: Search16,
              },
              {
                label: 'Filter',
                renderIcon: Filter16,
              },
              {
                label: 'View',
                renderIcon: View16,
              },
            ]}
            size="lg"
          />
        </ActionBarModuleItems>
      </ActionBarModule>
    </div>

    <CardAreaModule className={`${prefix}--col-span-100`}>
      {({ getLayoutProps }) => (
        <div className={`${prefix}--css-grid ${prefix}--css-grid--narrow`}>
          <div className={`${prefix}--col-span-25`}>
            <SummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Threat actor" />
            </SummaryCard>
          </div>
          <div className={`${prefix}--col-span-25`}>
            <SummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Threat report" />
            </SummaryCard>
          </div>
          <div className={`${prefix}--col-span-25`}>
            <SummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="IP report" />
            </SummaryCard>
          </div>
          <div className={`${prefix}--col-span-25`}>
            <SummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Vulnerability report" />
            </SummaryCard>
          </div>
        </div>
      )}
    </CardAreaModule>

    <DivWithBackground className={`${prefix}--col-span-100`}>
      <TitleBarModule element="h4" title="Indicators" className={`${prefix}--gutter-start`} />

      <ICAModule>
        {({ getLayoutProps }) => (
          <div className={`${prefix}--css-grid ${prefix}--css-grid--narrow`}>
            <div {...getLayoutProps({ className: `${prefix}--sm:col-span-2 ${prefix}--md:col-span-2 ${prefix}--lg:col-span-3` })}>
              <ICA label="Malware" value={11} />
            </div>
            <div{...getLayoutProps({ className: `${prefix}--sm:col-span-2 ${prefix}--md:col-span-2 ${prefix}--lg:col-span-3` })}>
              <ICA label="IPs" value={8} />
            </div>
            <div {...getLayoutProps({ className: `${prefix}--sm:col-span-2 ${prefix}--md:col-span-2 ${prefix}--lg:col-span-3` })}>
              <ICA label="URLs" value={9} />
            </div>
            <div {...getLayoutProps({ className: `${prefix}--sm:col-span-2 ${prefix}--md:col-span-2 ${prefix}--lg:col-span-3` })}>
              <ICA label="VULs" value={1} />
            </div>
          </div>
        )}
      </ICAModule>

      <DataTablePagination
        headers={[
          {
            header: 'Name',
            key: 'name',
          },
          {
            header: 'Last sighted',
            key: 'lastSighted',
          },
        ]}
        pageSize={5}
        pageSizes={[5, 10, 25, 50]}
        rows={[
          {
            id: '0',
            lastSighted: 'Feb 3 2019 12:00 PM EST',
            name: (
              <Decorator
                score={7}
                type="MAL"
                value="5020c08bcc061236643293bf0d897321"
              />
            ),
          },
          {
            id: '1',
            lastSighted: 'Feb 5 2019 12:00 PM EST',
            name: (
              <Decorator
                score={7}
                type="MAL"
                value="aca7037286b64b0da05c9708d647c013"
              />
            ),
          },
          {
            id: '2',
            lastSighted: 'Feb 7 2019 12:00 PM EST',
            name: (
              <Decorator
                score={7}
                type="MAL"
                value="bd9e4c82bf12c4e7a58221fc52fed705"
              />
            ),
          },
          {
            id: '3',
            lastSighted: 'Apr 1 2019 12:00 PM EST',
            name: <Decorator score={0} type="IP" value="103.243.175.181" />,
          },
          {
            id: '4',
            lastSighted: 'Apr 1 2019 12:00 PM EST',
            name: (
              <Decorator
                score={7}
                type="MAL"
                value="5020c08bcc061236643293bf0d897321"
              />
            ),
          },
        ]}
      />
    </DivWithBackground>
  </div>
);
