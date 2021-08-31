/**
 * @file Getting Started page layout stories.
 * @copyright IBM Security 2020 - 2021
 */

import React from 'react';
import { Add16, Launch16 } from '@carbon/icons-react';
import placeholder from '../LayoutModules/GettingStartedModule/images/placeholder.svg';

import { pageLayouts } from '../../../.storybook';

import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Column,
  DescriptionModule,
  GettingStartedModule,
  Row,
  Tab,
  Tabs,
  TitleBarModule,
} from '../..';

import config from './stories';

const { decorators, parameters } = config;

// TODO: Remove workaround for https://github.ibm.com/security/design-core-experience/issues/241

export default {
  title: pageLayouts('Getting Started'),
  parameters,
  decorators,
};

export const Default = () => (
  <>
    <Breadcrumb>
      <BreadcrumbItem href="/#">Homepage</BreadcrumbItem>
    </Breadcrumb>
    <TitleBarModule element="h2" title="Playbooks" />
    <Row narrow>
      <Column>
        <Tabs>
          <Tab label="Tab label 1">
            <GettingStartedModule>
              {({ getLayoutProps }) => {
                const {
                  description,
                  primaryButton,
                  secondaryButton,
                  tertiaryButton,
                  illustration,
                  additionalInfo,
                } = getLayoutProps();

                return (
                  <>
                    <Column lg={6}>
                      <DescriptionModule {...description}>
                        {({ getLayoutProps }) => {
                          return (
                            <>
                              <TitleBarModule title="Learn to build your first playbook" />
                              <p {...getLayoutProps()}>
                                Build your security process from beginning to
                                end, all in one place. Learn to build a playbook
                                today.{' '}
                              </p>
                            </>
                          );
                        }}
                      </DescriptionModule>
                      <Button {...primaryButton} kind="primary">
                        Learn to build a playbook
                      </Button>
                      <Button
                        {...secondaryButton}
                        kind="ghost"
                        renderIcon={Add16}>
                        Create playbook
                      </Button>
                      <p {...additionalInfo}>
                        To learn more about building a playbook, visit the
                        Knowledge Center.
                      </p>
                      <Button
                        {...tertiaryButton}
                        kind="ghost"
                        renderIcon={Launch16}>
                        Knowledge Center
                      </Button>
                    </Column>
                    <Column lg={{ span: 7, offset: 2 }}>
                      <img
                        {...illustration}
                        src={placeholder}
                        alt="Getting started illustration"
                      />
                    </Column>
                  </>
                );
              }}
            </GettingStartedModule>
          </Tab>
          <Tab label="Tab label 2"></Tab>
          <Tab label="Tab label 3"></Tab>
        </Tabs>
      </Column>
    </Row>
  </>
);
