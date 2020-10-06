/**
 * @file Important content area stories.
 * @copyright IBM Security 2019 - 2020
 */

import { boolean, select, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import React from 'react';

import { components } from '../../../.storybook';

import { ICA } from '../..';
import { Locales } from './ICA';

import props from './_mocks_';

const { label, total, value: icaValue } = props;

const storyProps = ({ value = icaValue, total } = {}) => ({
  label: text('Label (label)', label),
  value: number('Value (value)', value),
  total: number('Total (total)', total),
  percentage: boolean('Percentage (percentage)', false),
  forceShowTotal: boolean('Show total (forceShowTotal)', false),
  truncate: boolean('Truncate (truncate)', ICA.defaultProps.truncate),
  locale: select('Locale (locale)', Locales, Locales[0]),
});

storiesOf(components('ICA'), module)
  .add('default', () => <ICA {...storyProps()} />)
  .add('with null value', () => <ICA {...storyProps({ value: null })} />)
  .add('with 1000 value', () => (
    <ICA {...storyProps({ value: icaValue * 100 })} />
  ))
  .add('with 1000000 value', () => (
    <ICA {...storyProps({ value: icaValue * 100000 })} />
  ))
  .add('with total', () => <ICA {...storyProps({ total })} />)
  .add(
    'in an ICA wall',
    () => (
      <div className="bx--grid bx--grid--full-width">
        <div className="bx--row">
          <div className="bx--col">
            <h4>4 spaced</h4>
          </div>
        </div>
        <div className="bx--row">
          {Array(4)
            .fill(0)
            .map(item => (
              <div
                key={item.id}
                className="bx--col-sm-4 bx--col-md-2 bx--col-lg-4"
              >
                <ICA {...storyProps({ total })} />
              </div>
            ))}
        </div>
        <div className="bx--row">
          <div className="bx--col">
            <h4>8 condensed</h4>
          </div>
        </div>
        <div className="bx--row">
          {Array(8)
            .fill(0)
            .map(item => (
              <div
                key={item.id}
                className="bx--col-sm-2 bx--col-md-2 bx--col-lg-2"
              >
                <ICA {...storyProps({ total })} />
              </div>
            ))}
        </div>
      </div>
    ),
    {
      info: {
        text: `
        Multiple \`ICA\` components (i.e., an "ICA Wall") should be presented in a grid using the correct class names.
        
        These two row examples show different combinations of breakpoints and spans set per column with specific class names.
        
        For more information the 16 column IBM grid, please review the [\`@carbon/grid\` package documentation](https://github.com/carbon-design-system/carbon/tree/master/packages/grid).
      `,
      },
    }
  );
