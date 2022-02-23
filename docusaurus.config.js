// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gate of Babylon',
  tagline: '技术📚和游戏🎮的杂货铺',
  url: 'https://lixingsun.github.io',
  baseUrl: '/gate-of-babylon/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'LixingSun',
  projectName: 'gate-of-babylon',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],


  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'game',
        routeBasePath: 'game',
        path: './game',
        showReadingTime: false,
        blogSidebarTitle: '游戏库',
        blogSidebarCount: 'ALL',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Gate of Babylon',
        logo: {
          alt: 'GOB Logo',
          src: 'img/my_avatar.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'frontend/fe-home',
            position: 'left',
            label: '前端',
          },
          { to: '/game', label: '游戏', position: 'left' },
          { to: '/blog', label: '博客', position: 'left' },
          {
            href: 'https://github.com/LixingSun/gate-of-babylon',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '分类',
            items: [
              {
                label: '前端',
                to: '/docs/frontend',
              },
              {
                label: '游戏',
                to: '/game',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/LixingSun/gate-of-babylon',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Lixing Sun. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  i18n: {
    defaultLocale: 'zh',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      zh: {
        htmlLang: 'zh',
      }
    },
  },
};

module.exports = config;
