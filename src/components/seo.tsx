import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Props {
  description?: string
  lang?: string
  title?: string
}

SEO.defaultProps = {
  lang: `en`,
  description: ``,
}

export function SEO(props: Props) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
          }
        }
      }
    `
  )

  const metaDescription = props.description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: props.lang,
      }}
      title={props.title}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        // {
        //   property: `og:title`,
        //   content: props.title,
        // },
        // {
        //   property: `og:description`,
        //   content: metaDescription,
        // },
        // {
        //   property: `og:type`,
        //   content: `website`,
        // },
        // {
        //   name: `twitter:card`,
        //   content: `summary`,
        // },
        // {
        //   name: `twitter:creator`,
        //   content: site.siteMetadata.author,
        // },
        // {
        //   name: `twitter:title`,
        //   content: props.title,
        // },
        // {
        //   name: `twitter:description`,
        //   content: metaDescription,
        // },
      ]}
    />
  )
}
