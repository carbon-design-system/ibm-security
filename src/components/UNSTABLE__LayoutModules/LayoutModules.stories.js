/**
 * @file Layout module stories.
 * @copyright IBM Security 2020
 */

import Activity16 from '@carbon/icons-react/lib/activity/16';
import Copy16 from '@carbon/icons-react/lib/copy/16';
import Filter16 from '@carbon/icons-react/lib/filter/16';
import Search16 from '@carbon/icons-react/lib/search/16';
import View16 from '@carbon/icons-react/lib/view/16';

import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';

import { Grid, Row, Column } from 'carbon-components-react';
import classnames from 'classnames';
import React from 'react';

import { disableCentered, meta, patterns } from '../../../.storybook';
import { carbonPrefix } from '../../globals/namespace';

import {
  ActionBarModule,
  ActionBarActions,
  ButtonClusterModule,
  Button,
  ContentSwitcher,
  DataTablePagination,
  Decorator,
  DescriptionModule,
  ICA,
  ICAModule,
  IconButtonBar,
  LayoutBackground,
  LayoutTitle,
  Link,
  PageTabDetails,
  PageTabModule,
  Switch,
  Tabs,
  Tab,
  Tag,
  TitleBarModule,
  TitleBarActions,
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutModule,
  TypeLayoutRow,
  TypeLayoutCell,
} from '../..';

import { namespace } from '.';

const props = () => ({
  className: classnames({ [`${namespace}--debug`]: boolean('Debug', false) }),
});

export const overview = () => (
  <Grid {...props()}>
    <Row>
      <Column>
        <ActionBarModule>
          <Tag type="gray">Closed</Tag> ID: 12 | Result: Completed
          <ActionBarActions>
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
              size="md"
            />
          </ActionBarActions>
        </ActionBarModule>
      </Column>
    </Row>
    <Row>
      <Column lg={12}>
        <Row>
          <LayoutBackground>
            <Column>
              <TypeLayoutModule>
                <LayoutTitle>
                  <h2 className={`${carbonPrefix}type-productive-heading-01`}>
                    General settings and scope
                  </h2>
                </LayoutTitle>

                <TypeLayout>
                  <TypeLayoutBody>
                    <TypeLayoutRow>
                      <TypeLayoutCell>Name</TypeLayoutCell>
                      <TypeLayoutCell>
                        ServiceNow entitlements review
                      </TypeLayoutCell>
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
                      <TypeLayoutCell>
                        All users and groups included
                      </TypeLayoutCell>
                    </TypeLayoutRow>
                    <TypeLayoutRow>
                      <TypeLayoutCell>Except for</TypeLayoutCell>
                      <TypeLayoutCell>
                        No users and groups excluded
                      </TypeLayoutCell>
                    </TypeLayoutRow>
                    <TypeLayoutRow>
                      <TypeLayoutCell>Reviewer</TypeLayoutCell>
                      <TypeLayoutCell>User manager</TypeLayoutCell>
                    </TypeLayoutRow>
                  </TypeLayoutBody>
                </TypeLayout>
              </TypeLayoutModule>
            </Column>
          </LayoutBackground>

          <Column>
            <Row>
              <LayoutBackground>
                <Column>
                  <TypeLayoutModule>
                    <LayoutTitle>
                      <h2
                        className={`${carbonPrefix}type-productive-heading-01`}
                      >
                        Schedule
                      </h2>
                    </LayoutTitle>

                    <TypeLayout>
                      <TypeLayoutBody>
                        <TypeLayoutRow>
                          <TypeLayoutCell>Start date</TypeLayoutCell>
                          <TypeLayoutCell>
                            Jul 1 2019 at 12:00PM CST
                          </TypeLayoutCell>
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
                </Column>
              </LayoutBackground>
            </Row>

            <Row>
              <LayoutBackground>
                <Column>
                  <TypeLayoutModule>
                    <LayoutTitle>
                      <h2
                        className={`${carbonPrefix}type-productive-heading-01`}
                      >
                        Campaign end
                      </h2>
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
              </LayoutBackground>
            </Row>
          </Column>
        </Row>

        <Row>
          <LayoutBackground>
            <Column>
              <Row>
                <Column>
                  <TitleBarModule>
                    <LayoutTitle>
                      <h2
                        className={`${carbonPrefix}type-productive-heading-01`}
                      >
                        Campaign results
                      </h2>
                    </LayoutTitle>

                    <TitleBarActions>
                      <ContentSwitcher onChange={action('onChange')}>
                        <Switch text="By reviewer" />
                        <Switch text="By account" />
                      </ContentSwitcher>
                    </TitleBarActions>
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

              <Row condensed>
                <Column>
                  <DataTablePagination
                    headers={[
                      {
                        header: 'Reviewer',
                        key: 'reviewer',
                      },
                      {
                        header: 'Approved',
                        key: 'approved',
                      },
                      {
                        header: 'Rejected',
                        key: 'rejected',
                      },
                      {
                        header: 'Not reviewed',
                        key: 'notReviewed',
                      },
                      {
                        header: 'Completion',
                        key: 'completion',
                      },
                    ]}
                    pageSize={5}
                    pageSizes={[5, 10, 25, 50]}
                    rows={[
                      {
                        approved: 5,
                        completion: '10%',
                        id: '0',
                        notReviewed: 54,
                        rejected: 0,
                        reviewer: 'john@cse-bank.com',
                      },
                      {
                        approved: 64,
                        completion: '92%',
                        id: '1',
                        notReviewed: 6,
                        rejected: 5,
                        reviewer: 'maria@cse-bank.com',
                      },
                      {
                        approved: 71,
                        completion: '100%',
                        id: '2',
                        notReviewed: 0,
                        rejected: 0,
                        reviewer: 'rogelio@cse-bank.com',
                      },
                    ]}
                  />
                </Column>
              </Row>
            </Column>
          </LayoutBackground>
        </Row>
      </Column>

      <Column lg={4}>
        <ButtonClusterModule>
          <Button kind="ghost" renderIcon={Copy16}>
            Duplicate campaign
          </Button>
          <Button kind="ghost" renderIcon={Activity16}>
            View activity report
          </Button>
        </ButtonClusterModule>

        <TypeLayoutModule>
          <LayoutTitle>
            <h2 className={`${carbonPrefix}type-productive-heading-01`}>
              Details
            </h2>
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
  </Grid>
);

