// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Intelligent Critical Care Center Online Documentation',
  tagline: 'We are idealists, problem-solvers, and explorers of digital health and AI',
  url: 'https://Chesterguan.github.io',
  baseUrl: '/ic3-online-documentation/',
  markdown: {
    mermaid: true,
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Chesterguan', // Usually your GitHub org/user name.
  projectName: 'ic3-online-documentation', // Usually your repo name.
  deploymentBranch:'gh-pages',
  trailingSlash: false,
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars/sidebars-auto.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          exclude: ['summary.mdx'],
          editUrl:
            'https://github.com/Prisma-pResearch/ic3-online-documentation/edit/main/websites/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 6,
          blogTitle: 'Innovative Ideas!',
          blogDescription: 'Innovative ideas and discovers',
          blogSidebarTitle: 'Latest posts',
          editUrl:
            'https://github.com/Prisma-pResearch/ic3-online-documentation/edit/main/websites/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.scss')],//,require.resolve('./src/css/blog-layout.scss')
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  themes: [
    'live-codeblock'
  ],
  plugins: [ // Custom Routes (Plugins): 
    '@docusaurus/theme-mermaid',
    'docusaurus-theme-multi-codetabs',
    'docusaurus-plugin-sass',
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // options
        maxSearchResults: 8,
      }
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 85,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: true
      }
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'resources',
        path: 'pages/resources',
        routeBasePath: 'resources',
        breadcrumbs: true,
        sidebarPath: require.resolve('./sidebars/sidebarResources.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'datasets',
        path: 'pages/datasets',
        routeBasePath: 'datasets',
        breadcrumbs: true,
        sidebarPath: require.resolve('./sidebars/sidebars-datasets.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'workspaces',
        path: 'pages/workspaces',
        routeBasePath: 'workspaces',
        breadcrumbs: true,
        sidebarPath: require.resolve('./sidebars/sidebars-workspaces.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'tutorials',
        path: 'pages/tutorials',
        routeBasePath: 'tutorials',
        breadcrumbs: true,
        sidebarPath: require.resolve('./sidebars/sidebars-tutorials.js'),
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Home',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            to: '/datasets/intro',
            label: 'Datasets',
            position: 'left',
            activeBaseRegex: `/datasets/`,
          },
          {
            to: 'workspaces/HiPerGator',
            label: 'Workspaces',
            position: 'left',
            activeBaseRegex: `/workspaces/`,
          },
          {
            to: '/tutorials/intro',
            label: 'Tutorials',
            position: 'left',
            activeBaseRegex: `/tutorials/`,
          },
         
          {
            type: 'search',
            position: 'right',
          },
          { href: 'https://github.com/Prisma-pResearch/ic3-online-documentation/issues', className: 'header-forum-link', position: 'right' },
          {
            href: 'https://github.com/Prisma-pResearch',
            className: 'header-github-link',
            position: 'right',
          },

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              // {
              //   label: 'Projects',
              //   to: '/docs/category/featured-projects',
              // },
              {
                label: 'Resources',
                to: '/resources/intro',
              },
              // {
              //   label: 'Tutorials',
              //   to: '/docs/category/tutorials',
              // },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                html:
                  `<div > <a class="footer__link-item" href="https://ufhealth.org/" style="list-style: none; color: white;"
                  onMouseOver="this.style.color='#005494'"
                  onMouseOut="this.style.color='#FFF'"
                 >UF Health</a></div>`

              },
              {
                html:
                  `<div > <a class="footer__link-item" href="https://twitter.com/UF_IC3" style="list-style: none; color: white;"
                  onMouseOver="this.style.color='#005494'"
                  onMouseOut="this.style.color='#FFF'"
                 >Twitter</a></div>`

              },

            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        logo: {
          alt: 'ic3 logo',
          src: '/img/Intelligent Critical Care Center.png',
          href: 'https://ic3.center.ufl.edu',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Intelligent Critical Care Center, Inc. Built with Docusaurus.`,
      },
      announcementBar: {
        id: 'announcementBar', // Increment on change
        content: `⭐️ The document is in development!`,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'python',
      },
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      colorMode:{
        defaultMode: 'light',
        disableSwitch: true
      },
    }),
};

module.exports = config;
