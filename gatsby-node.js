/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions
  /*createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })*/

  rewrites.forEach(config => createRedirect({
    statusCode: 200,
    ...config
  }));
}

const rewrites = [
  {
    fromPath: '/jira/oauth/token',
    toPath: '/api/auth-token-handler',
  },
  {
    fromPath: '/outlook/oauth/token',
    toPath: '/api/outlook-auth-token-handler',
  },
  {
    fromPath: '/oauth/outlook:path/*',
    toPath: '/api/outlook-auth-redirect:path/*',
  },
  {
    fromPath: '/poker/oauth/token',
    toPath: '/api/poker-auth-token-handler',
  },
  {
    fromPath: '/poker/oauth/token/:roomId',
    toPath: '/api/poker-auth-token-handler?roomId=:roomId',
  }
];