/**
 * @file Layout module stories.
 * @copyright IBM Security 2020 - 2021
 */

import {
  Activity16,
  Copy16,
  Filter16,
  Search16,
  View16,
} from '@carbon/icons-react';

import { layout04 } from '@carbon/layout';

import { Grid, Row, Column } from 'carbon-components-react';
import React from 'react';

import { disableCentered, patterns } from '../../../.storybook';

import {
  ActionBarModule,
  ActionBarModuleItems,
  ButtonClusterModule,
  Button,
  CarbonHeader,
  CardModule,
  DataTablePagination,
  Decorator,
  DescriptionModule,
  DescriptionListModule,
  HeaderName,
  ICA,
  ICAModule,
  InlineNotification,
  IconButtonBar,
  NotificationActionButton,
  SummaryCard as SummaryCardComponent,
  SummaryCardHeader,
  Tag,
  TitleBarModule,
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutCell,
  TypeLayoutRow,
  withBackground,
} from '../..';

const ColumnWithBackground = withBackground(Column);
const SummaryCard = withBackground(SummaryCardComponent);

const UIShell = () => (
  <div style={{ height: layout04 }}>
    <CarbonHeader aria-label="IBM Security">
      <HeaderName prefix="IBM">Security</HeaderName>
    </CarbonHeader>
  </div>
);

export default {
  title: patterns('UNSTABLE Modular Page Layouts'),
  parameters: {
    ...disableCentered(),
  },
  decorators: [
    story => (
      <>
        <UIShell />

        <InlineNotification
          actions={
            <NotificationActionButton
              onClick={() =>
                window.open(
                  'https://github.com/carbon-design-system/carbon/issues/7717',
                  '_blank'
                )
              }
            >
              More info
            </NotificationActionButton>
          }
          className="page-layouts__banner"
          hideCloseButton
          kind="info"
          notificationType="inline"
          role="alert"
          subtitle="Page layouts utilize Carbon CSS Grid updates. They will remain Canary until the 2021 Carbon release."
          title=""
        />

        <Grid>{story()}</Grid>
      </>
    ),
  ],
};

export const Detail = () => (
  <>
    <TitleBarModule title="Summary" />

    <Row>
      <Column lg={6}>
        <DescriptionModule>
          {({ getLayoutProps }) => (
            <p {...getLayoutProps()}>
              BadFlick is a backdoor that is usually seen being distributed
              using exploited word documents. It does not have any persistence
              to survive reboot, but it is capable of opening a reverse shell
              connection to its C2 server where it can download and execute
              possibly other malware.
            </p>
          )}
        </DescriptionModule>
      </Column>

      <Column lg={{ offset: 2, span: 8 }}>
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
      </Column>
    </Row>

    <TitleBarModule title="Related reports" />

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

    <CardModule>
      {({ getLayoutProps }) => (
        <Row>
          <Column>
            <SummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Threat actor" />
            </SummaryCard>
          </Column>
          <Column>
            <SummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Threat report" />
            </SummaryCard>
          </Column>
          <Column>
            <SummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="IP report" />
            </SummaryCard>
          </Column>
          <Column>
            <SummaryCard {...getLayoutProps()}>
              <SummaryCardHeader title="Vulnerability report" />
            </SummaryCard>
          </Column>
        </Row>
      )}
    </CardModule>

    <Row>
      <ColumnWithBackground>
        <ICAModule>
          {({ getLayoutProps }) => (
            <>
              <TitleBarModule element="h4" title="Indicators" />

              <Row>
                <Column {...getLayoutProps({ lg: 3, md: 2, sm: 2 })}>
                  <ICA label="Malware" value={11} />
                </Column>
                <Column {...getLayoutProps({ lg: 3, md: 2, sm: 2 })}>
                  <ICA label="IPs" value={8} />
                </Column>
                <Column {...getLayoutProps({ lg: 3, md: 2, sm: 2 })}>
                  <ICA label="URLs" value={9} />
                </Column>
                <Column {...getLayoutProps({ lg: 3, md: 2, sm: 2 })}>
                  <ICA label="VULs" value={1} />
                </Column>
              </Row>
            </>
          )}
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
                    <Decorator score={0} type="IP" value="103.243.175.181" />
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
      </ColumnWithBackground>
    </Row>
  </>
);

export const Overview = () => (
  <>
    <ActionBarModule>
      <Tag type="gray">Closed</Tag>
      ID: 12&nbsp;&nbsp;|&nbsp;&nbsp;Result: Completed
    </ActionBarModule>

    <Row>
      <Column lg={12}>
        <Row>
          <ColumnWithBackground>
            <DescriptionListModule>
              <TitleBarModule title="General settings and scope" subsection />

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
            </DescriptionListModule>
          </ColumnWithBackground>

          <ColumnWithBackground>
            <Row>
              <ColumnWithBackground>
                <DescriptionListModule>
                  <TitleBarModule title="Schedule" subsection />

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
                </DescriptionListModule>
              </ColumnWithBackground>
            </Row>

            <Row>
              <Column>
                <DescriptionListModule>
                  <TitleBarModule title="Campaign end" subsection />

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
                </DescriptionListModule>
              </Column>
            </Row>
          </ColumnWithBackground>
        </Row>

        <Row>
          <ColumnWithBackground>
            <Row>
              <Column>
                <TitleBarModule title="Campaign results" subsection />
              </Column>
            </Row>

            <ICAModule>
              {({ getLayoutProps }) => (
                <Row>
                  <Column {...getLayoutProps({ lg: 3, md: 2, sm: 2 })}>
                    <ICA label="Reviews complete" value={300} />
                  </Column>
                  <Column {...getLayoutProps({ lg: 3, md: 2, sm: 2 })}>
                    <ICA label="Approved" value={241} />
                  </Column>
                  <Column {...getLayoutProps({ lg: 3, md: 2, sm: 2 })}>
                    <ICA label="Rejected" value={28} />
                  </Column>
                </Row>
              )}
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
          </ColumnWithBackground>
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

        <DescriptionListModule>
          <TitleBarModule title="Details" subsection />

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
        </DescriptionListModule>
      </Column>
    </Row>
  </>
);
