require('dotenv').config()

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.espacios-de-vida.com`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass')
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      output: ''
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['UA-221384300-1'],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0
        },
        pluginConfig: {
          head: true,
          respectDNT: true
        }
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet'
  ]
}
