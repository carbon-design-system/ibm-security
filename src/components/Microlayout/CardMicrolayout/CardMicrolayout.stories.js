/**
 * @file Card Microlayout stories.
 * @copyright IBM Security 2021
 */

import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { AreaChart } from '@carbon/charts-react';

import {
  WarningAltFilled20,
  Edit16,
  Maximize16,
  Restart16,
  FolderAdd16,
} from '@carbon/icons-react';

import { Grid, Row, Column } from 'carbon-components-react';

import React from 'react';

import { components } from '../../../../.storybook';

import {
  Card,
  CardMicrolayout,
  DescriptionModule,
  DescriptionListModule,
  InlineLoading,
  IconButtonBar,
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutCell,
  TypeLayoutRow,
  Checkbox,
  ICA,
  ICAModule,
  Button,
} from '../../..';

import { image } from './_mocks_';

const prefix = 'card-microlayout';
const headerPrefix = `header.`;

const microlayoutProps = {
  overview: {
    screenshot: () => ({
      header: {
        title: 'Screenshot_12_30.png',
        tag: 'Screenshot',
      },
      body: {
        description: 'This looks gnarly...',
      },
      footer: {
        date: 'Apr 30 2020',
      },
    }),
    entitlement: () => ({
      header: {
        title: 'Atlassian entitlements review',
      },
    }),
    query: () => ({
      header: {
        title: '',
        tag: 'STIX 2 Pattern',
      },
    }),
    threat: () => ({
      header: {
        title: 'Imma Threatin',
        tag: 'Threat activity',
      },
    }),
  },
  screenshot: () => ({
    header: {
      title: text(`Title (${headerPrefix}title)`, 'Screenshot_12_30.png'),
      tag: text(`Subtitle (${headerPrefix}tag)`, 'Screenshot'),
    },
    body: {
      description: text(`Description (description)`, 'This looks gnarly...'),
    },
    footer: {
      date: text(`Date (date)`, 'Apr 30 2020'),
    },
  }),
  entitlement: () => ({
    header: {
      title: text(
        `Title (${headerPrefix}title)`,
        'Atlassian entitlements review'
      ),
    },
  }),
  query: () => ({
    header: {
      title: '',
      tag: text(`Subtitle (${headerPrefix}tag)`, 'STIX 2 Pattern'),
    },
  }),
  threat: () => ({
    header: {
      title: text(`Title (${headerPrefix}title)`, 'Imma Threatin'),
      tag: text(`Subtitle (${headerPrefix}tag)`, 'Threat activity'),
    },
  }),
};

const iconBarActions = {
  screenshot: [
    {
      label: 'Edit',
      renderIcon: Edit16,
    },
    {
      label: 'Maximize',
      renderIcon: Maximize16,
    },
  ],
  entitlement: [
    {
      label: 'Edit',
      renderIcon: Edit16,
    },
    {
      label: 'Label 1',
    },
    {
      label: 'Label 2',
    },
    {
      label: 'Label 3',
    },
  ],
  query: [
    {
      label: 'Restart',
      renderIcon: Restart16,
    },
    {
      label: 'Edit',
      renderIcon: Edit16,
    },
    {
      label: 'Add to Folder',
      renderIcon: FolderAdd16,
    },
  ],
};

const screenshotCard = props => (
  <Card {...props}>
    <CardMicrolayout>
      {() => (
        <>
          <DescriptionModule>
            {({ getLayoutProps }) => (
              <p {...getLayoutProps()}>{props.body.description}</p>
            )}
          </DescriptionModule>
          <img src={image} alt="Card Microlayout Screenshot" />

          {/*
            The horizontal rule, custom CSS classes, and IconButtonBar will be unnecessary when migrating to C&CS, 
            since setting a Card to "productive" will automatically set these styles
          */}

          <hr />

          <Row className={`${prefix}--toolbar-row`}>
            <Column>
              <p className={`${prefix}--toolbar-text`}>
                Added {props.footer.date}
              </p>
            </Column>
            <Column>
              <IconButtonBar
                actions={iconBarActions.screenshot}
                className={`${prefix}--toolbar-icons`}
                iconTooltipDirection="bottom"
                length={2}
                overflowMenuDirection="top"
                size="sm"
                tooltip
              />
            </Column>
          </Row>
        </>
      )}
    </CardMicrolayout>
  </Card>
);

