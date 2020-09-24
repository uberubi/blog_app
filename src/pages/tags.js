import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const TagsPage = () => (
  <Layout  pageTitle='All Tags'>
    <SEO title="Tags" keywords={['gatsby','application','react']}/>
    <h1>Tags page</h1>
  </Layout>
)

export default TagsPage