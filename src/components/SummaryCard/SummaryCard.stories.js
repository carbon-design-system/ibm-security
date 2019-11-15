/**
 * @file Summary card stories.
 * @copyright IBM Security 2019
 */

import Folder20 from '@carbon/icons-react/lib/folder/20';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

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

const ids = new Array(5)
  .fill()
  .map((title = 'summary-card', id) => `${title}__${id}`);

storiesOf(patterns('SummaryCard'), module)
  .add('Multiselect', () => (
    <SummaryCardContainer
      ids={ids}
      render={({ getBatchActionProps, getSelectionProps, selectedIds }) => (
        <Fragment>
          <SummaryCardBatchActions {...getBatchActionProps()}>
            <SummaryCardBatchAction onClick={() => console.log(selectedIds)}>
              SummarCardBatchAction
            </SummaryCardBatchAction>
          </SummaryCardBatchActions>

          {ids.map(id => (
            <SummaryCard key={id}>
              <SummaryCardHeader
                title={`SummaryCardHeader ${id}`}
                status={
                  <Tooltip
                    showIcon
                    iconDescription={`Tooltip iconDescription ${id}`}
                  >
                    {`Tooltip ${id}`}
                  </Tooltip>
                }
              />
              <SummaryCardBody>{`SummaryCardBody ${id}`}</SummaryCardBody>
              <SummaryCardFooter>
                <SummaryCardSelect
                  labelText={`SummaryCardSelect ${id}`}
                  {...getSelectionProps({ id })}
                />
                <SummaryCardAction
                  expandedContent={`SummaryCardAction expandedContent ${id}`}
                >
                  {`SummaryCardAction ${id}`}
                </SummaryCardAction>
              </SummaryCardFooter>
            </SummaryCard>
          ))}
        </Fragment>
      )}
    />
  ))
  .add('with primary label', () => (
    <div className="bx--grid bx--grid--full-width">
      <div className="bx--row">
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4">
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
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4">
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
        <div className="bx--col-sm-4 bx--col-md-4 bx--col-lg-4">
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
      </div>
    </div>
  ))
  .add('with skeleton', () => (
    <div className="bx--grid bx--grid--full-width">
      <div className="bx--row">
        <div className="bx--col-sm-1 bx--col-md-2 bx--col-lg-4">
          <SummaryCardSkeleton />
        </div>
      </div>
    </div>
  ));
