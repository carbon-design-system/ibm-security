/**
 * @file Summary card skeleton.
 * @copyright IBM Security 2019
 */

import React from 'react';

import { getComponentNamespace } from '../../../globals/namespace/index';

import Card from '..';
import SkeletonText from '../../SkeletonText';

const namespace = getComponentNamespace('summary-card--skeleton');

const WIDTHS = {
  sm: '25%',
  md: '50%',
  lg: '75%',
};

const { sm, md, lg } = WIDTHS;

const SummaryCardSkeleton = () => (
  <Card className={namespace}>
    <SkeletonText width={sm} />
    <SkeletonText width={sm} heading />
    <SkeletonText width={md} />
    <SkeletonText width={md} />
    <SkeletonText width={lg} />

    <div className={`${namespace}__wrapper`}>
      <SkeletonText className={`${namespace}__text--inline`} width={sm} />
      <SkeletonText width={sm} />
    </div>
  </Card>
);

export default SummaryCardSkeleton;
