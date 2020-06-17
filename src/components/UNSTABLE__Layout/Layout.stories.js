/**
 * @file Layout module stories.
 * @copyright IBM Security 2020
 */

import Activity16 from '@carbon/icons-react/lib/activity/16';
import ArrowRight16 from '@carbon/icons-react/lib/arrow--right/16';
import Copy16 from '@carbon/icons-react/lib/copy/16';
import Filter16 from '@carbon/icons-react/lib/filter/16';
import Search16 from '@carbon/icons-react/lib/search/16';
import View16 from '@carbon/icons-react/lib/view/16';
import { layout04 } from '@carbon/layout';
import { action } from '@storybook/addon-actions';

import { Grid, Row, Column } from 'carbon-components-react';
import React from 'react';

import { disableCentered, meta, patterns } from '../../../.storybook';
import { carbonPrefix } from '../../globals/namespace';
import { header, profile, toolbar } from '../Shell/_mocks_';

import description from './stories';
import { namespace } from './LayoutModules/LayoutModule';

import {
  ActionBarModule,
  ActionBarModuleActions,
  BackgroundModule,
  ButtonClusterModule,
  Button,
  CardModule,
  CardModuleCard,
  ContentSwitcher,
  DataTablePagination,
  Decorator,
  DescriptionModule,
  DescriptionModuleDescription,
  ICA,
  ICAModule,
  ICAModuleICA,
  IconButtonBar,
  PageTabModule,
  Shell as ShellComponent,
  SummaryCard,
  SummaryCardAction,
  SummaryCardBody,
  SummaryCardFooter,
  SummaryCardHeader,
  Switch,
  Tabs,
  Tab,
  Tag,
  TitleModule,
  TitleBarModule,
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutModule,
  TypeLayoutRow,
  TypeLayoutCell,
} from '../..';

const Shell = () => (
  <ShellComponent header={header} profile={profile} toolbar={toolbar} />
);

const overview = () => (
  <>
    <Row>
      <Column>
        <ActionBarModule>
          <Tag
            className={`${namespace}--spacing-03--mr ${namespace}--spacing-00--ml`}
            type="gray"
          >
            Closed
          </Tag>
          ID: 12&nbsp;&nbsp;|&nbsp;&nbsp;Result: Completed
        </ActionBarModule>
      </Column>
    </Row>
    <Row>
      <Column lg={12}>
        <Row>
          <BackgroundModule>
            <Column>
              <TypeLayoutModule>
                <TitleModule
                  className={`${carbonPrefix}type-productive-heading-01`}
                >
                  General settings and scope
                </TitleModule>

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
          </BackgroundModule>

          <BackgroundModule>
            <Column>
              <Row>
                <BackgroundModule>
                  <Column>
                    <TypeLayoutModule>
                      <TitleModule
                        className={`${carbonPrefix}type-productive-heading-01`}
                      >
                        Schedule
                      </TitleModule>

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
                </BackgroundModule>
              </Row>

              <Row>
                <Column>
                  <TypeLayoutModule>
                    <TitleModule
                      className={`${carbonPrefix}type-productive-heading-01`}
                    >
                      Campaign end
                    </TitleModule>

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
              </Row>
            </Column>
          </BackgroundModule>
        </Row>

        <Row>
          <BackgroundModule>
            <Column>
              <Row>
                <Column>
                  <TitleBarModule>
                    <TitleModule
                      className={`${carbonPrefix}type-productive-heading-01`}
                    >
                      Campaign results
                    </TitleModule>
                  </TitleBarModule>
                </Column>
                <Column lg={6}>
                  <ContentSwitcher
                    className={`${namespace}--spacing-03--mt`}
                    onChange={action('onChange')}
                  >
                    <Switch text="By reviewer" />
                    <Switch text="By account" />
                  </ContentSwitcher>
                </Column>
              </Row>

              <ICAModule>
                <Row>
                  <Column sm={2} md={2} lg={3}>
                    <ICAModuleICA>
                      <ICA label="Reviews complete" value={300} />
                    </ICAModuleICA>
                  </Column>
                  <Column sm={2} md={2} lg={3}>
                    <ICAModuleICA>
                      <ICA label="Approved" value={241} />
                    </ICAModuleICA>
                  </Column>
                  <Column sm={2} md={2} lg={3}>
                    <ICAModuleICA>
                      <ICA label="Rejected" value={28} />
                    </ICAModuleICA>
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
          </BackgroundModule>
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
          <TitleModule className={`${carbonPrefix}type-productive-heading-01`}>
            Details
          </TitleModule>

          <TypeLayout>
            <TypeLayoutBody>
              <TypeLayoutRow>
                <TypeLayoutCell>Created by</TypeLayoutCell>
                <TypeLayoutCell>
                  <ul>
                    <li>Scott Damon</li>
                    <li>scottd@cse-bank.com</li>
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
  </>
);

