module.exports = {
    plugins: [
        {
          resolve: `gatsby-plugin-typography`,
          options: {
            pathToConfigModule: `src/utils/typography.js`,
          },
        },
        `gatsby-plugin-netlify`, // make sure to put last in the array
      ],
  };