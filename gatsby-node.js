/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const { getIssuesList } = require('./src/_common/issues-list');

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createRedirect } = actions
  /*createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })*/

  await createRoutesForIssues(graphql, actions);

  rewrites.forEach(config => createRedirect({
    statusCode: 200,
    ...config
  }));
}

async function createRoutesForIssues(graphql, actions) {
  const issues = await getIssuesList(graphql);

  issues.forEach(issue => {
    const { id, slug, title, html } = issue;

    actions.createPage({
      path: `/issues/${id}/${slug}`,
      matchPath: `/issues/${id}/:slug`,
      component: require.resolve(`./src/templates/issue-template.js`),
      context: { title, html },
    });

    actions.createRedirect({
      fromPath: `/issues/${id}`,
      toPath: `/issues/${id}/${slug}`
    });
  })
}

const rewrites = [
  {
    fromPath: '/jira/oauth/token',
    toPath: '/api/auth-token-handler'
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