const detail = () => (
  <Row>
    <Column>
      <PageTabModule>
        <Tabs selected={1}>
          <Tab label="Case" />
          <Tab label="Report">
            <Row>
              <Column>
                <TitleModule>Summary</TitleModule>
              </Column>
            </Row>
            <Row>
              <Column lg={6}>
                <DescriptionModule>
                  <DescriptionModuleDescription>
                    BadFlick is a backdoor that is usually seen being
                    distributed using exploited word documents. It does not have
                    any persistence to survive reboot, but it is capable of
                    opening a reverse shell connection to its C2 server where it
                    can download and execute possibly other malware.
                  </DescriptionModuleDescription>
                </DescriptionModule>
              </Column>
              <Column lg={{ offset: 2, span: 8 }}>
                <TypeLayoutModule>
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
                </TypeLayoutModule>
              </Column>
            </Row>

            <Row>
              <Column>
                <TitleModule>Related reports</TitleModule>
                <ActionBarModule>
                  <TitleModule className={`${carbonPrefix}type-body-short-01`}>
                    Supplementary details
                  </TitleModule>

                  <ActionBarModuleActions>
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
                  </ActionBarModuleActions>
                </ActionBarModule>
              </Column>
            </Row>

            <CardModule>
              <Row>
                <Column>
                  <CardModuleCard>
                    <SummaryCard>
                      <SummaryCardHeader title="Threat actor" />
                      <SummaryCardBody>
                        <TitleModule>
                          Suspected Chinese Cyber Espionage Group
                          (TEMP.Periscope)
                        </TitleModule>
                      </SummaryCardBody>
                      <SummaryCardFooter>
                        <SummaryCardAction
                          renderIcon={ArrowRight16}
                          iconDescription="Navigate"
                          tooltipAlignment="center"
                          tooltipPosition="right"
                          hasIconOnly
                        />
                      </SummaryCardFooter>
                    </SummaryCard>
                  </CardModuleCard>
                </Column>
                <Column>
                  <CardModuleCard>
                    <SummaryCard>
                      <SummaryCardHeader title="Threat report" />
                      <SummaryCardBody>
                        <TitleModule>
                          XFTAS Daily Threat Assessment for Mar 2019
                        </TitleModule>
                      </SummaryCardBody>
                      <SummaryCardFooter>
                        <SummaryCardAction
                          renderIcon={ArrowRight16}
                          iconDescription="Navigate"
                          tooltipAlignment="center"
                          tooltipPosition="right"
                          hasIconOnly
                        />
                      </SummaryCardFooter>
                    </SummaryCard>
                  </CardModuleCard>
                </Column>
                <Column>
                  <CardModuleCard>
                    <SummaryCard>
                      <SummaryCardHeader title="IP report" />
                      <SummaryCardBody>
                        <TitleModule>103.243.175.181</TitleModule>
                      </SummaryCardBody>
                      <SummaryCardFooter>
                        <SummaryCardAction
                          renderIcon={ArrowRight16}
                          iconDescription="Navigate"
                          tooltipAlignment="center"
                          tooltipPosition="right"
                          hasIconOnly
                        />
                      </SummaryCardFooter>
                    </SummaryCard>
                  </CardModuleCard>
                </Column>
                <Column>
                  <CardModuleCard>
                    <SummaryCard>
                      <SummaryCardHeader title="Vulnerability report" />
                      <SummaryCardBody>
                        <TitleModule>CVE-2017-11882</TitleModule>
                      </SummaryCardBody>
                      <SummaryCardFooter>
                        <SummaryCardAction
                          renderIcon={ArrowRight16}
                          iconDescription="Navigate"
                          tooltipAlignment="center"
                          tooltipPosition="right"
                          hasIconOnly
                        />
                      </SummaryCardFooter>
                    </SummaryCard>
                  </CardModuleCard>
                </Column>
              </Row>
            </CardModule>

            <Row>
              <BackgroundModule>
                <Column>
                  <Row>
                    <Column>
                      <TitleBarModule>
                        <TitleModule element="h4">Indicators</TitleModule>
                      </TitleBarModule>
                    </Column>
                  </Row>

                  <ICAModule>
                    <Row>
                      <Column sm={2} md={2} lg={3}>
                        <ICAModuleICA>
                          <ICA label="Malware" value={11} />
                        </ICAModuleICA>
                      </Column>
                      <Column sm={2} md={2} lg={3}>
                        <ICAModuleICA>
                          <ICA label="IPs" value={8} />
                        </ICAModuleICA>
                      </Column>
                      <Column sm={2} md={2} lg={3}>
                        <ICAModuleICA>
                          <ICA label="URLs" value={9} />
                        </ICAModuleICA>
                      </Column>
                      <Column sm={2} md={2} lg={3}>
                        <ICAModuleICA>
                          <ICA label="VULs" value={1} />
                        </ICAModuleICA>
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
              </BackgroundModule>
            </Row>
          </Tab>
          <Tab label="Evidence" />
        </Tabs>
      </PageTabModule>
    </Column>
  </Row>
);

export default meta(
  patterns('UNSTABLE Layout'),
  description,
  disableCentered(),
  [
    story => (
      <>
        <Shell />
        <div
          style={{
            paddingLeft: layout04,
          }}
        >
          <Grid>{story()}</Grid>
        </div>
      </>
    ),
  ]
);

export { detail, overview };
