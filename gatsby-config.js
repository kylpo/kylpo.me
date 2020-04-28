module.exports = {
  siteMetadata: {
    title: `kylpo.com`,
    description: `Kyle Poole's personal site`,
    author: `@kylpo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-linaria`, // Must come AFTER typescript
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kylpo's site`,
        short_name: `kylpo`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#111`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
