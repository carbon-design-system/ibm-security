/**
 * @file Toolbar mocks.
 * @copyright IBM Security 2018 - 2020
 */

import { icon, url, random } from '../../_mocks_';
import labels from '../locales/en/Toolbar.json';

const externalURL = 'https://www.ibm.com';

/**
 * Generates the initial navigation model.
 */
const generateNavigationModel = ({
  content,
  href,
  icon,
  id,
  title,
  ...props
}) => ({
  content,
  href: href || window.location.host + url(random(30)),
  icon,
  id: id || `${random(30)}`,
  title,
  ...props,
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
    generateNavigationModel({
      title: item.title,
      content: item.content,
      icon: item.icon,
      href: item.href,
    })
  );

/**
 * Generates application data for the navigation.
 */
const generateApplications = array =>
  array.map(({ children, id, title, content, icon }) => ({
    ...generateNavigationModel({ title, content, icon, id }),
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
    id: 'section2Id',
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
  generateNavigationListModel(
    'Application settings',
    generateNavigation([{ title: 'Application 1' }])
  ),
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
