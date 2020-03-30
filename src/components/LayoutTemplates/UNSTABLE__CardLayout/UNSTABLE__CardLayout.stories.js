/**
 * @file Card layout stories.
 * @copyright IBM Security 2020
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { disableCentered, patterns } from '../../../../.storybook';
import {
  theme,
  UNSTABLE__CardLayout,
  UNSTABLE__CardLayoutRow,
  UNSTABLE__CardLayoutColumn,
  UNSTABLE__CardLayoutAside,
  UNSTABLE__CardLayoutMain,
} from '../../..';

function DemoContent() {
  return (
    <div
      style={{
        backgroundColor: theme.interactive04,
        minHeight: '240px',
        height: '100%',
        width: '100%',
      }}
    >
      lorem ipsum
    </div>
  );
}

disableCentered(storiesOf(patterns('CardLayout'), module))
  .add('layout #1', () => (
    <>
      <h1 style={{ margin: '16px' }}>Card layout #1</h1>
      <UNSTABLE__CardLayout>
        <UNSTABLE__CardLayoutAside
          style={{
            minHeight: '483px',
            height: '100%',
            backgroundColor: theme.interactive01,
            width: '100%',
          }}
        >
          lorem ipsum
        </UNSTABLE__CardLayoutAside>
        <UNSTABLE__CardLayoutMain>
          <UNSTABLE__CardLayoutRow>
            <UNSTABLE__CardLayoutColumn size="lg">
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
          </UNSTABLE__CardLayoutRow>
          <UNSTABLE__CardLayoutRow>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
          </UNSTABLE__CardLayoutRow>
        </UNSTABLE__CardLayoutMain>
      </UNSTABLE__CardLayout>
    </>
  ))
  .add('layout #2', () => (
    <>
      <h1 style={{ margin: '16px' }}>Card layout #2</h1>
      <UNSTABLE__CardLayout>
        <UNSTABLE__CardLayoutAside
          style={{
            minHeight: '725px',
            height: '100%',
            backgroundColor: theme.interactive01,
            width: '100%',
          }}
        >
          lorem ipsum
        </UNSTABLE__CardLayoutAside>
        <UNSTABLE__CardLayoutMain>
          <UNSTABLE__CardLayoutRow>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
          </UNSTABLE__CardLayoutRow>
          <UNSTABLE__CardLayoutRow>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
          </UNSTABLE__CardLayoutRow>
          <UNSTABLE__CardLayoutRow>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
          </UNSTABLE__CardLayoutRow>
        </UNSTABLE__CardLayoutMain>
      </UNSTABLE__CardLayout>
    </>
  ))
  .add('layout #3', () => (
    <>
      <h1 style={{ margin: '16px' }}>Card layout #3</h1>
      <UNSTABLE__CardLayout>
        <UNSTABLE__CardLayoutMain>
          <UNSTABLE__CardLayoutRow>
            <UNSTABLE__CardLayoutColumn size="xl">
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
          </UNSTABLE__CardLayoutRow>
          <UNSTABLE__CardLayoutRow>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
          </UNSTABLE__CardLayoutRow>
          <UNSTABLE__CardLayoutRow>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
            <UNSTABLE__CardLayoutColumn>
              <DemoContent />
            </UNSTABLE__CardLayoutColumn>
          </UNSTABLE__CardLayoutRow>
        </UNSTABLE__CardLayoutMain>
      </UNSTABLE__CardLayout>
    </>
  ));
