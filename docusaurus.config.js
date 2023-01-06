const buildType = process.env.BUILD_TYPE;

module.exports = {
  title: '雲科網管wiki',
  tagline: '這裡專放一些網管的相關資訊',
  url: 'https://yunnet.brid.gq',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/Yunnet_icon.svg',
  organizationName: 'bridgerhung',
  projectName: 'Yunnet_wiki',
  i18n: {
    defaultLocale: 'zh-Hant',
    locales: ['zh-Hant'],
  },

  themeConfig: {
    navbar: {
      title: 'Yunnet wiki',
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
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} 雲科網管`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        language: ['en', 'zh'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],
};
