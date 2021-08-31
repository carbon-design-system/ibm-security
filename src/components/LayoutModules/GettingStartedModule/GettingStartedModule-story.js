/**
 * @file List item module stories.
 * @copyright IBM Security 2021
 */

import React from 'react';

import { getDocsParameters } from '../../../../.storybook';
//import withResponsive from '../../../../.storybook/decorators';

import { GettingStartedModule } from '../../..';

import getTitle from '../stories';
import page from './index.mdx';
import DescriptionModule from '../DescriptionModule';
import TitleBarModule from '../TitleBarModule';
import { Button, Column } from 'carbon-components-react';
import { Add16, Launch16 } from '@carbon/icons-react';

import placeholder from './images/placeholder.svg';

export default {
  title: getTitle(GettingStartedModule.name),
  component: GettingStartedModule,
  parameters: {
    docs: { page },

    ...getDocsParameters(),
  },
};

export const Default = () => (
  <GettingStartedModule>
    {({ getLayoutProps }) => {
      const {
        description,
        primaryButton,
        secondaryButton,
        tertiaryButton,
        additionalInfo,
        illustration,
      } = getLayoutProps();

      return (
        <>
          <Column lg={6}>
            <DescriptionModule {...description}>
              {({ getLayoutProps }) => {
                return (
                  <>
                    <TitleBarModule title="Let's get started!" />
                    <p {...getLayoutProps()}>Get started here</p>
                  </>
                );
              }}
            </DescriptionModule>
            <Button {...primaryButton} kind="primary">
              Primary button
            </Button>

            <Button {...secondaryButton} kind="ghost" renderIcon={Add16}>
              Optional button
            </Button>
            <p {...additionalInfo}>
              To learn more about [intent of page], lorem ipsum{' '}
            </p>
            <Button {...tertiaryButton} kind="ghost" renderIcon={Launch16}>
              Knowledge Center
            </Button>
          </Column>
          <Column lg={{ span: 7, offset: 2 }}>
            <img
              {...illustration}
              src={placeholder}
              alt="Getting started illustration"
            />
          </Column>
        </>
      );
    }}
  </GettingStartedModule>
);
