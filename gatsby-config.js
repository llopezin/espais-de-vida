require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ovedvv4ffqzg`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    'gatsby-plugin-robots-txt',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-react-helmet'
  ]
}
