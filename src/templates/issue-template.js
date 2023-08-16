import React from 'react';
import Layout from "../layout"
import Seo from '../layout/seo';

function IssueTemplate({ pageContext: { html } }) {
  return (
    <Layout>
      <section>
        <br /><br /><br /><br />
        <div className="container" dangerouslySetInnerHTML={{ __html: html }} />
        <br /><br /><br />
      </section>
    </Layout>
  );
}

export default IssueTemplate;

export const Head = ({ pageContext: { title } }) => (<Seo title={title} />);

/*
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
*/