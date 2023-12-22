// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Strapi Documentation",
  tagline: "Design APIs fast, manage content easily.",
  url: "https://documents.lightup.io.vn/",
  baseUrl: "/",
  onBrokenLinks: "throw", // replace with 'throw' to stop building if broken links
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'strapi', // Usually your GitHub org/user name.
  // projectName: 'documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-live-codeblock", "@docusaurus/theme-mermaid"],

  scripts: [
    {
      src: "/js/hotjar.js",
      type: "module",
      async: true,
    },
    {
      src: "/js/particle.js",
      type: "module",
      async: true,
    },
    {
      src: "/js/firework.js",
      type: "module",
      async: true,
    },
    {
      src: "/js/ball.js",
      type: "module",
      async: true,
    },
    {
      src: "/js/bar.js",
      type: "module",
      async: true,
    },
    {
      src: "/js/game.js",
      type: "module",
      async: true,
    },
    {
      src: "/js/particleProfiles.js",
      type: "module",
      async: true,
    },
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/strapi/documentation/edit/main/docusaurus",
          admonitions: {
            tag: ":::",
            keywords: [
              // Admonitions defaults
              "note",
              "tip",
              "info",
              "caution",
              "danger",

              // Admonitions custom
              "callout",
              "prerequisites",
              "strapi",
              "warning",
            ],
          },
        },
        // we're using docs-only mode for now — see https://docusaurus.io/docs/docs-introduction
        blog: false,
        theme: {
          customCss: require.resolve("./src/scss/__index.scss"),
        },
      },
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: "docs/dev-docs/api/openapi.yaml",
            route: "/openapi/",
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#4945FF",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      algolia: {
        appId: "392RJ63O14",
        apiKey: "8cf63dc4a24ff4087407f9f5bd188aae",
        indexName: "StrapiDocsNextStrapiDocsNext",
      },
      navbar: {
        hideOnScroll: false,
        logo: {
          alt: "Strapi Documentation Logo",
          src: "img/logo.svg",
          srcDark: "img/logo-dark.png",
        },
        items: [
          {
            type: "doc",
            docId: "dev-docs/intro",
            position: "left",
            label: "Developer Docs",
          },

          {
            href: "https://github.com/HPhucDev/light-up-documents",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Dev Docs",
                to: "/dev-docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/hoangphucdevelopervn",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/HPhucDev",
              },
              {
                label: "GitHub",
                href: "https://github.com/HPhucDev",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://hoangphuc.lightup.io.vn",
              },
            ],
          },
        ],
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        // selector: '.markdown :not(em) > img', // temporarily disabled to ensure it works with themed images
      },
      hubspot: {
        accountId: 6893032,
        async: false, // OPTIONAL: sets the async attribute on the script tag, defaults to false
        defer: false, // OPTIONAL: sets the defer attribute on the script tag, defaults to false
      },
    }),

  plugins: [
    [
      "@docusaurus/plugin-google-tag-manager",
      {
        containerId: "GTM-WT49VGT",
      },
    ],
    "docusaurus-plugin-hubspot",
    "docusaurus-plugin-sass",
    "docusaurus-plugin-image-zoom",
    /**
     * Seems like we have an issue where a medium-zoom--hidden class is applied on the second, top-most (z-index wise) image,
     * actually hiding the image when zoomed in. Found no related issue in the plugin's repo, might have to dig whether it's
     * related to the Docusaurus canary build or not.
     */
    // [
    //   '@docusaurus/plugin-client-redirects',
    //   {
    //     fromExtensions: ['html', 'htm'], // /myPage.html -> /myPage
    //     redirects: [
    //       // /docs/oldDoc -> /docs/newDoc
    //       {
    //         to: '/dev-docs/admin-panel-customization',
    //         from: ['/developer-docs/latest/development/admin-customization', '/developer-docs/latest/development/admin-customization.html'],
    //       },
    //       // Redirect from multiple old paths to the new path
    //       // {
    //       //   to: '/docs/newDoc2',
    //       //   from: ['/docs/oldDocFrom2019', '/docs/legacyDocFrom2016'],
    //       // },
    //     ],
    //   },
    // ],
  ],
};

module.exports = config;