const entitlementCard = props => (
  <Card {...props}>
    <CardMicrolayout>
      {() => (
        <>
          <InlineLoading
            description="85% complete (269/329)"
            className={`${prefix}--loader`}
          />
          <DescriptionListModule>
            <TypeLayout>
              <TypeLayoutBody>
                <TypeLayoutRow>
                  <TypeLayoutCell>Type</TypeLayoutCell>
                  <TypeLayoutCell>User entitlement</TypeLayoutCell>
                </TypeLayoutRow>
                <TypeLayoutRow>
                  <TypeLayoutCell>Application</TypeLayoutCell>
                  <TypeLayoutCell>ServiceNow [+2]</TypeLayoutCell>
                </TypeLayoutRow>
                <TypeLayoutRow>
                  <TypeLayoutCell>End date</TypeLayoutCell>
                  <TypeLayoutCell>Oct 25 2019</TypeLayoutCell>
                </TypeLayoutRow>
                <TypeLayoutRow>
                  <TypeLayoutCell>Time left</TypeLayoutCell>
                  <TypeLayoutCell>12 days</TypeLayoutCell>
                </TypeLayoutRow>
              </TypeLayoutBody>
            </TypeLayout>
          </DescriptionListModule>

          {/*
            The horizontal rule, custom CSS classes, and IconButtonBar will be unnecessary when migrating to C&CS, 
            since a Card can be set to "productive" to automatically set these styles
          */}

          <hr />

          <Row className={`${prefix}--toolbar-row`}>
            <Column>
              <Checkbox labelText="Select" id="checkbox-label-1" />
            </Column>
            <Column>
              <IconButtonBar
                actions={iconBarActions.entitlement}
                className={`${prefix}--toolbar-icons`}
                iconTooltipDirection="bottom"
                length={2}
                overflowMenuDirection="top"
                size="sm"
                tooltip
              />
            </Column>
          </Row>
        </>
      )}
    </CardMicrolayout>
  </Card>
);

const queryCard = props => (
  <Card {...props}>
    <CardMicrolayout>
      {() => (
        <>
          <p className={`${prefix}--query`}>
            [<span className={`${prefix}--query-ip`}>ipv4-addr:value</span>{' '}
            <span className={`${prefix}--query-equals`}>=</span>
            <br /> ‘192.0.2.1’]{' '}
            <span className={`${prefix}--query-start`}>START</span>
            <br />{' '}
            <span className={`${prefix}--query-date`}>
              t’2019-04-30T19:32:00.00
            </span>
            …
          </p>

          <AreaChart
            data={[
              {
                group: 'Dataset 1',
                date: 1558453260000,
                value: 2,
              },
              {
                group: 'Dataset 1',
                date: 1558453320000,
                value: 3,
              },
              {
                group: 'Dataset 1',
                date: 1558453380000,
                value: 4,
              },
              {
                group: 'Dataset 1',
                date: 1558453440000,
                value: 3,
              },
              {
                group: 'Dataset 1',
                date: 1558453500000,
                value: 2,
              },
              {
                group: 'Dataset 1',
                date: 1558453560000,
                value: 4,
              },
              {
                group: 'Dataset 1',
                date: 1558453620000,
                value: 3,
              },
              {
                group: 'Dataset 1',
                date: 1558453680000,
                value: 4,
              },
              {
                group: 'Dataset 1',
                date: 1558453740000,
                value: 2,
              },
            ]}
            options={{
              grid: {
                x: {
                  enabled: false,
                },
                y: {
                  enabled: false,
                },
              },
              axes: {
                bottom: {
                  visible: false,
                  title: '2019 Annual Sales Figures',
                  mapsTo: 'date',
                  scaleType: 'time',
                },
                left: {
                  visible: false,
                  mapsTo: 'value',
                  scaleType: 'linear',
                },
              },
              color: {
                gradient: {
                  enabled: true,
                },
              },
              points: {
                enabled: false,
              },
              legend: {
                enabled: false,
              },
              height: '200px',
            }}
          />
          <DescriptionListModule>
            <TypeLayout>
              <TypeLayoutBody>
                <TypeLayoutRow>
                  <TypeLayoutCell>Results</TypeLayoutCell>
                  <TypeLayoutCell>1.7k</TypeLayoutCell>
                </TypeLayoutRow>
                <TypeLayoutRow>
                  <TypeLayoutCell>Data sources</TypeLayoutCell>
                  <TypeLayoutCell>QRadar, Splunk... [+3]</TypeLayoutCell>
                </TypeLayoutRow>
                <TypeLayoutRow>
                  <TypeLayoutCell>End date</TypeLayoutCell>
                  <TypeLayoutCell>Apr 30 3:00PM - Apr 3 12:00PM</TypeLayoutCell>
                </TypeLayoutRow>
              </TypeLayoutBody>
            </TypeLayout>
          </DescriptionListModule>

          {/*
            The horizontal rule, custom CSS classes, and IconButtonBar will be unnecessary when migrating to C&CS, 
            since a Card can be set to "productive" to automatically set these styles
          */}

          <hr />

          <Row className={`${prefix}--toolbar-row`}>
            <Column>
              <IconButtonBar
                actions={iconBarActions.query}
                className={`${prefix}--toolbar-icons`}
                iconTooltipDirection="bottom"
                length={3}
                overflowMenuDirection="top"
                size="sm"
                tooltip
              />
            </Column>
          </Row>
        </>
      )}
    </CardMicrolayout>
  </Card>
);

