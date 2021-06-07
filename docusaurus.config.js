/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'BARK Software',
  tagline: 'User Library',
    url: 'https://Business-Software-Design.github.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Business-Software-Design', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: ' User Library',
      logo: {
          alt: 'BARK - Business Automation and Record Keeping Software Documentation logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorials',
          },
        {
          type: 'doc',
          docId: 'manuals/manuals-intro',
          position: 'left',
          label: 'Manuals',
          },
       
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/faq/FAQ.html', label: 'FAQ', position: 'left' },
        {
            href: 'https://github.com/Business-Software-Design/Docs',
          label: 'GitHub',
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
            {
              label: 'Tutorial',
              to: '/docs/intro',
              },
              {
                  label: 'Hello',
                  to: '/docs/hello',
              },
              {
                  label: 'Using Markdown Syntax',
                  to: '/docs/user-guide/markdown-guide',
              },
          ],
          },
          {
              title: 'Videos',
              items: [
                  {
                      label: 'Tutorial Video',
                      to: '/videos/vids-intro',
                  },
              ],
          },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
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
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Business Software Design. Dominic Collier.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Business-Software-Design/Docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Business-Software-Design/Docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
