/**
 * @file Details page template #1 story.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { disableCentered, patterns } from '../../../../.storybook';
import {
  theme,
  UNSTABLE__DetailsPage1,
  UNSTABLE__DetailsPage1Main,
  UNSTABLE__DetailsPage1Section,
  UNSTABLE__DetailsPage1SectionTerm,
  UNSTABLE__DetailsPage1SectionDefinition,
  UNSTABLE__DetailsPage1Aside,
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
      <UNSTABLE__DetailsPage1>
        <UNSTABLE__DetailsPage1Section
          style={{ backgroundColor: theme.uiBackground }}
        >
          <UNSTABLE__DetailsPage1SectionTerm
            style={{ backgroundColor: theme.interactive01 }}
          >
            <DemoContent />
          </UNSTABLE__DetailsPage1SectionTerm>
          <UNSTABLE__DetailsPage1SectionDefinition
            style={{ backgroundColor: theme.interactive01 }}
          >
            <DemoContent />
          </UNSTABLE__DetailsPage1SectionDefinition>
        </UNSTABLE__DetailsPage1Section>
        <UNSTABLE__DetailsPage1Section
          style={{ backgroundColor: theme.uiBackground }}
        >
          <UNSTABLE__DetailsPage1SectionTerm
            style={{ backgroundColor: theme.interactive01 }}
          >
            <DemoContent />
          </UNSTABLE__DetailsPage1SectionTerm>
          <UNSTABLE__DetailsPage1SectionDefinition
            style={{ backgroundColor: theme.interactive01 }}
          >
            <DemoContent />
          </UNSTABLE__DetailsPage1SectionDefinition>
        </UNSTABLE__DetailsPage1Section>
        <UNSTABLE__DetailsPage1Aside
          style={{ backgroundColor: theme.uiBackground }}
        >
          <DemoContent />
        </UNSTABLE__DetailsPage1Aside>
        <UNSTABLE__DetailsPage1Main
          style={{ backgroundColor: theme.uiBackground }}
        >
          <DemoContent />
        </UNSTABLE__DetailsPage1Main>
      </UNSTABLE__DetailsPage1>
    </>
  )
);
