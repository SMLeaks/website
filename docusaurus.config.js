// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const fs = require('fs')

if(fs.existsSync('version.txt') && process.env.VERSION === undefined) {
  process.env.VERSION = fs.readFileSync('version.txt').toString()
}

const build = {
  version: process.env.VERSION.trim(),
  commit: process.env.CF_PAGES_COMMIT_SHA,
  branch: process.env.CF_PAGES_BRANCH,
  url: process.env.URL || process.env.CF_PAGES_URL || 'http://localhost:3000',
}

if(build.commit) build.commit = build.commit.slice(0, 7)

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
  url: build.url,
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico'  
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
];

let copyright = `Copyright © ${new Date().getFullYear()} ${config.title}`

if(build.version) {
  copyright += ` | v${build.version}`
  if(build.branch) copyright += `-${build.branch}`
  if(build.commit) copyright += `+${build.commit}`
} else {
  copyright += ' | Build '
  if(build.branch) copyright += `${build.branch}-`
  if(build.commit) copyright += `${build.commit}`
}
/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
config.themeConfig = {
  colorMode: {
    defaultMode: 'dark',
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
        href: `pathname:///github`,
        label: 'GitHub',
        position: 'right',
      },
      {
        href: 'pathname:///discord',
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
    copyright
  },
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
}

module.exports = config;
