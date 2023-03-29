// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "雲科網管wiki",
  tagline: "網管的社團課程",
  url: "https://wiki.yunnet.eu.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/Yunnet_icon.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "bridgerhung", // Usually your GitHub org/user name.
  projectName: "Yunnet_wiki", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */

      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/bridgerhung/Yunnet_wiki/edit/main/",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-P155VGKNMD",
          anonymizeIP: false,
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
          alt: "Yunnet logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "/category/宿舍網路",
            position: "left",
            label: "宿舍網路",
          },
          {
            type: "doc",
            docId: "/category/下學期社團課程資料",
            position: "left",
            label: "社團課程",
          },
          {
            type: "doc",
            docId: "/category/周末研討會",
            position: "left",
            label: "周末研討會",
          },
          {
            type: "doc",
            docId: "/category/往年社團課程資料",
            position: "left",
            label: "往年社團課程",
          },
          {
            type: "doc",
            docId: "announcement/官方文檔",
            position: "left",
            label: "官方文檔",
          },
        ],
      },
      footer: {
        style: "light",

        copyright: `© ${new Date().getFullYear()} <a href="https://yunnet.yuntech.edu.tw" target="_blank" rel="noopener noreferrer">雲科網管</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: "announcementBar-10", // Increment on change
        content: '<b><a href="/111/下學期/2023-03-29%20Nuxt3-1">3/29 Nuxt3</a></b>',
        //content: '<b><a href="/111/Sunday/2023-03-26%20docker-network">3/26 研討會</a></b>',
        isCloseable: true,
      },
      algolia: {
        appId: "EVWC1N1L17",
        apiKey: "bb9b2ce400d51545652321fd5efcd8c0",
        indexName: "yunnet-eu",
        contextualSearch: true,
      },
    }),
};

module.exports = config;
