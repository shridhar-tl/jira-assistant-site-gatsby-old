const queryWithHtml = `
query {
  allMarkdownRemark {
    edges {
      node {
        html
        frontmatter {
          id
          slug
          title
        }
      }
    }
  }
}
`;
const queryWithOutHtml = `
query {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          id
          slug
        }
      }
    }
  }
}
`;

async function getIssuesList(graphql, includeHtml = true) {
  const result = await graphql(includeHtml ? queryWithHtml : queryWithOutHtml);

  return formatIssuesList(result);
}

function formatIssuesList({ data: { allMarkdownRemark: { edges } } }) {
  return edges.map(({ node }) => {
    const { html, frontmatter: { id, slug, title } } = node;
    const replacedSlug = slug.replace(/[^A-Za-z0-9-]/g, '-').replace(/--/g, '-').trim().toLowerCase();

    return {
      id, slug: replacedSlug, title, html,
      path: `/issue-tracker/${id}/${encodeURIComponent(replacedSlug)}`
    };
  });
}

module.exports = { getIssuesList, formatIssuesList };