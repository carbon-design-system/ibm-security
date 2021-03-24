/**
 * @file Card stories.
 * @copyright IBM Security 2019
 */

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import {
  WarningAltFilled20,
  Edit16,
  Maximize16,
  Restart16,
  FolderAdd16,
  ChartLineData32,
} from '@carbon/icons-react';

import { components } from '../../../.storybook';

import {
  Card,
  CardSkeleton,
  SearchBar,
  StatusIcon,
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
  ButtonSet,
  Button,
} from '../..';

import { image, label, link, tag, text as bodyText, title } from './_mocks_';

const footerDescription = 'Status';
const headerPrefix = `header.`;

const props = () => ({
  header: {
    tag: text(`Subtitle (${headerPrefix}tag)`, tag),
    image: text(`Icon (${headerPrefix}image)`, image),
    title: text(`Title (${headerPrefix}title)`, title),
  },

  body: {
    text: text('Description (body.text)', bodyText),
  },

  footer: {
    children: (
      <StatusIcon
        description={footerDescription}
        message={footerDescription}
        status="success"
      />
    ),
  },
});

const microLayoutProps = {
  card1: {
    header: {
      title: 'Screenshot_12_30.png',
      tag: 'Screenshot',
    },
  },
  card2: {
    header: {
      title: 'Atlassian entitlements review',
    },
  },
  card3: {
    header: {
      tag: 'STIX 2 Pattern',
    },
  },
  card4: {
    header: {
      title: 'Imma Threatin',
      tag: 'Threat activity',
    },
  },
};

const iconBarActions = {
  card1: [
    {
      className: 'class',
      disabled: false,
      divider: undefined,
      iconClassName: 'class',
      label: 'Edit',
      onClick: function noRefCheck() {},
      renderIcon: Edit16,
    },
    {
      className: 'class',
      disabled: false,
      divider: undefined,
      iconClassName: 'class',
      label: 'Maximize',
      onClick: function noRefCheck() {},
      renderIcon: Maximize16,
    },
  ],
  card2: [
    {
      className: 'class',
      disabled: false,
      divider: undefined,
      iconClassName: 'class',
      label: 'Edit',
      onClick: function noRefCheck() {},
      renderIcon: Edit16,
    },
    {
      className: 'class',
      disabled: false,
      divider: undefined,
      iconClassName: 'class',
      label: 'Label 1',
      onClick: function noRefCheck() {},
    },
    {
      className: 'class',
      disabled: false,
      divider: undefined,
      iconClassName: 'class',
      label: 'Label 2',
      onClick: function noRefCheck() {},
    },
    {
      className: 'class',
      disabled: false,
      divider: undefined,
      iconClassName: 'class',
      label: 'Label 3',
      onClick: function noRefCheck() {},
    },
  ],
  card3: [
    {
      className: 'class',
      disabled: false,
      divider: undefined,
      iconClassName: 'class',
      label: 'Restart',
      onClick: function noRefCheck() {},
      renderIcon: Restart16,
    },
    {
      className: 'class',
      disabled: false,
      divider: undefined,
      iconClassName: 'class',
      label: 'Edit',
      onClick: function noRefCheck() {},
      renderIcon: Edit16,
    },
    {
      className: 'class',
      disabled: false,
      divider: undefined,
      iconClassName: 'class',
      label: 'Add to Folder',
      onClick: function noRefCheck() {},
      renderIcon: FolderAdd16,
    },
  ],
};

const searchLabelText = 'Search';

