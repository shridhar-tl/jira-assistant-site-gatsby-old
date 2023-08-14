import React from "react"
import Layout from "../layout"
import Seo from "../layout/seo"

const NotFoundPage = () => (
  <Layout>
    <br /><br /><br /><br />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage

export const Head = () => <Seo title="404: Not Found" />
