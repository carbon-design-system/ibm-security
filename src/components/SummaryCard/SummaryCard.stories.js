/**
 * @file Summary card stories.
 * @copyright IBM Security 2019
 */

import Folder20 from '@carbon/icons-react/lib/folder/20';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import { settings } from 'carbon-components';

import React, { Fragment } from 'react';

import { patterns } from '../../../.storybook';

import {
  SummaryCard,
  SummaryCardAction,
  SummaryCardBatchAction,
  SummaryCardBatchActions,
  SummaryCardBody,
  SummaryCardContainer,
  SummaryCardFooter,
  SummaryCardHeader,
  SummaryCardSelect,
  SummaryCardSkeleton,
  Tooltip,
} from '../..';

import { lorem } from '../_mocks_';

const { prefix } = settings;

const summaryCards = new Array(3)
  .fill()
  .map((title = 'summary-card', id) => ({ id: `${title}__${id}` }));

storiesOf(patterns('SummaryCard'), module)
  .addDecorator(story => (
    <div className={`${prefix}--grid ${prefix}--grid--full-width`}>
      <div className={`${prefix}--row`}>{story()}</div>
    </div>
  ))
  .add('with primary label', () => (
    <Fragment>
      <div className={`${prefix}--col-md-4 ${prefix}--col-lg-4`}>
        <SummaryCard>
          <SummaryCardHeader
            title="Summary card"
            status={
              <Tooltip showIcon iconDescription="Status">
                Tooltip content
              </Tooltip>
            }
          />
          <SummaryCardBody>{lorem}</SummaryCardBody>
          <SummaryCardFooter>
            <SummaryCardAction expandedContent={lorem} renderIcon={Folder20}>
              Button label that is long and will be truncated
            </SummaryCardAction>
            <SummaryCardAction
              iconDescription="Icon description"
              renderIcon={Folder20}
              hasIconOnly
              onClick={action('onClick')}
              tooltipPosition="bottom"
              tooltipAlignment="center"
            />
            <SummaryCardAction
              iconDescription="Icon description"
              renderIcon={Folder20}
              hasIconOnly
              onClick={action('onClick')}
              tooltipPosition="bottom"
              tooltipAlignment="center"
            />
          </SummaryCardFooter>
        </SummaryCard>
      </div>
      <div
        className={`${prefix}--col-sm-4 ${prefix}--col-md-4 ${prefix}--col-lg-4`}
      >
        <SummaryCard>
          <SummaryCardHeader
            title="Summary card with no footer"
            status={
              <Tooltip showIcon iconDescription="Status">
                Tooltip content
              </Tooltip>
            }
          />
          <SummaryCardBody>{lorem.repeat(5)}</SummaryCardBody>
        </SummaryCard>
      </div>
      <div
        className={`${prefix}--col-sm-4 ${prefix}--col-md-4 ${prefix}--col-lg-4`}
      >
        <SummaryCard>
          <SummaryCardHeader title="Summary card with no status" />
          <SummaryCardBody>{lorem.repeat(3)}</SummaryCardBody>
          <SummaryCardFooter>
            <SummaryCardAction loading expandedContent={lorem.repeat(5)}>
              Button label
            </SummaryCardAction>
            <SummaryCardAction
              iconDescription="Icon description"
              renderIcon={Folder20}
              hasIconOnly
              onClick={action('onClick')}
              tooltipPosition="bottom"
              tooltipAlignment="center"
            />
            <SummaryCardAction
              iconDescription="Icon description"
              renderIcon={Folder20}
              hasIconOnly
              onClick={action('onClick')}
              tooltipPosition="bottom"
              tooltipAlignment="center"
            />
            <SummaryCardAction
              iconDescription="Icon description"
              renderIcon={Folder20}
              hasIconOnly
              onClick={action('onClick')}
              tooltipPosition="bottom"
              tooltipAlignment="center"
            />
          </SummaryCardFooter>
        </SummaryCard>
      </div>
    </Fragment>
  ))
  .add('Multiselect', () => (
    <SummaryCardContainer
      render={({
        getBatchActionProps,
        getSelectionProps,
        selectedSummaryCards,
        summaryCards,
      }) => (
        <Fragment>
          <SummaryCardBatchActions {...getBatchActionProps()}>
            <SummaryCardBatchAction
              onClick={() =>
                action('SummaryCardBatchAction onClick')(selectedSummaryCards)
              }
            >
              SummaryCardBatchAction
            </SummaryCardBatchAction>
          </SummaryCardBatchActions>

          <div className="bx--row">
            {summaryCards.map(({ id }) => (
              <div
                key={id}
                className={`${prefix}--col-md-4 ${prefix}--col-lg-4`}
              >
                <SummaryCard>
                  <SummaryCardHeader title={`${id} SummaryCardHeader`} />
                  <SummaryCardBody>{`${id} SummaryCardBody`}</SummaryCardBody>
                  <SummaryCardFooter>
                    <SummaryCardSelect
                      labelText="Select"
                      {...getSelectionProps({ id })}
                    />
                    <SummaryCardAction>
                      {`${id} SummaryCardAction`}
                    </SummaryCardAction>
                  </SummaryCardFooter>
                </SummaryCard>
              </div>
            ))}
          </div>
        </Fragment>
      )}
      summaryCards={summaryCards}
    />
  ))
  .add('with skeleton', () => (
    <div
      className={`${prefix}--col-sm-1 ${prefix}--col-md-2 ${prefix}--col-lg-4`}
    >
      <SummaryCardSkeleton />
    </div>
  ));
