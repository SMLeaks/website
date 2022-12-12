// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const fs = require('fs')

async function config() {
  const build = {
    commit: process.env.CF_PAGES_COMMIT_SHA,
    branch: process.env.CF_PAGES_BRANCH,
    url: process.env.URL || process.env.CF_PAGES_URL || 'http://localhost:3000',
    date: new Date(),
  }

  if (build.commit) build.commit = build.commit.slice(0, 7)

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
    favicon: 'favicon.ico',
    organizationName: 'SMLeaks',
    projectName: 'website',
    plugins: [
      'docusaurus-plugin-image-zoom'
    ],
    customFields: {
      build: {
        ...build,
        date: build.date.toISOString(),
      },
    }
  };

  const redirects = {
    'https://discord.gg/AsPKp9r': '/discord',
    [`https://github.com/${config.organizationName}/${config.projectName}`]: '/github',
    '/news/developer-qna': '/developer-qna',
    '/news': ['/devblogs', '/devblog'],
    '/unused/survival-prerelease': '/unused/pre-release',
    '/news/devblog-:splat': ['/devblogs/*', '/devblog/*'],
  }

  let _redirects = {}

  Object.entries(redirects).forEach(([to, from]) => {
    (Array.isArray(from) ? from : [from]).forEach(from => {
      _redirects[to] = from
    })
  });

  let _wildcard_client_redirects = {}

  Object.entries(_redirects).filter(([to, from]) => {
    return to.includes(':splat') && from.includes('*')
  }).forEach(([to]) => {
    let from = redirects[to];
    _wildcard_client_redirects[to.replace(':splat', '')] = (Array.isArray(from) ? from : [from]).map(f => f.replace('*', ''))
  });

  config.plugins.push([
    './src/plugin',
    {
      redirects
    }
  ])

  config.plugins.push([
    '@docusaurus/plugin-client-redirects',
    {
      redirects: Object.entries(_redirects).filter(([to, from]) => {
        return to.startsWith('/') && from.startsWith('/') && !to.includes(':splat') && !from.includes('*')
      }).map(([to]) => {
        return {
          to,
          from: redirects[to]
        }
      }),
      createRedirects(path) {
        let found = Object.entries(_wildcard_client_redirects).find(([to]) => path.startsWith(to));

        if (found) return found[1].map(f => path.replace(found[0], f))
        return undefined;
      },
    }
  ])

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
          beforeDefaultRemarkPlugins: [
            [require('remark-ping'), {
              pingUsername: () => true,
              userURL: (u) => `/credits#${u}`
            }],
          ],
          remarkPlugins: [
            (await import('./src/remark/credit-mention.mjs')).default
          ]
        },
        blog: {
          showReadingTime: true,
          editUrl: `https://github.com/${config.organizationName}/${config.projectName}/blob/main/news`,
          path: './news',
          routeBasePath: '/news',
          blogSidebarTitle: '📰 News',
          blogSidebarCount: 'ALL',
          postsPerPage: 5,
          blogTitle: '📰 News',
          feedOptions: {
            description: `${config.title} News`
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ];

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
      },
      {
        name: 'smleaks:build.commit',
        // @ts-ignore
        content: config.customFields.build.commit
      },
      {
        name: 'smleaks:build.branch',
        // @ts-ignore
        content: config.customFields.build.branch
      },
      {
        name: 'smleaks:build.date',
        // @ts-ignore
        content: config.customFields.build.date
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
      copyright: `Copyright © ${build.date.getFullYear()} ${config.title}`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        margin: 24
      }
    }
  }

  return config;
}

module.exports = config()