export const detail = () => (
  <Grid {...props()}>
    <Row>
      <Column>
        <PageTabModule>
          <PageTabDetails>PageTabDetails</PageTabDetails>
          <Tabs selected={1}>
            <Tab label="Case" />
            <Tab label="Report">
              <Row>
                <Column lg={8}>
                  <DescriptionModule>
                    <LayoutTitle>
                      <h2
                        className={`${carbonPrefix}type-productive-heading-03`}
                      >
                        Summary
                      </h2>
                      <h3
                        className={`${carbonPrefix}type-productive-heading-01`}
                      >
                        Sub-section title
                      </h3>
                    </LayoutTitle>
                    <p
                      className={`${carbonPrefix}type-productive-body-short-01`}
                    >
                      BadFlick is a backdoor that is usually seen being
                      distributed using exploited word documents. It does not
                      have any persistence to survive reboot, but it is capable
                      of opening a reverse shell connection to its C2 server
                      where it can download and execute possibly other malware.
                    </p>
                    <Link href="#0">View more</Link>
                  </DescriptionModule>
                </Column>
                <Column lg={{ offset: 2, span: 6 }}>
                  <TypeLayoutModule>
                    <TypeLayout className={`${namespace}--mt--layout-03`}>
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
                  </TypeLayoutModule>
                </Column>
              </Row>

              <Row>
                <LayoutBackground>
                  <Column>
                    <Row>
                      <Column>
                        <TitleBarModule>
                          <LayoutTitle>
                            <h4
                              className={`${carbonPrefix}type-productive-heading-03`}
                            >
                              Indicators
                            </h4>
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

                    <Row condensed>
                      <Column>
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
                              name: (
                                <Decorator
                                  score={0}
                                  type="IP"
                                  value="103.243.175.181"
                                />
                              ),
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
                      </Column>
                    </Row>
                  </Column>
                </LayoutBackground>
              </Row>
            </Tab>
            <Tab label="Evidence" />
          </Tabs>
        </PageTabModule>
      </Column>
    </Row>
  </Grid>
);

export default meta(
  patterns('UNSTABLE LayoutModules'),
  'Create common, modular, page layouts to deliver consistent cross-portfolio experiences to our users while facilitating a faster time to market for offering teams.',
  disableCentered()
);