const threatCard = props => (
  <Card {...props} className={`${prefix}--buttons-card`}>
    <CardMicrolayout>
      {() => (
        <>
          <DescriptionModule>
            {({ getLayoutProps }) => (
              <p {...getLayoutProps()}>
                This adversary has been active since at least 2011. Successful
                targets include Apple, Facebook, Twitter, and Microsoft...
              </p>
            )}
          </DescriptionModule>

          <ICAModule>
            {() => (
              <Row>
                <Column>
                  <ICA
                    forceShowTotal={false}
                    label="X-Force Threat"
                    locale="en"
                    percentage
                    total={null}
                    truncate={false}
                    value={95}
                  />
                </Column>
                <Column>
                  <ICA
                    forceShowTotal={false}
                    label="Found indicators"
                    locale="en"
                    percentage
                    total={null}
                    truncate={false}
                    value={10}
                  />
                </Column>
              </Row>
            )}
          </ICAModule>

          {/*
            The horizontal rule, custom CSS classes, and IconButtonBar will be unnecessary when migrating to C&CS, 
            since a Card can be set to "productive" to automatically set these styles
          */}

          <hr />

          <div className={`${prefix}--toolbar-btns bx--btn-set`}>
            <Button kind="ghost">
              <WarningAltFilled20
                aria-label="Warning"
                className={`${prefix}--warning-icon`}
              />
              View warning
            </Button>
            <Button kind="ghost" className={`${prefix}--right-btn`}>
              Scan now
            </Button>
          </div>
        </>
      )}
    </CardMicrolayout>
  </Card>
);

storiesOf(components('Microlayout'), module)
  .add('Cards Overview', () => (
    <Grid>
      <Row>
        <Column>
          {screenshotCard(microlayoutProps.overview.screenshot())}
        </Column>
        <Column>
          {entitlementCard(microlayoutProps.overview.entitlement())}
        </Column>
        <Column>{queryCard(microlayoutProps.overview.query())}</Column>
        <Column>{threatCard(microlayoutProps.overview.threat())}</Column>
      </Row>
    </Grid>
  ))
  .add('Screenshot Card', () => screenshotCard(microlayoutProps.screenshot()))
  .add('Entitlement Card', () =>
    entitlementCard(microlayoutProps.entitlement())
  )
  .add('Query Card', () => queryCard(microlayoutProps.query()))
  .add('Threat Card', () => (
    <Grid>
      <Row>
        <Column />
        <Column>{threatCard(microlayoutProps.threat())}</Column>
        <Column />
      </Row>
    </Grid>
  ));
