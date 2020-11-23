/**
 * @file File uploader stories.
 * @copyright IBM Security 2020
 */

import React from 'react';

import { components, getDocsParameters } from '../../../.storybook';
import { FileUploader } from '../..';
import page from './index.mdx';

const { name } = FileUploader;

export default {
  title: components(name),
  parameters: { docs: { page }, ...getDocsParameters() },
};

export const Default = () => <FileUploader buttonLabel={name} />;
