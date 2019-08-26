/**
 * @file Toolbar mocks.
 * @copyright IBM Security 2018
 */

import React from 'react';

import { icon, url, random } from '../../_mocks_';
import labels from '../locales/en/Toolbar.json';
import { namespace as navItemNamespace } from '../../Nav/NavItem/NavItem';

const externalURL = 'https://www.ibm.com';

/**
 * Generates the initial navigation model.
 */
const generateNavigationModel = (title, content, icon, href) => ({
  id: url(random(30)),
  title,
  content,
  icon,
  href: href || window.location.host + url(random(30)),
});

/**
 * Generates the navigation list model.
 */
const generateNavigationListModel = (title, navigation) => ({
  id: url(random(30)),
  title,
  navigation,
});

/**
 * Generates data for the navigation.
 */
const generateNavigation = array =>
  array.map(item =>
    generateNavigationModel(item.title, item.content, item.icon, item.href)
  );

/**
 * Generates application data for the navigation.
 */
const generateApplications = array =>
  array.map(({ children, title, content, icon }) => ({
    ...generateNavigationModel(title, content, icon),
    children,
  }));

const applicationsToGenerate = [
  {
    title: 'Section 1',
    children: generateApplications([
      { title: 'Applications' },
      { title: 'Plugins' },
      { title: 'Users' },
    ]),
  },
  {
    title: 'Section 2',
    icon,
  },
  {
    title: 'Section 3',
    icon,
  },
];

const menu = [
  generateNavigationListModel(
    'My applications',
    generateApplications(applicationsToGenerate)
  ),
  generateNavigationListModel(
    '',
    generateApplications([
      {
        title: 'Section 4',
      },
      {
        title: 'Section 5',
        icon,
      },
      {
        title: 'Section 6',
      },
    ])
  ),
];

const settings = [
  generateNavigationListModel(
    'General settings',
    generateNavigation([
      { title: 'Account' },
      { title: 'Permissions' },
      { title: 'Teams' },
    ])
  ),
  {
    id: '#renderlink-example',
    navigation: [
      {
        renderLink: () => (
          <a className={`${navItemNamespace}__link`} href="#example">
            Custom link
          </a>
        ),
      },
    ],
    title: 'Application settings',
  },
  generateNavigationListModel(
    'Legal',
    generateNavigation([
      { title: 'Privacy', href: externalURL },
      { title: 'Terms' },
    ])
  ),
];

const content = `
<main>
  <article>
    <h1>Example info</h1>
    <p>You can display information in the panel with HTML.</p>
    <p>HTML tags you can use:</p>
    <ul>
      <li>
        Ordered and unordered lists
      </li>
      <li>
        Headings
      </li>
      <li>
        Paragraphs
      </li>
      <li>
        Anchors
      </li>
    </ul>
  </article>
</main>
`;

const support = [
  generateNavigationListModel(
    'Support',
    generateNavigation([
      { title: 'Documentation' },
      { title: 'Learn about...', content },
    ])
  ),
];

export { labels, menu, settings, support };
