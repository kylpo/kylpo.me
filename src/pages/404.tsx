import React from "react"

import { SEO } from "../components/seo"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <column>
      <txt tag="h1">NOT FOUND</txt>
      <txt tag="p">
        You just hit a route that doesn&#39;t exist... the sadness.
      </txt>
    </column>
  </>
)

export default NotFoundPage
