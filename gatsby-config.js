module.exports = {
  siteMetadata: {
    title: 'JavaScriptMN',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'JavaScriptMN',
        short_name: 'JSMN',
        start_url: '/',
        background_color: '#e5cf5f',
        theme_color: '#e5cf5f',
        display: 'minimal-ui',
        icon: 'src/images/JSMN-opaque-js.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}
