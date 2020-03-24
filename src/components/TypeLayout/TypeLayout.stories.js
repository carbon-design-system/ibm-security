/**
 * @file Type layout stories.
 * @copyright IBM Security 2019
 */

import React from 'react';
import { storiesOf } from '@storybook/react';

import { components } from '../../../.storybook';

import {
  TypeLayout,
  TypeLayoutBody,
  TypeLayoutRow,
  TypeLayoutCell,
  CodeSnippet,
} from '../..';

import rows from './_mocks_';

storiesOf(components('TypeLayout'), module)
  .add(`default`, () => (
    <TypeLayout>
      <TypeLayoutBody>
        {rows.map(row => {
          const { id, title, description } = row;

          return (
            <TypeLayoutRow key={id}>
              <TypeLayoutCell>{title}</TypeLayoutCell>
              <TypeLayoutCell>
                <ul>
                  <li>
                    <CodeSnippet type="multi">{description}</CodeSnippet>
                  </li>
                </ul>
              </TypeLayoutCell>
            </TypeLayoutRow>
          );
        })}
      </TypeLayoutBody>
    </TypeLayout>
  ))
  .add(`with borders`, () => (
    <TypeLayout border>
      <TypeLayoutBody>
        {rows.map(row => {
          const { id, title, description } = row;

          return (
            <TypeLayoutRow key={id}>
              <TypeLayoutCell>{title}</TypeLayoutCell>
              <TypeLayoutCell>
                <ul>
                  <li>{description}</li>
                </ul>
              </TypeLayoutCell>
            </TypeLayoutRow>
          );
        })}
      </TypeLayoutBody>
    </TypeLayout>
  ))
  .add(`with x-small`, () => (
    <TypeLayout size="xs">
      <TypeLayoutBody>
        {rows.map(row => {
          const { id, title, description } = row;

          return (
            <TypeLayoutRow key={id}>
              <TypeLayoutCell>{title}</TypeLayoutCell>
              <TypeLayoutCell>
                <ul>
                  <li>{description}</li>
                </ul>
              </TypeLayoutCell>
            </TypeLayoutRow>
          );
        })}
      </TypeLayoutBody>
    </TypeLayout>
  ))
  .add(`with small`, () => (
    <TypeLayout size="sm">
      <TypeLayoutBody>
        {rows.map(row => {
          const { id, title, description } = row;

          return (
            <TypeLayoutRow key={id}>
              <TypeLayoutCell>{title}</TypeLayoutCell>
              <TypeLayoutCell>
                <ul>
                  <li>{description}</li>
                </ul>
              </TypeLayoutCell>
            </TypeLayoutRow>
          );
        })}
      </TypeLayoutBody>
    </TypeLayout>
  ))
  .add(`with large`, () => (
    <TypeLayout size="lg">
      <TypeLayoutBody>
        {rows.map(row => {
          const { id, title, description } = row;

          return (
            <TypeLayoutRow key={id}>
              <TypeLayoutCell>{title}</TypeLayoutCell>
              <TypeLayoutCell>
                <ul>
                  <li>{description}</li>
                </ul>
              </TypeLayoutCell>
            </TypeLayoutRow>
          );
        })}
      </TypeLayoutBody>
    </TypeLayout>
  ));
