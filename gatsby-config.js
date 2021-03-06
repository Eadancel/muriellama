module.exports = {
    plugins: [
        {
          resolve: `gatsby-plugin-typography`,
          options: {
            pathToConfigModule: `src/utils/typography.js`,
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `img`,
            path: `${__dirname}/src/pages/img/`
          }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        
        `gatsby-plugin-netlify`, // make sure to put last in the array
      ],
  };