const { languages, defaultLanguage } = require("./languages")

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby imsheth seed from config`,
    description: `Boilerplate for gatsbyjs with react-bootstrap, internationalization.`,
    siteUrl: `https://imsheth.com/gatsby-imsheth-seed`,
    authorTitle: `imsheth`,
    authorSiteUrl: `https://www.imsheth.com/?utm_source=gatsby_imsheth_seed&utm_medium=web&utm_campaign=gatsby_imsheth_seed_footer_website&utm_id=GIS1`,
    twitter: `theimsheth`,
    instagram: `imsheth`,
    facebook: `imsheth`,
    linkedin: `imsheth`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        languages,
        defaultLanguage,
        i18nextOptions: {
          // debug: true,
          fallbackLng: defaultLanguage,
          supportedLngs: languages,
          defaultNS: "common",
          interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
          },
        },
      },
    },
  ],
}
