import * as React from "react"
import { graphql } from "gatsby"
import BaseLayout from "../components/baseLayout"
import Seo from "../components/seo"
import useGeoLocation from "react-ipgeolocation"

import "bootstrap/dist/css/bootstrap.min.css"

import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Trans } from "gatsby-plugin-react-i18next"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const NotFoundPage = () => {
  return (
    <BaseLayout>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </BaseLayout>
  )
}

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage

export const pageAndCommonData = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index", "common"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
