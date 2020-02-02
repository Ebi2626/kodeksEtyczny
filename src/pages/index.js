import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Na front" />
    <Link to="/dla-klienta/">Dla klienta</Link>
    <Link to="/dla-pracownika/">Dla pracownika</Link>
    <Link to="/dla-przelozonego/">Dla przełożonego</Link>
    <Link to="/faq/">Faq</Link>
  </Layout>
)

export default IndexPage
