/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jira Assistant`,
    description: `Jira Assistant is a open-source fully customizable plugin for Jira which easily integrates with Jira to help track worklogs, generate various reports, bulk import issues & worklogs, etc..`,
    author: `Shridhar TL`,
    siteUrl: `https://www.jiraassistant.com/`,
    contactEmail: 'shridhar.tl@gmail.com'
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `issues`,
        path: `${__dirname}/node_modules/ja-issues-cache/issues`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/ja-128.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        createLinkInHead: true,
        excludes: [
          "/search/",
          "/search/*",
          "/faq/"
        ]
      }
    },
  ],
}
