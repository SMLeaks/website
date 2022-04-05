// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

process.env.VERSION ||= require('fs').readFileSync('./version.txt').toString()

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SMLeaks',
  i18n: {
    defaultLocale: 'en-US',
    locales: ['en-US'],
    localeConfigs: {
      'en-US': {
        label: 'English (United States)'
      },
    }
  },
  tagline: 'Community run leaking website for Scrap Mechanic',
  url: 'https://new.smleaks.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'SMLeaks',
  projectName: 'website-new',
};

config.presets = [
  [
    'classic',
    /** @type {import('@docusaurus/preset-classic').Options} */
    ({
      docs: {
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: `https://github.com/${config.organizationName}/${config.projectName}/blob/main`,
        routeBasePath: '/',
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      },
      blog: {
        showReadingTime: true,
        editUrl: `https://github.com/${config.organizationName}/${config.projectName}/blob/main/devblogs`,
        path: './devblogs',
        routeBasePath: '/devblog',
        blogSidebarTitle: '📚 Devblogs',
        blogSidebarCount: 'ALL',
        postsPerPage: 5,
        blogTitle: '📚 Devblogs'
      },
      theme: {
        customCss: require.resolve('./src/css/custom.css'),
      },
    }),
  ],
]

let copyright = `Copyright © ${new Date().getFullYear()} ${config.title}` 

if(process.env.VERSION) {
  copyright += ` | v${process.env.VERSION.trim()}`
}
if(process.env.GITHUB_SHA) {
  copyright += (process.env.VERSION ? '+' : ' | Build ')
  copyright += process.env.GITHUB_SHA.slice(0,7)
}

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
config.themeConfig = {
  colorMode: {
    defaultMode: 'dark'
  },
  metadata: [
    {
      name: "theme-color",
      content: "#E67E22"
    },
    {
      name: "msapplication-navbutton-color",
      content: "#E67E22"
    },
    {
      name: "apple-mobile-web-app-status-bar-style",
      content: "#E67E22"
    }
  ],
  image: 'favicon.png',
  navbar: {
    title: config.title,
    logo: {
      alt: `${config.title} Logo`,
      src: 'favicon.png',
    },
    items: [
      {
        href: `https://github.com/${config.organizationName}/${config.projectName}`,
        label: 'GitHub',
        position: 'right',
      },
      {
        href: '/discord',
        label: 'Discord',
        position: 'right'
      },
      // {
      //   type: 'localeDropdown',
      //   position: 'left'
      // }
    ],
  },
  footer: {
    style: 'light',
    copyright: copyright
  },
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
}

module.exports = config;
