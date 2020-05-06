/**
 * @file Modular layout stories.
 * @copyright IBM Security 2020
 */

import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

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

const toggleDebugging = () => boolean('Toggle debugging 🕵️‍♀️', false);

const showAccordion = () => boolean('Show accordion', true);
const showButtonGroup = () => boolean('Show button group', true);
const showCardGroup = () => boolean('Show card group', true);
const showTabGroup = () => boolean('Show tab group', true);

const showFirstRow = showCardGroup() || showButtonGroup();
const showSecondRow = showTabGroup() || showAccordion();

disableCentered(storiesOf(patterns('Modular Layouts'), module)).add(
  'details page layout',
  () => (
    <main className={toggleDebugging() && 'debug'}>
      <h1 className="bx--type-productive-heading-04">productive-heading-04</h1>
      <Grid condensed>
        {showFirstRow && (
          <Row>
            {showCardGroup() && (
              <Column md={3} lg={6}>
                <h2
                  style={{ margin: 0 }}
                  className="bx--type-productive-heading-01 spacing--layout-01--top spacing--layout-03--bottom"
                >
                  productive-heading-01
                </h2>
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
              </Column>
            )}
            {showCardGroup() && (
              <Column md={3} lg={6}>
                <h2
                  style={{ margin: 0 }}
                  className="bx--type-productive-heading-01 spacing--layout-01--top spacing--layout-03--bottom"
                >
                  productive-heading-01
                </h2>
                <TypeLayout>
                  <TypeLayoutBody>
                    <TypeLayoutRow>
                      <TypeLayoutCell>Label</TypeLayoutCell>
                      <TypeLayoutCell>
                        Lorem ipsum dolor sit amet.
                      </TypeLayoutCell>
                    </TypeLayoutRow>
                    <TypeLayoutRow>
                      <TypeLayoutCell>Label</TypeLayoutCell>
                      <TypeLayoutCell> Lorem ipsum dolor.</TypeLayoutCell>
                    </TypeLayoutRow>
                    <TypeLayoutRow>
                      <TypeLayoutCell>Label</TypeLayoutCell>
                      <TypeLayoutCell>
                        {' '}
                        Lorem ipsum dolor sit amet.
                      </TypeLayoutCell>
                    </TypeLayoutRow>
                  </TypeLayoutBody>
                </TypeLayout>
              </Column>
            )}
            {showButtonGroup() && (
              <Column md={2} lg={4}>
                <h2
                  style={{ margin: 0 }}
                  className="bx--type-productive-heading-01 spacing--layout-02--top spacing--layout-03--bottom"
                >
                  productive-heading-01
                </h2>
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
              </Column>
            )}
          </Row>
        )}
        {showSecondRow && (
          <Row>
            {showTabGroup() && (
              <Column md={8} lg={showAccordion() ? 12 : 16}>
                <Tabs
                  ariaLabel="listbox"
                  iconDescription="show menu options"
                  selected={1}
                  triggerHref="#"
                >
                  <Tab href="#" label="Tab label 1">
                    <div
                      className="spacing--layout-01-top"
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                    >
                      <h2
                        style={{ margin: 0 }}
                        className="bx--type-productive-heading-01 spacing--layout-02--top spacing--layout-03--bottom"
                      >
                        productive-heading-01
                      </h2>
                      <p>Tab content.</p>
                    </div>
                  </Tab>
                  <Tab href="#" label="Tab label 2">
                    <div
                      className="spacing--layout-01-top"
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                    >
                      <h2
                        style={{ margin: 0 }}
                        className="bx--type-productive-heading-01 spacing--layout-02--top spacing--layout-03--bottom"
                      >
                        productive-heading-01
                      </h2>
                      <p>Tab content.</p>
                    </div>
                  </Tab>
                  <Tab href="#" label="Tab label 3">
                    <div
                      className="spacing--layout-01-top"
                      style={{
                        height: '100%',
                        width: '100%',
                      }}
                    >
                      <h2
                        style={{ margin: 0 }}
                        className="bx--type-productive-heading-01 spacing--layout-02--top spacing--layout-03--bottom"
                      >
                        productive-heading-01
                      </h2>
                      <p>Tab content.</p>
                    </div>
                  </Tab>
                </Tabs>
              </Column>
            )}
            {showAccordion() && (
              <Column md={8} lg={4}>
                <h2
                  style={{ margin: 0 }}
                  className="bx--type-productive-heading-01 spacing--layout-01--top spacing--layout-03--bottom"
                >
                  productive-heading-01
                </h2>
                <Accordion align="end">
                  <AccordionItem
                    style={{
                      width: '100%',
                    }}
                    title="Accordion item"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    style={{
                      width: '100%',
                    }}
                    title="Accordion item"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    style={{
                      width: '100%',
                    }}
                    title="Accordion item"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </AccordionItem>
                  <AccordionItem
                    style={{
                      width: '100%',
                    }}
                    title="Accordion item"
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </AccordionItem>
                </Accordion>
              </Column>
            )}
          </Row>
        )}
      </Grid>
    </main>
  )
);
