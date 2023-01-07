// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: '雲科網管wiki',
  tagline: '這裡專放一些網管的相關資訊',
  url: 'https://yunnet.brid.gq',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/Yunnet_icon.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'bridgerhung', // Usually your GitHub org/user name.
  projectName: 'Yunnet_wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */

      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          versions: {
            current: {
              label: '111上學期',
              path: './docs',
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */

    ({
      navbar: {
        title: `Yunnet wiki `,
        logo: {
          alt: 'Yunnet logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/社團課程資料',
            position: 'left',
            label: '社團課程資料',
          },
          {
            type: 'doc',
            docId: '/category/宿舍網路',
            position: 'left',
            label: '宿舍網路',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownItemsAfter: [{ to: '/versions', label: '所有版本' }],
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      footer: {
        style: 'dark',

        copyright: `Copyright © ${new Date().getFullYear()} 雲科網管`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: 'netlify_26432c7f-f0e5-4e0e-b032-cca808867a70_main_all',
        apiKey: 'bf92cdb5b1850bb199db2a2d95e51d9e',
        indexName: 'CQDWJ03MCR',
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
          searchParameters: {},
          searchPagePath: 'search',
        },
      },
    }),
};

module.exports = config;
