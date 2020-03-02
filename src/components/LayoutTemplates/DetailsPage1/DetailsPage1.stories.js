/**
 * @file Details page template #1 story.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { disableCentered, patterns } from '../../../../.storybook';
import {
  theme,
  DetailsPage1,
  DetailsPage1Main,
  DetailsPage1Section,
  DetailsPage1SectionTerm,
  DetailsPage1SectionDefinition,
  DetailsPage1Aside,
} from '../../..';

function DemoContent() {
  return (
    <div
      style={{
        backgroundColor: theme.interactive04,
        minHeight: '240px',
        width: '100%',
      }}
    >
      lorem ipsum
    </div>
  );
}

disableCentered(storiesOf(patterns('DetailsPage1'), module)).add(
  'default',
  () => (
    <>
      <h1 style={{ margin: '16px' }}>Details page template #1</h1>
      <DetailsPage1>
        <DetailsPage1Section style={{ backgroundColor: theme.uiBackground }}>
          <DetailsPage1SectionTerm
            style={{ backgroundColor: theme.interactive01 }}
          >
            <DemoContent />
          </DetailsPage1SectionTerm>
          <DetailsPage1SectionDefinition
            style={{ backgroundColor: theme.interactive01 }}
          >
            <DemoContent />
          </DetailsPage1SectionDefinition>
        </DetailsPage1Section>
        <DetailsPage1Section style={{ backgroundColor: theme.uiBackground }}>
          <DetailsPage1SectionTerm
            style={{ backgroundColor: theme.interactive01 }}
          >
            <DemoContent />
          </DetailsPage1SectionTerm>
          <DetailsPage1SectionDefinition
            style={{ backgroundColor: theme.interactive01 }}
          >
            <DemoContent />
          </DetailsPage1SectionDefinition>
        </DetailsPage1Section>
        <DetailsPage1Aside style={{ backgroundColor: theme.uiBackground }}>
          <DemoContent />
        </DetailsPage1Aside>
        <DetailsPage1Main style={{ backgroundColor: theme.uiBackground }}>
          <DemoContent />
        </DetailsPage1Main>
      </DetailsPage1>
    </>
  )
);
