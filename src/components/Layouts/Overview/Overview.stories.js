/**
 * @file Layout stories.
 * @copyright IBM Security 2020
 */

import Activity16 from '@carbon/icons-react/lib/activity/16';
import Copy16 from '@carbon/icons-react/lib/copy/16';
import { storiesOf } from '@storybook/react';

import classnames from 'classnames';
import React, { Children, cloneElement } from 'react';
import { Grid, Row, Column } from 'carbon-components-react';

import {
  Button,
  ICA,
  Tag,
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutRow,
  TypeLayoutCell,
} from '../../..';

import { getComponentNamespace } from '../../../../src/globals/namespace';
import { disableCentered, patterns } from '../../../../.storybook';

const { map, only } = Children;

const namespace = getComponentNamespace('layout');

const ActionBarModule = ({ children }) => (
  <div className={`${namespace}--action-bar`}>{children}</div>
);

const ActionBarActions = ({ children }) => (
  <div className={`${namespace}--action-bar__actions`}>{children}</div>
);

const ButtonClusterModule = ({ children }) => (
  <div className={`${namespace}--button-cluster`}>
    {map(children, child => (
      <div className={`${namespace}--button-cluster__button`}>{child}</div>
    ))}
  </div>
);

const ICAModule = ({ children }) => (
  <div className={`${namespace}--ica`}>{children}</div>
);

const LayoutTitle = ({ children }) =>
  only(children) &&
  cloneElement(children, {
    className: classnames(children.props.className, `${namespace}__title`),
  });

const TitleBarModule = ({ children }) => (
  <div className={`${namespace}--title-bar`}>{children}</div>
);

const TypeLayoutModule = ({ children }) => (
  <div className={`${namespace}--type-layout`}>{children}</div>
);

disableCentered(storiesOf(patterns('Layouts'), module)).add('Overview', () => (
  <Grid>
    <Row>
      <Column>
        <ActionBarModule>
          <Tag type="gray">Closed</Tag> ID: 12 | Result: Completed
          <ActionBarActions>ActionBarActions</ActionBarActions>
        </ActionBarModule>
      </Column>
    </Row>
    <Row>
      <Column md={4} lg={6}>
        <TypeLayoutModule>
          <LayoutTitle>
            <h2 className="bx--type-productive-heading-01">
              General settings and scope
            </h2>
          </LayoutTitle>

          <TypeLayout>
            <TypeLayoutBody>
              <TypeLayoutRow>
                <TypeLayoutCell>Name</TypeLayoutCell>
                <TypeLayoutCell>ServiceNow entitlements review</TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Description</TypeLayoutCell>
                <TypeLayoutCell>
                  Sample description of the ServiceNow entitlements review
                  campaign that may need to go to several lines.
                </TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Type</TypeLayoutCell>
                <TypeLayoutCell>User entitlements</TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Priority</TypeLayoutCell>
                <TypeLayoutCell>Medium</TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Applications</TypeLayoutCell>
                <TypeLayoutCell>
                  <ul>
                    <li>ServiceNow 1</li>
                    <li>ServiceNow 2</li>
                    <li>ServiceNow 3</li>
                  </ul>
                </TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Include only</TypeLayoutCell>
                <TypeLayoutCell>All users and groups included</TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Except for</TypeLayoutCell>
                <TypeLayoutCell>No users and groups excluded</TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Reviewer</TypeLayoutCell>
                <TypeLayoutCell>User manager</TypeLayoutCell>
              </TypeLayoutRow>
            </TypeLayoutBody>
          </TypeLayout>
        </TypeLayoutModule>
      </Column>
      <Column md={4} lg={6}>
        <TypeLayoutModule>
          <LayoutTitle>
            <h2 className="bx--type-productive-heading-01">Schedule</h2>
          </LayoutTitle>

          <TypeLayout>
            <TypeLayoutBody>
              <TypeLayoutRow>
                <TypeLayoutCell>Start date</TypeLayoutCell>
                <TypeLayoutCell>Jul 1 2019 at 12:00PM CST</TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Duration</TypeLayoutCell>
                <TypeLayoutCell>20 days</TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Frequency</TypeLayoutCell>
                <TypeLayoutCell>
                  This campaign repeats every 3 months
                </TypeLayoutCell>
              </TypeLayoutRow>
            </TypeLayoutBody>
          </TypeLayout>
        </TypeLayoutModule>
        <TypeLayoutModule>
          <LayoutTitle>
            <h2 className="bx--type-productive-heading-01">Campaign end</h2>
          </LayoutTitle>

          <TypeLayout>
            <TypeLayoutBody>
              <TypeLayoutRow>
                <TypeLayoutCell>Reminders</TypeLayoutCell>
                <TypeLayoutCell>
                  Start 10 days before campaign ends
                </TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Campaign end</TypeLayoutCell>
                <TypeLayoutCell>
                  Take no action on entitlements not reviewed
                </TypeLayoutCell>
              </TypeLayoutRow>
            </TypeLayoutBody>
          </TypeLayout>
        </TypeLayoutModule>
      </Column>
      <Column md={8} lg={4}>
        <ButtonClusterModule>
          <Button kind="ghost" renderIcon={Copy16}>
            Duplicate campaign
          </Button>
          <Button kind="ghost" renderIcon={Activity16}>
            View activity report
          </Button>
        </ButtonClusterModule>

        <TypeLayoutModule stacked>
          <LayoutTitle>
            <h2 className="bx--type-productive-heading-01">Details</h2>
          </LayoutTitle>

          <TypeLayout>
            <TypeLayoutBody>
              <TypeLayoutRow>
                <TypeLayoutCell>Created by</TypeLayoutCell>
                <TypeLayoutCell>
                  <ul>
                    <li>Scott Damon</li>
                    <li>scottd@cse-bank.com</li>
                    <li>ServiceNow 3</li>
                  </ul>
                </TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Created on</TypeLayoutCell>
                <TypeLayoutCell>Jun 21 2018</TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Modified on</TypeLayoutCell>
                <TypeLayoutCell>–</TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Closed on</TypeLayoutCell>
                <TypeLayoutCell>Jul 15 2018</TypeLayoutCell>
              </TypeLayoutRow>
            </TypeLayoutBody>
          </TypeLayout>
        </TypeLayoutModule>
      </Column>
    </Row>
    <Row>
      <Column>
        <TitleBarModule>
          <LayoutTitle>
            <h2 className="bx--type-productive-heading-01">Campaign results</h2>
          </LayoutTitle>
        </TitleBarModule>
      </Column>
    </Row>
    <ICAModule>
      <Row>
        <Column md={2} lg={3}>
          <ICA label="Reviews complete" value={300} />
        </Column>
        <Column md={2} lg={3}>
          <ICA label="Approved" value={241} />
        </Column>
        <Column md={2} lg={3}>
          <ICA label="Rejected" value={28} />
        </Column>
      </Row>
    </ICAModule>
  </Grid>
));