storiesOf(components('Card'), module)
  .add('Default', () => <Card />)
  .add('Content', () => (
    <Card
      {...props()}
      label={text('Icon label (label)', label)}
      link={text('Link (link)', link)}
      onClick={action('onClick')}
    />
  ))
  .add('Child with light background', () => (
    <Card>
      <SearchBar
        clearButtonLabelText="Clear"
        labelText={searchLabelText}
        placeHolderText={searchLabelText}
        submitLabel="Submit"
      />
    </Card>
  ))
  .add('Skeleton', () => (
    <Card>
      <CardSkeleton />
    </Card>
  ))
  .add('micro layouts', () => (
    <div className="bx--row">
      <div className="bx--col">
        <Card {...microLayoutProps.card1} className="microlayout">
          <DescriptionModule>
            {({ getLayoutProps }) => (
              <p {...getLayoutProps()}>This looks gnarly...</p>
            )}
          </DescriptionModule>
          <img
            className="microLayout__screenshot"
            src={image}
            alt="Carbon illustration"
          />
          <hr />
          <div className="bx--row card-toolbar">
            <div className="bx--col">
              <p className="card-toolText">Added Apr 30 2020</p>
            </div>
            <div className="bx--col">
              <IconButtonBar
                actions={iconBarActions.card1}
                className="icon-bar"
                iconTooltipDirection="bottom"
                length={2}
                overflowMenuDirection="top"
                size="sm"
                tooltip
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="bx--col">
        <Card
          {...microLayoutProps.card2}
          label="card-2"
          link="#"
          className="microlayout card2"
        >
          <InlineLoading
            description="85% complete (269/329)"
            className="loader"
            status="active"
            successDelay={1500}
          />
          <DescriptionListModule>
            <TypeLayout>
              <TypeLayoutBody>
                <TypeLayoutRow>
                  <TypeLayoutCell>Type</TypeLayoutCell>
                  <TypeLayoutCell>User entitlement</TypeLayoutCell>
                </TypeLayoutRow>
                ß
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
          <hr />
          <div className="bx--row card-toolbar">
            <div className="bx--col">
              <Checkbox labelText="Select" id="checkbox-label-1" />
            </div>
            <div className="bx--col">
              <IconButtonBar
                actions={iconBarActions.card2}
                className="icon-bar"
                iconTooltipDirection="bottom"
                length={2}
                overflowMenuDirection="top"
                size="sm"
                tooltip
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="bx--col">
        <Card
          {...microLayoutProps.card3}
          label="card-3"
          link="#"
          className="microlayout card3"
        >
          <p className="code-header">
            [<span className="txt-ip">ipv4-addr:value</span>{' '}
            <span className="txt-equals">=</span>
            <br /> ‘192.0.2.1’] <span className="txt-start">START</span>
            <br /> <span className="txt-date">t’2019-04-30T19:32:00.00</span>…
          </p>
          <ChartLineData32 className="custom-chart" />
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
          <hr />
          <div className="bx--row card-toolbar">
            <div className="bx--col">
              <IconButtonBar
                actions={iconBarActions.card3}
                className="icon-bar"
                iconTooltipDirection="bottom"
                length={3}
                overflowMenuDirection="top"
                size="sm"
                tooltip
              />
            </div>
          </div>
        </Card>
      </div>
      <div className="bx--col">
        <Card
          {...microLayoutProps.card4}
          label="card-4"
          className="microlayout card4"
        >
          <DescriptionModule className="desc-extraMargin">
            {({ getLayoutProps }) => (
              <p {...getLayoutProps()}>
                This adversary has been active since at least 2011. Successful
                targets include Apple, Facebook, Twitter, and Microsoft...
              </p>
            )}
          </DescriptionModule>
          <div className="bx--row">
            <div className="bx--col">
              <ICA
                className="custom-percent"
                forceShowTotal={false}
                label="X-Force Threat Score"
                locale="en"
                percentage
                total={null}
                truncate={false}
                value={95}
              />
            </div>
            <div className="bx--col">
              <ICA
                className="custom-percent"
                forceShowTotal={false}
                label="Found indicators"
                locale="en"
                percentage
                total={null}
                truncate={false}
                value={10}
              />
            </div>
          </div>
          <hr className="big-top" />
          <ButtonSet className="warning-btns">
            <Button kind="ghost">
              <WarningAltFilled20
                aria-label="Warning"
                className="warning-icon"
              />
              View warning
            </Button>
            <Button kind="ghost" className="right-align">
              Scan now
            </Button>
          </ButtonSet>
        </Card>
      </div>
    </div>
  ));
