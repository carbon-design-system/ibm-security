/**
 * @file Small tearsheet stories.
 * @copyright IBM Security 2019
 */

import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React, { Fragment } from 'react';
import { compose, getDisplayName, lifecycle } from 'recompose';

import { patterns } from '../../../../.storybook';

import { Button, TearsheetSmall } from '../../..';

import {
  buttons,
  description,
  body,
  heading,
  isDisabled,
  labels,
} from './_mocks_';

const { closeButton, primaryButton, secondaryButton } = buttons;

const focusTrap = boolean('focusTrap', false);

storiesOf(patterns('TearsheetSmall'), module)
  .add('Default', () => (
    <TearsheetSmall
      focusTrap={focusTrap}
      heading={heading}
      description={description}
      closeButton={{
        isDisabled: boolean('buttons.closeButton.isDisabled', isDisabled),
        label: text('buttons.closeButton.label', closeButton.label),
        onClick: action('buttons.closeButton.onClick'),
      }}
      primaryButton={{
        isDisabled: boolean('buttons.primaryButton.isDisabled', isDisabled),
        label: text('buttons.primaryButton.label', primaryButton.label),
        onClick: action('buttons.primaryButton.onClick'),
      }}
      secondaryButton={{
        isDisabled: boolean('buttons.secondaryButton.isDisabled', isDisabled),
        label: text('buttons.secondaryButton.label', secondaryButton.label),
        onClick: action('buttons.secondaryButton.onClick'),
      }}
      isOpen
      labels={labels}
    />
  ))
  .add('Hidden button', () => (
    <TearsheetSmall
      focusTrap={focusTrap}
      heading={heading}
      description={description}
      closeButton={{
        isDisabled: boolean('buttons.closeButton.isDisabled', isDisabled),
        label: text('buttons.closeButton.label', closeButton.label),
        onClick: action('buttons.closeButton.onClick'),
      }}
      primaryButton={{
        isDisabled: boolean('buttons.primaryButton.isDisabled', isDisabled),
        label: text('buttons.primaryButton.label', primaryButton.label),
        onClick: action('buttons.primaryButton.onClick'),
      }}
      secondaryButton={{
        isDisabled: boolean('buttons.secondaryButton.isDisabled', isDisabled),
        label: text('buttons.secondaryButton.label', secondaryButton.label),
        onClick: action('buttons.secondaryButton.onClick'),
        hide: true,
      }}
      isOpen
      labels={labels}
    />
  ))
  .add(
    'with body',
    () =>
      boolean('isOpen', true) && (
        <TearsheetSmall
          focusTrap={focusTrap}
          heading={heading}
          description={description}
          body={<section className="tearsheet--small__body">{body}</section>}
          closeButton={{
            isDisabled: boolean('buttons.closeButton.isDisabled', isDisabled),
            label: text('buttons.closeButton.label', closeButton.label),
            onClick: action('buttons.closeButton.onClick'),
          }}
          primaryButton={{
            isDisabled: boolean('buttons.primaryButton.isDisabled', isDisabled),
            label: text('buttons.primaryButton.label', primaryButton.label),
            onClick: action('buttons.primaryButton.onClick'),
          }}
          secondaryButton={{
            isDisabled: boolean(
              'buttons.secondaryButton.isDisabled',
              isDisabled
            ),
            label: text('buttons.secondaryButton.label', secondaryButton.label),
            onClick: action('buttons.secondaryButton.onClick'),
          }}
          isOpen
          labels={labels}
        />
      )
  )
  .add('with loading', () => {
    const loading = true;
    const loadingMessage = 'Sending request...';

    const TearsheetSmallLoadingStory = compose(
      lifecycle({
        state: { loading, loadingMessage },

        componentDidMount() {
          this.startRequest = setTimeout(
            () => this.setState({ loadingMessage }),
            1000
          );

          this.processResponse = setTimeout(
            () =>
              this.setState({
                loadingMessage: 'Processing request...',
              }),
            3000
          );

          this.complete = setTimeout(
            () => this.setState({ loading: !loading }),
            5000
          );
        },
        componentWillUnmount() {
          clearTimeout(this.startRequest);
          clearTimeout(this.processResponse);
          clearTimeout(this.complete);
        },
      })
    )(TearsheetSmall);

    TearsheetSmallLoadingStory.displayName = getDisplayName(TearsheetSmall);
    TearsheetSmallLoadingStory.__docgenInfo = TearsheetSmall.__docgenInfo;

    return (
      <TearsheetSmallLoadingStory
        focusTrap={focusTrap}
        heading={heading}
        loadingMessage={loadingMessage}
        description={description}
        closeButton={{
          isDisabled: boolean('buttons.closeButton.isDisabled', isDisabled),
          label: text('buttons.closeButton.label', closeButton.label),
          onClick: action('buttons.closeButton.onClick'),
        }}
        primaryButton={{
          isDisabled: boolean('buttons.primaryButton.isDisabled', isDisabled),
          label: text('buttons.primaryButton.label', primaryButton.label),
          onClick: action('buttons.primaryButton.onClick'),
        }}
        secondaryButton={{
          isDisabled: boolean('buttons.secondaryButton.isDisabled', isDisabled),
          label: text('buttons.secondaryButton.label', secondaryButton.label),
          onClick: action('buttons.secondaryButton.onClick'),
        }}
        isOpen
        loading={loading}
        labels={labels}
      />
    );
  })
  .add('With open/close', () => {
    class TearsheetSmallStory extends React.Component {
      state = { open: false };
      close = () => {
        this.setState({ open: false });
      };
      open = () => {
        this.setState({ open: true });
      };

      render() {
        return (
          <Fragment>
            <Button onClick={this.open} kind="primary">
              Open
            </Button>
            <TearsheetSmall
              focusTrap={focusTrap}
              heading={heading}
              description={description}
              closeButton={{
                isDisabled: boolean(
                  'buttons.closeButton.isDisabled',
                  isDisabled
                ),
                label: text('buttons.closeButton.label', closeButton.label),
                onClick: this.close,
              }}
              primaryButton={{
                isDisabled: boolean(
                  'buttons.primaryButton.isDisabled',
                  isDisabled
                ),
                label: text('buttons.primaryButton.label', primaryButton.label),
                onClick: action('buttons.primaryButton.onClick'),
              }}
              secondaryButton={{
                isDisabled: boolean(
                  'buttons.secondaryButton.isDisabled',
                  isDisabled
                ),
                label: text(
                  'buttons.secondaryButton.label',
                  secondaryButton.label
                ),
                onClick: this.close,
              }}
              isOpen={this.state.open}
              labels={labels}
            />
          </Fragment>
        );
      }
    }
    return <TearsheetSmallStory />;
  });
