
async function getIssuesList(graphql) {
    const { data: { allMarkdownRemark: { edges } } } = await graphql(`
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
`);

    return edges.map(edge => {
        const { html, frontmatter: { id, slug, title } } = edge.node;

        return { id, slug: slug.replace(/[/\\?%*:|"<> ]/g, '-').trim(), title, html };
    });
}

module.exports = { getIssuesList };