/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'BARK Cloud Software Platform ',
  tagline: 'Document Library',
  url: 'https://Business-Software-Design.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Business-Software-Design', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
  navbar: {
      title: '',
      logo: {
          alt: 'BARK - Business Automation and Record Keeping Software Documentation logo',
          src: 'img/logo.png',
          href: 'https://BusinessSoftware.Design/Public/BARK.html',
         
          },
      items: [
        { to: "/", className: 'material-icons', label: 'home', position: 'left' },
        {
          type: 'doc',
          docId: 'tutorials/tutorials-intro',
          position: 'left',
          label: 'Tutorials',
          },
        {
          type: 'doc',
          docId: 'manuals/manuals-intro',
          position: 'left',
          label: 'Manuals',
          },
        {
          type: 'doc',
            docId: 'CISSP/Introduction_to_CISSP',
          position: 'left',
          label: 'CISSP',
          },
          {
              type: 'doc',
              docId: 'faq/faq',
              position: 'left',
              label: 'FAQ',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: "skype:dominiccollier?call", className: 'material-icons', label: 'headset', position: 'right' },
          { to: "tel: +61872000400", className: 'material-icons', label:'call', position: 'right' },
          { to: "mailto: info@icsr.com.au", className: 'material-icons', label: 'mail', position: 'right' },
          { to: "https://businesssoftware.design/chatwindow.html", className: 'material-icons', label: 'forum', position: 'right' },
          
      ],
  },
  footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorials',
                  to: '/docs/tutorials/tutorials-intro',
              },
              {
                  label: 'Manuals',
                  to: '/docs/manuals/manuals-intro',
              },
              {
                  label: 'Using Markdown Syntax',
                  to: '/docs/user-guide/markdown-features',
              },
          ],
          },
          {
              title: 'FAQs',
              items: [
                  {
                      label: 'FAQs',
                      to: '/docs/faq/faq',
                  },
              ],
          },
        //{
        //  title: 'Community',
        //  items: [
        //    {
        //      label: 'Stack Overflow',
        //      href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //    },
        //    {
        //      label: 'Discord',
        //      href: 'https://discordapp.com/invite/docusaurus',
        //    },
        //    {
        //      label: 'Twitter',
        //      href: 'https://twitter.com/docusaurus',
        //    },
        //  ],
        //},
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            //{
            //  label: 'GitHub',
            //  href: 'https://github.com/facebook/docusaurus',
            //},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Business Software Design. Dominic Collier.`,
      },
  algolia: {
      apiKey: '7684a3aa91ae745beb804dcc1ac1a213',
      indexName: 'docs',
          // Optional: see doc section below
          contextualSearch: false,

          // Optional: see doc section below
          appId: 'UBF3GVI7EP',
          
          // Optional: Algolia search parameters
          searchParameters: {},

          //... other Algolia params
  },
  },
  stylesheets: [
        // String format.
        'https://fonts.googleapis.com/icon?family=Material+Icons',
        // Object format.
        {
            href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
            type: 'text/css',
        },
    ],
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
