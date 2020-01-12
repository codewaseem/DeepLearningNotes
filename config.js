const config = {
  gatsby: {
    pathPrefix: "/",
    siteUrl: "https://html5.codewaseem.tech",
    gaTrackingId: null
  },
  header: {
    logo:
      "https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/favicon.png",
    logoLink: "https://html5.codewaseem.tech",
    title: "HTML5 Deep Dive",
    githubUrl: "",
    helpUrl: "",
    tweetText: "",
    links: [{ text: "", link: "" }],
    search: {
      enabled: false,
      indexName: "",
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY
    }
  },
  sidebar: {
    forcedNavOrder: [
      "/introduction",
      "/html5-basics",
      "/the-document-object",
      "/elements"
    ],
    collapsedNav: ["/codeblock"],
    links: [{ text: "HTML5 Specs", link: "https://html.spec.whatwg.org/dev/" }],
    frontline: false,
    ignoreIndex: true
  },
  siteMetadata: {
    title: "HTML5 Deep Dive | Learning Directly From Specs",
    description: "Learn HTML5 in-depth directly from the HTML5 specifications",
    ogImage: null,
    docsLocation:
      "https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content",
    favicon: "https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg"
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: "HTML5 From Specs",
      short_name: "Learn HTML5",
      start_url: "/",
      background_color: "#6b37bf",
      theme_color: "#6b37bf",
      display: "standalone",
      crossOrigin: "use-credentials",
      icons: [
        {
          src: "src/pwa-512.png",
          sizes: `512x512`,
          type: `image/png`
        }
      ]
    }
  }
};

module.exports = config;
