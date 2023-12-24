/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import urljoin from "url-join"

function Seo({ description, title, slug, image, children }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            twitter
          }
        }
      }
    `
  )

  const pageTitle = title
    ? `${title} | ${site.siteMetadata.title}`
    : site.siteMetadata.title
  const pageDescription = description || site.siteMetadata.description
  const pageCreatorTwitter = site.siteMetadata?.twitter
    ? `@${site.siteMetadata?.twitter}`
    : ``
  const pageUrl = urljoin(site.siteMetadata.siteUrl, slug)
  const pageImage = urljoin(
    site.siteMetadata.siteUrl,
    image || site.siteMetadata.siteImage
  )

  return (
    <>
      <meta charSet="utf-8" />

      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />

      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      {/* {image && <meta property="og:image" content={image.url} />} */}

      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={pageCreatorTwitter} />
      {/* {image && <meta name="twitter:image" content={image.url} />} */}

      {children}
    </>
  )
}

export default Seo
