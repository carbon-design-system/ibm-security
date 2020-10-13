/**
 * @file Description list stories.
 * @copyright IBM Security 2019 - 2020
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { components } from '../../../.storybook';

import {
  DescriptionList,
  DescriptionListBody,
  DescriptionListCell,
  DescriptionListRow,
} from '../..';

import rows from './_mocks_';

storiesOf(components(DescriptionList.name), module)
  .add(`default`, () => (
    <DescriptionList>
      <DescriptionListBody>
        {rows.map(row => {
          const { id, title, description } = row;

          return (
            <DescriptionListRow key={id}>
              <DescriptionListCell>{title}</DescriptionListCell>
              <DescriptionListCell>
                <ul>
                  <li>{description}</li>
                </ul>
              </DescriptionListCell>
            </DescriptionListRow>
          );
        })}
      </DescriptionListBody>
    </DescriptionList>
  ))
  .add(`with borders`, () => (
    <DescriptionList border>
      <DescriptionListBody>
        {rows.map(row => {
          const { id, title, description } = row;

          return (
            <DescriptionListRow key={id}>
              <DescriptionListCell>{title}</DescriptionListCell>
              <DescriptionListCell>
                <ul>
                  <li>{description}</li>
                </ul>
              </DescriptionListCell>
            </DescriptionListRow>
          );
        })}
      </DescriptionListBody>
    </DescriptionList>
  ))
  .add(`with x-small`, () => (
    <DescriptionList size="xs">
      <DescriptionListBody>
        {rows.map(row => {
          const { id, title, description } = row;

          return (
            <DescriptionListRow key={id}>
              <DescriptionListCell>{title}</DescriptionListCell>
              <DescriptionListCell>
                <ul>
                  <li>{description}</li>
                </ul>
              </DescriptionListCell>
            </DescriptionListRow>
          );
        })}
      </DescriptionListBody>
    </DescriptionList>
  ))
  .add(`with small`, () => (
    <DescriptionList size="sm">
      <DescriptionListBody>
        {rows.map(row => {
          const { id, title, description } = row;

          return (
            <DescriptionListRow key={id}>
              <DescriptionListCell>{title}</DescriptionListCell>
              <DescriptionListCell>
                <ul>
                  <li>{description}</li>
                </ul>
              </DescriptionListCell>
            </DescriptionListRow>
          );
        })}
      </DescriptionListBody>
    </DescriptionList>
  ))
  .add(`with large`, () => (
    <DescriptionList size="lg">
      <DescriptionListBody>
        {rows.map(row => {
          const { id, title, description } = row;

          return (
            <DescriptionListRow key={id}>
              <DescriptionListCell>{title}</DescriptionListCell>
              <DescriptionListCell>
                <ul>
                  <li>{description}</li>
                </ul>
              </DescriptionListCell>
            </DescriptionListRow>
          );
        })}
      </DescriptionListBody>
    </DescriptionList>
  ));
