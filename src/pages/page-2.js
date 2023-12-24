import { graphql } from "gatsby"
import React, { useState } from "react"
import { Link, useI18next } from "gatsby-plugin-react-i18next"
import { Trans } from "gatsby-plugin-react-i18next"

import BaseLayout from "../components/baseLayout"
import Seo from "../components/seo"

const SecondPage = props => {
  const [count, setCounter] = useState(0)
  const { languages, originalPath, t, i18n } = useI18next()
  return <BaseLayout></BaseLayout>
}

export const Head = () => <Seo title="Page two" />

export default SecondPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
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
