/**
 * @file Panel stories.
 * @copyright IBM Security 2019
 */

import Add16 from '@carbon/icons-react/lib/add/16';

import { withA11y } from '@storybook/addon-a11y';
import centered from '@storybook/addon-centered/react';
import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React, { Fragment } from 'react';

import { patterns } from '../../../.storybook';

import { disabled, label } from '../_mocks_';
import { labels } from '../Panel/_mocks_';

import { Button, PanelV2, PanelContent } from '../..';

const closeButtonLabel = 'Close';

const panelProps = {
  title: label,
  subtitle: label,
  labels,
};

const panelContent =
  'Use the `PanelContent` component to have the appropriate formatting applied to content';

const footerLabel = 'Custom footer';

storiesOf(patterns('PanelV2'), module)
  .addDecorator(withA11y)
  .addDecorator(centered)
  .add('Default', () => {
    class PanelV2Story extends React.Component {
      state = {
        firstOpen: false,
        secondOpen: false,
        thirdOpen: false,
        fourthOpen: false,
      };
      closeFirst = () => {
        this.setState({ firstOpen: false });
      };
      closeSecond = () => {
        this.setState({ secondOpen: false });
      };
      closeThird = () => {
        this.setState({ thirdOpen: false });
      };
      closeFourth = () => {
        this.setState({ fourthOpen: false });
      };

      openFirst = () => {
        this.setState({ firstOpen: true });
      };
      openSecond = () => {
        this.setState({ secondOpen: true });
      };
      openThird = () => {
        this.setState({ thirdOpen: true });
      };
      openFourth = () => {
        this.setState({ fourthOpen: true });
      };

      render() {
        return (
          <Fragment>
            <Button onClick={this.openFirst}>
              Primary and secondary action
            </Button>
            <Button onClick={this.openSecond}>Primary action</Button>
            <Button onClick={this.openThird}>Default</Button>
            <Button onClick={this.openFourth}>{footerLabel}</Button>
            <PanelV2
              isOpen={this.state.firstOpen}
              {...panelProps}
              closeButton={{
                onClick: this.closeFirst,
                label: text('closeButton.label', closeButtonLabel),
              }}
              primaryButton={{
                icon: Add16,
                iconDescription: text('primaryButton.iconDescription', 'Add'),
                isDisabled: boolean('primaryButton.isDisabled', !disabled),
                label: text('primaryButton.label', 'Add'),
                onClick: this.closeFirst,
              }}
              secondaryButton={{
                isDisabled: boolean('secondaryButton.isDisabled', !disabled),
                label: text('secondaryButton.label', 'Cancel'),
                onClick: this.closeFirst,
              }}
            >
              <PanelContent>{panelContent}</PanelContent>
            </PanelV2>
            <PanelV2
              isOpen={this.state.secondOpen}
              {...panelProps}
              closeButton={{
                onClick: this.closeSecond,
                label: text('closeButton.label', closeButtonLabel),
              }}
              primaryButton={{
                isDisabled: boolean('primaryButton.isDisabled', !disabled),
                label: text('primaryButton.label', 'Submit'),
                onClick: this.closeSecond,
              }}
            />
            <PanelV2
              isOpen={this.state.thirdOpen}
              {...panelProps}
              closeButton={{
                onClick: this.closeThird,
                label: closeButtonLabel,
              }}
            >
              <PanelContent>{panelContent}</PanelContent>
            </PanelV2>
            <PanelV2
              isOpen={this.state.fourthOpen}
              {...panelProps}
              closeButton={{
                onClick: this.closeFourth,
                label: closeButtonLabel,
              }}
              renderFooter={() => <Button size="large">{footerLabel}</Button>}
            >
              <PanelContent>{panelContent}</PanelContent>
            </PanelV2>
          </Fragment>
        );
      }
    }
    return <PanelV2Story />;
  });
