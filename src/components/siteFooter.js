import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Trans } from "gatsby-plugin-react-i18next"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import {
  Whatsapp,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
} from "react-bootstrap-icons"

const SiteFooter = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            authorTitle
            authorSiteUrl
            twitter
            instagram
            facebook
            linkedin
          }
        }
      }
    `
  )
  const { languages, originalPath, t, i18n } = useI18next()

  return (
    <footer>
      <Container>
        <Row>
          <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Link to="/about/" style={{ textDecoration: "none" }}>
                  <Trans i18nKey="commonTranslations.siteNavigation.featuresLinkText"></Trans>
                </Link>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Link to="/about/" style={{ textDecoration: "none" }}>
                  <Trans i18nKey="commonTranslations.siteNavigation.blogLinkText"></Trans>
                </Link>
              </Col>
            </Row>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
            <Link to="/about/" style={{ textDecoration: "none" }}>
              <Trans i18nKey="commonTranslations.siteNavigation.testimonialsLinkText"></Trans>
            </Link>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
            <Link to="/about/" style={{ textDecoration: "none" }}>
              <Trans i18nKey="commonTranslations.siteNavigation.careersLinkText"></Trans>
            </Link>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} xl={3} xxl={3}>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Link to="/about/" style={{ textDecoration: "none" }}>
                  <Trans i18nKey="commonTranslations.siteNavigation.termsLinkText"></Trans>
                </Link>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Link to="/about/" style={{ textDecoration: "none" }}>
                  <Trans i18nKey="commonTranslations.siteNavigation.privacyLinkText"></Trans>
                </Link>
              </Col>
              <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
                <Link to="/about/" style={{ textDecoration: "none" }}>
                  <Trans i18nKey="commonTranslations.siteNavigation.refundLinkText"></Trans>
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="text-center">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            {site?.siteMetadata?.authorSiteUrl ? (
              <a href={site?.siteMetadata?.authorSiteUrl} target="_blank">
                <Whatsapp size={32} className="footer-social" />
              </a>
            ) : null}

            {site?.siteMetadata?.twitter ? (
              <a
                href={`https://twitter.com/${site?.siteMetadata?.twitter}`}
                target="_blank"
              >
                <Twitter size={32} className="footer-social" />
              </a>
            ) : null}

            <a
              href={`https://instagram.com/${site.siteMetadata?.instagram}`}
              target="_blank"
            >
              <Instagram size={32} className="footer-social" />
            </a>
            <a
              href={`https://facebook.com/${site.siteMetadata?.facebook}`}
              target="_blank"
            >
              <Facebook size={32} className="footer-social" />
            </a>
            <a
              href={`https://www.linkedin.com/in/${site.siteMetadata?.facebook}`}
              target="_blank"
            >
              <Linkedin size={32} className="footer-social" />
            </a>
          </Col>
        </Row>
        <Row className="text-center footer-text">
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
            xxl={12}
            className="footer-text"
          >
            <Trans i18nKey="commonTranslations.siteFooter.marksToInclude"></Trans>
            {new Date().getFullYear()} {site?.siteMetadata?.title}.{" "}
            <Trans i18nKey="commonTranslations.siteFooter.allRightsReserved"></Trans>
          </Col>
        </Row>
        <Row className="text-center footer-text footer-text-margin-bottom">
          <Col xs={12} sm={12} md={12} lg={12} xl={12} xxl={12}>
            <Trans i18nKey="commonTranslations.siteFooter.authorPreTitle"></Trans>{" "}
            <a href={site.siteMetadata?.authorSiteUrl} target="_blank">
              {site.siteMetadata?.authorTitle}
            </a>{" "}
            <Trans i18nKey="commonTranslations.siteFooter.authorPostTitle"></Trans>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default SiteFooter
