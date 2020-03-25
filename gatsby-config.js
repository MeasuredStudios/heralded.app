module.exports = {
  siteMetadata: {
    title: 'Heralded',
    description: 'Rethinking how the service industry gets rated.',
    siteUrl: 'https://www.heralded.app/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    'gatsby-plugin-theme-ui',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Roboto Mono', 'Roboto'],
      },
    },
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-161792683-1',
      },
    },
  ],
};
