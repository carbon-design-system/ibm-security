/**
 * @file Details page template #1 story.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { disableCentered, patterns } from '../../../../.storybook';
import { theme ,
  DetailsPage1,
  DetailsPage1Main,
  DetailsPage1Section,
  DetailsPage1Aside,
} from '../../..';



function DemoContent({ children }) {
  return (
    <div
      style={{ backgroundColor: theme.ui02, padding: '16px', height: '240px' }}
    >
      {children}
    </div>
  );
}

disableCentered(storiesOf(patterns('DetailsPage1'), module)).add(
  'default',
  () => (
    <DetailsPage1>
      <DetailsPage1Section>
        <DemoContent>Demo content</DemoContent>
      </DetailsPage1Section>
      <DetailsPage1Section>
        <DemoContent>Demo content</DemoContent>
      </DetailsPage1Section>
      <DetailsPage1Aside>
        <DemoContent>Demo content</DemoContent>
      </DetailsPage1Aside>
      <DetailsPage1Main>
        <DemoContent>Demo content</DemoContent>
      </DetailsPage1Main>
    </DetailsPage1>
  )
);
