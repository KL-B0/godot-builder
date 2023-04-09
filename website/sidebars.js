// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'introduction',
    'getting-started',
    {
      type: 'category',
      label: 'GitHub Actions',
      link: {
        type: 'generated-index',
        title: 'GitHub Actions',
        description: 'Learn how to configure the builder for GitHub Actions!',
        slug: '/category/github-actions',
        keywords: ['guides'],
        image: '/img/docasaurus.png'
      },
      items: [
        'github-actions/windows',
        'github-actions/macos',
        'github-actions/linux',
        'github-actions/android',
        'github-actions/ios'
      ]
    },
    {
      type: 'category',
      label: 'Contributing',
      link: {
        type: 'generated-index',
        title: 'Contributing',
        description: 'Learn how to contribute to the project!',
        slug: '/category/contributing',
        keywords: ['guides'],
        image: '/img/docasaurus.png'
      },
      items: [
        'contributing/documentation',
        'contributing/code',
        'contributing/translations'
      ]
    }
  ]
};

module.exports = sidebars;
