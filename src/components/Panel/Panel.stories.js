/**
 * @file Panel stories.
 * @copyright IBM Security 2019
 */

import Add16 from '@carbon/icons-react/lib/add/16';

import { action } from '@storybook/addon-actions';
import { boolean, radios, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React, { Fragment } from 'react';

import ArrowRight20 from '@carbon/icons-react/lib/arrow--right/20';
import Filter20 from '@carbon/icons-react/lib/filter/20';
import { spacing04, spacing05 } from '@carbon/layout/lib';
import { styles } from '@carbon/type/lib';

import { disableCentered, patterns } from '../../../.storybook';

import { header, profile, toolbar } from '../Shell/_mocks_';
import { labels } from './_mocks_';

import { TooltipDirection } from '../IconButton/IconButton';
import {
  Button,
  ComboButton,
  ComboButtonItem,
  CodeSnippet,
  Panel,
  PanelContent,
  Shell,
  theme,
} from '../..';

const { interactive01, text04 } = theme;

const closeButtonLabel = 'Close';

const props = () => ({
  title: text('title', 'Example title'),
  subtitle: text('subtitle', 'Example subtitle'),
  ['aria-label']: text('aria-label', 'Example aria-label'), // eslint-disable-line no-useless-computed-key
  labels,
});

const comboButtonProps = () => ({
  direction: radios(
    'Menu direction (direction)',
    {
      top: TooltipDirection.TOP,
      bottom: TooltipDirection.BOTTOM,
    },
    TooltipDirection.TOP
  ),
});

const content = (
  <p>
    Use the{' '}
    <CodeSnippet type="inline" light>
      PanelContent
    </CodeSnippet>{' '}
    component to apply the appropriate formatting to panel content.
  </p>
);

disableCentered(storiesOf(patterns('Panel'), module))
  .addParameters({
    info: {
      // Reposition info button so that panel footer isn't covered:
      styles: {
        button: {
          base: {
            padding: `${spacing04} ${spacing05}`,
            color: text04,
            background: interactive01,
            ...styles.bodyShort01,
          },
          topRight: {
            top: 'auto',
            left: 0,
            bottom: 0,
            borderRadius: 0,
          },
        },
      },
    },
  })

  .add('Default', () => {
    class PanelStory extends React.Component {
      state = { firstOpen: false, secondOpen: false, thirdOpen: false };
      closeFirst = () => {
        this.setState({ firstOpen: false });
      };
      closeSecond = () => {
        this.setState({ secondOpen: false });
      };
      closethird = () => {
        this.setState({ thirdOpen: false });
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

      render() {
        return (
          <Fragment>
            <Shell header={header} profile={profile} toolbar={toolbar} />
            <div id="main" style={{ paddingLeft: '5rem' }}>
              <Button key="b1" onClick={this.openFirst}>
                Primary and secondary action
              </Button>
              <Button key="b2" onClick={this.openSecond}>
                Primary action
              </Button>
              <Button key="b3" onClick={this.openThird}>
                Default
              </Button>
            </div>
            <Panel
              key="p1"
              isOpen={this.state.firstOpen}
              {...props()}
              closeButton={{
                onClick: this.closeFirst,
                label: text('closeButton.label', closeButtonLabel),
              }}
              primaryButton={{
                icon: Add16,
                iconDescription: text('primaryButton.iconDescription', 'Add'),
                isDisabled: boolean('primaryButton.isDisabled', false),
                label: text('primaryButton.label', 'Add'),
                onClick: this.closeFirst,
              }}
              secondaryButton={{
                isDisabled: boolean('secondaryButton.isDisabled', false),
                label: text('secondaryButton.label', 'Cancel'),
                onClick: this.closeFirst,
              }}
            >
              <PanelContent>
                <Fragment>
                  {content}
                  <p>
                    This example uses the
                    <CodeSnippet type="inline" light>
                      primaryButton
                    </CodeSnippet>
                    and
                    <CodeSnippet type="inline" light>
                      secondaryButton
                    </CodeSnippet>
                    props to render buttons in the footer.
                  </p>
                </Fragment>
              </PanelContent>
            </Panel>
            <Panel
              key="p2"
              isOpen={this.state.secondOpen}
              {...props()}
              closeButton={{
                onClick: this.closeSecond,
                label: text('closeButton.label', closeButtonLabel),
              }}
              renderFooter={() => (
                <ComboButton {...comboButtonProps()}>
                  <ComboButtonItem
                    onClick={action('onClick (Item 1 - primary button)')}
                    renderIcon={ArrowRight20}
                  >
                    Item 1 (becomes primary button and text will be truncated)
                  </ComboButtonItem>
                  {Array(5)
                    .fill(0)
                    .map((item, index) => {
                      const text = `Item ${index +
                        2} - text may be long and will be truncated`;
                      return (
                        <ComboButtonItem
                          className="some-class"
                          key={item.id}
                          index={index}
                          onClick={action(`onClick (${text})`)}
                          renderIcon={Filter20}
                        >
                          {text}
                        </ComboButtonItem>
                      );
                    })}
                </ComboButton>
              )}
            >
              <PanelContent>
                <Fragment>
                  {content}
                  <p>
                    This example uses the
                    <CodeSnippet type="inline" light>
                      renderFooter
                    </CodeSnippet>
                    prop to render a
                    <CodeSnippet type="inline" light>
                      ComboButton
                    </CodeSnippet>
                    in a custom footer.
                  </p>
                </Fragment>
              </PanelContent>
            </Panel>
            <Panel
              key="p3"
              isOpen={this.state.thirdOpen}
              {...props()}
              closeButton={{
                onClick: this.closethird,
                label: closeButtonLabel,
              }}
            >
              <PanelContent>
                <Fragment>
                  {content}
                  <p>
                    This example intentially does not include the
                    <CodeSnippet type="inline" light>
                      renderFooter
                    </CodeSnippet>
                    or
                    <CodeSnippet type="inline" light>
                      primaryButton
                    </CodeSnippet>
                    props and therefore does not have a footer.
                  </p>
                </Fragment>
              </PanelContent>
            </Panel>
          </Fragment>
        );
      }
    }
    return <PanelStory />;
  });
