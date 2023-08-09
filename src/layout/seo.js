/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, title, children, noAppend }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title || 'Jira Assistant';
  const author = site.siteMetadata?.author;

  return (
    <>
      {noAppend && <title>{title || defaultTitle}</title>}
      {!noAppend && <title>{title ? `${title} - [${defaultTitle}]` : defaultTitle}</title>}
      <meta name="description" content={metaDescription} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={site.siteMetadata?.author || ``} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description"
        content={metaDescription} />
      <meta name="author" content={author} />
      <meta name="keywords"
        content="jira, free, worklog, time sheet, sprint, report, bulk, import, plugin, extension, addon" />
      <link rel="apple-touch-icon" href="logo.png" />
      <link rel="manifest" href="manifest.json" />
      {children}
    </>
  )
}

export default Seo
