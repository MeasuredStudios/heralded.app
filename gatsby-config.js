module.exports = {
  siteMetadata: {
    title: 'Heralded',
    description: 'Rethinking how the service industry gets rated.',
    siteUrl: 'https://www.heralded.app/',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
      },
    },
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Roboto Mono'],
      },
    },
    'gatsby-plugin-twitter',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: '',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: require('./feed'),
    },
  ],
};
