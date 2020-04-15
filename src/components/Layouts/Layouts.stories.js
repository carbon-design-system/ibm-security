/**
 * @file Modular layout stories.
 * @copyright IBM Security 2020
 */

import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import classnames from 'classnames';
import React from 'react';
import { Grid, Row, Column } from 'carbon-components-react';
import ArrowRight20 from '@carbon/icons-react/lib/arrow--right/20';

import {
  Accordion,
  AccordionItem,
  Button,
  Tab,
  Tabs,
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutRow,
  TypeLayoutCell,
} from '../..';

import { disableCentered, patterns } from '../../../.storybook';

const DemoColumn = ({ children, showTokens, ...other }) => {
  const outlineStyle = showTokens ? '1px solid orange' : 'none';

  return (
    <Column
      style={{
        outline: outlineStyle,
        minHeight: '200px',
      }}
      {...other}
    >
      {children}
    </Column>
  );
};

const DemoHeading = ({ children, className, showTokens }) => {
  const classes = classnames(className, 'bx--type-productive-heading-01', {
    debug: showTokens,
  });

  return (
    <h2 className={classes} style={{ margin: 0 }}>
      {children}
    </h2>
  );
};

disableCentered(storiesOf(patterns('Modular Layouts'), module)).add(
  'default',
  () => (
    <Grid
      condensed
      className="spacing--layout-01--top spacing--layout-03--bottom"
      showTokens={boolean('Show tokens', false)}
    >
      <Row>
        <DemoColumn md={3} lg={6} showTokens={boolean('Show tokens', false)}>
          <DemoHeading
            className="spacing--layout-01--top spacing--layout-03--bottom"
            showTokens={boolean('Show tokens', false)}
          >
            productive-heading-01
          </DemoHeading>
          <TypeLayout>
            <TypeLayoutBody>
              <TypeLayoutRow>
                <TypeLayoutCell>Label</TypeLayoutCell>
                <TypeLayoutCell>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Label</TypeLayoutCell>
                <TypeLayoutCell> Lorem ipsum dolor.</TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Label</TypeLayoutCell>
                <TypeLayoutCell> Lorem ipsum.</TypeLayoutCell>
              </TypeLayoutRow>
            </TypeLayoutBody>
          </TypeLayout>
        </DemoColumn>
        <DemoColumn md={3} lg={6} showTokens={boolean('Show tokens', false)}>
          <DemoHeading
            className="spacing--layout-01--top spacing--layout-03--bottom"
            showTokens={boolean('Show tokens', false)}
          >
            productive-heading-01
          </DemoHeading>
          <TypeLayout>
            <TypeLayoutBody>
              <TypeLayoutRow>
                <TypeLayoutCell>Label</TypeLayoutCell>
                <TypeLayoutCell>Lorem ipsum dolor sit amet.</TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Label</TypeLayoutCell>
                <TypeLayoutCell> Lorem ipsum dolor.</TypeLayoutCell>
              </TypeLayoutRow>
              <TypeLayoutRow>
                <TypeLayoutCell>Label</TypeLayoutCell>
                <TypeLayoutCell> Lorem ipsum dolor sit amet.</TypeLayoutCell>
              </TypeLayoutRow>
            </TypeLayoutBody>
          </TypeLayout>
        </DemoColumn>
        <DemoColumn md={2} lg={4} showTokens={boolean('Show tokens', false)}>
          <DemoHeading
            className="spacing--layout-02--top spacing--layout-03--bottom"
            showTokens={boolean('Show tokens', false)}
          >
            productive-heading-01
          </DemoHeading>
          <Button
            iconDescription="Button icon"
            kind="ghost"
            renderIcon={ArrowRight20}
            style={{ width: '100%', maxWidth: 'unset' }}
          >
            Ghost Button
          </Button>
          <Button
            iconDescription="Button icon"
            kind="ghost"
            renderIcon={ArrowRight20}
            style={{ width: '100%', maxWidth: 'unset' }}
          >
            Ghost Button
          </Button>
          <Button
            iconDescription="Button icon"
            kind="ghost"
            renderIcon={ArrowRight20}
            style={{ width: '100%', maxWidth: 'unset' }}
          >
            Ghost Button
          </Button>
          <Button
            iconDescription="Button icon"
            kind="ghost"
            renderIcon={ArrowRight20}
            style={{ width: '100%', maxWidth: 'unset' }}
          >
            Ghost Button
          </Button>
        </DemoColumn>
      </Row>
      <Row>
        <DemoColumn md={8} lg={12} showTokens={boolean('Show tokens', false)}>
          <Tabs
            ariaLabel="listbox"
            iconDescription="show menu options"
            selected={1}
            triggerHref="#"
          >
            <Tab href="#" label="Tab label 1">
              <div
                className="spacing--layout-01-top"
                showTokens={boolean('Show tokens', false)}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              >
                <DemoHeading
                  className="spacing--layout-02--top spacing--layout-03--bottom"
                  showTokens={boolean('Show tokens', false)}
                >
                  productive-heading-01
                </DemoHeading>
                <p>Tab content.</p>
              </div>
            </Tab>
            <Tab href="#" label="Tab label 2">
              <div
                className="spacing--layout-01-top"
                showTokens={boolean('Show tokens', false)}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              >
                <DemoHeading
                  className="spacing--layout-02--top spacing--layout-03--bottom"
                  showTokens={boolean('Show tokens', false)}
                >
                  productive-heading-01
                </DemoHeading>
                <p>Tab content.</p>
              </div>
            </Tab>
            <Tab href="#" label="Tab label 3">
              <div
                className="spacing--layout-01-top"
                showTokens={boolean('Show tokens', false)}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              >
                <DemoHeading
                  className="spacing--layout-02--top spacing--layout-03--bottom"
                  showTokens={boolean('Show tokens', false)}
                >
                  productive-heading-01
                </DemoHeading>
                <p>Tab content.</p>
              </div>
            </Tab>
          </Tabs>
        </DemoColumn>
        <DemoColumn md={8} lg={4} showTokens={boolean('Show tokens', false)}>
          <DemoHeading
            className="spacing--layout-01--top spacing--layout-03--bottom"
            showTokens={boolean('Show tokens', false)}
          >
            productive-heading-01
          </DemoHeading>
          <Accordion align="end">
            <AccordionItem
              style={{
                width: '100%',
              }}
              title="Accordion item"
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </AccordionItem>
            <AccordionItem
              style={{
                width: '100%',
              }}
              title="Accordion item"
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </AccordionItem>
            <AccordionItem
              style={{
                width: '100%',
              }}
              title="Accordion item"
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </AccordionItem>
            <AccordionItem
              style={{
                width: '100%',
              }}
              title="Accordion item"
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </AccordionItem>
          </Accordion>
        </DemoColumn>
      </Row>
    </Grid>
  )
);
