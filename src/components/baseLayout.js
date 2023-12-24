import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Trans } from "gatsby-plugin-react-i18next"

import SiteHeader from "./siteHeader"
import SiteFooter from "./siteFooter"
import "./gatsby-imsheth-seed.css"
import "./baseLayout.css"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Image from "react-bootstrap/Image"

const Layout = ({ children }) => {
  const { i18n } = useI18next()
  document.documentElement.lang = i18n.resolvedLanguage
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    // Todo: Fix the overflow-y here
    <html data-bs-theme="light">
      <SiteHeader
        siteTitle={
          data.site.siteMetadata?.title || `siteMetadata.title missing`
        }
      />
      <Container>{children}</Container>
      <SiteFooter />
    </html>
  )
}

export default Layout
