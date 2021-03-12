module.exports = {
  siteMetadata: {
    title: 'Make Gatsby Great',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-axe',
      options: {
        debounce: 1000,
        showInProduction: false,
      },
    },
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyser-v2',
      options: {
        devMode: true,
      },
    },
  ],
};
