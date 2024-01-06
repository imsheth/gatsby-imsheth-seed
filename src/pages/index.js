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

const IndexPage = () => {
  // console.log("pageAndCommonDataIndexPage", pageAndCommonData)
  const { languages, originalPath, t, i18n } = useI18next()
  return (
    <BaseLayout>
      <Row>
        <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <h1>
            <Trans i18nKey="contentTitle1"></Trans>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col sm>{t("seoTitle")}</Col>
        <Col sm>{t("contentText2")}</Col>
        <Col sm>{t("contentText3")}</Col>
      </Row>
    </BaseLayout>
  )
}

export default IndexPage

export const Head = ({ data }) => {
  const { languages, originalPath, t, i18n } = useI18next()
  console.log(i18n.resolvedLanguage)
  // document.documentElement.lang = i18n.resolvedLanguage
  const pageTranslations = JSON.parse(
    data.locales.edges.find(e => e.node.ns === "index").node.data
  )

  const location = useGeoLocation()
  console.log("locationHead", location)

  return (
    <Seo
      title={pageTranslations["seoTitle"]}
      description={pageTranslations["seoDescription"]}
      slug=""
      image="/images/favicon.png"
    />
  )
}

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
