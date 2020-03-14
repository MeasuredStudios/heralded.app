require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const siteMetadata = {
  name: 'Project Herald',
  description:
    'Project Herald, giving updates and information to a select few.',
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        ...siteMetadata,
        short_name: `herald`,
        start_url: `/`,
        lang: 'en-US',
        background_color: `#ffffff`,
        theme_color: `#211a23`,
        display: `minimal-ui`,
        icon: `${__dirname}/src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: ['src/css/index.css'],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-google-spreadsheet`,
      options: {
        spreadsheetId: '',
        spreadsheetName: 'current',
        credentials: {
          client_email: '',
          private_key: '',
        },
      },
    },
  ],
};
