import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Trans } from "gatsby-plugin-react-i18next"

const SiteHeader = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  const { languages, originalPath, t, i18n } = useI18next()

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              alt=""
              src="/images/logo.svg"
              className="d-inline-block align-top"
              style={{ height: "30px", width: "30px", marginRight: "10px" }}
            />
            {site?.siteMetadata?.title}
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link
                to="/about/"
                style={{ textDecoration: "none", marginRight: "10px" }}
              >
                <Trans i18nKey="commonTranslations.siteNavigation.featuresLinkText"></Trans>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                to="/about/"
                style={{ textDecoration: "none", marginRight: "10px" }}
              >
                <Trans i18nKey="commonTranslations.siteNavigation.pricingLinkText"></Trans>
              </Link>
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link>
              <Link
                to="/about/"
                style={{ textDecoration: "none", marginRight: "10px" }}
              >
                <Trans i18nKey="commonTranslations.siteNavigation.aboutLinkText"></Trans>
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about/" style={{ textDecoration: "none" }}>
                <Trans i18nKey="commonTranslations.siteNavigation.contactLinkText"></Trans>
              </Link>
            </Nav.Link>

            {/* Todo: Fix the UX here */}
            <NavDropdown
              title={i18n.resolvedLanguage}
              id="collasible-nav-dropdown"
            >
              {languages.map(languageCode => (
                <NavDropdown.Item key={languageCode}>
                  <Link
                    to={originalPath}
                    language={languageCode}
                    style={{
                      textDecoration:
                        i18n.resolvedLanguage === languageCode
                          ? "underline"
                          : "none",
                    }}
                  >
                    {languageCode}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default SiteHeader
