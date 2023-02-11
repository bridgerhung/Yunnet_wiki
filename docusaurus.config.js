// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');


// This probably only makes sense for the alpha/beta/rc phase, temporary
  /*
  const expectedPrefix = '2.0.0-rc.';
  const lastReleasedVersion = versions[0];
  if (!lastReleasedVersion || !lastReleasedVersion.includes(expectedPrefix)) {
    throw new Error(
      'this code is only meant to be used during the 2.0 alpha/beta/rc phase.',
    );
  }
  const version = parseInt(lastReleasedVersion.replace(expectedPrefix, ''), 10);
  return `${expectedPrefix}${version + 1}`;
   */
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '雲科網管wiki',
  tagline: '這裡專放一些網管的相關資訊',
  url: 'https://wiki.yunnet.eu.org',
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
          editUrl: 'https://github.com/bridgerhung/Yunnet_wiki/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-P155VGKNMD',
          anonymizeIP: false,
        }
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
            docId: '/category/宿舍網路',
            position: 'left',
            label: '宿舍網路',
          },
          {
            type: 'doc',
            docId: '/category/上學期社團課程資料',
            position: 'left',
            label: '社團課程',
          },
          {
            type: 'doc',
            docId: '/category/往年社團課程資料',
            position: 'left',
            label: '往年社團課程',
          },
          {
            type: 'doc',
            docId: 'announcement/官方文檔',
            position: 'left',
            label: '系統公告',
          }

        ],
      },
      footer: {
        style: 'dark',

        copyright: `© ${new Date().getFullYear()} 雲科網管`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: 'announcementBar-2', // Increment on change
        content: `🎇網管的111-2文檔現已開始同步維護🎇搜尋功能已經上線`,
      },
      algolia: {
        appId: 'EVWC1N1L17',
        apiKey: 'bb9b2ce400d51545652321fd5efcd8c0',
        indexName: 'yunnet-eu',
        contextualSearch: true,
      },
      
    }),
};

module.exports = config;