module.exports = {
  siteMetadata: {
    title: `Crepes n' Crepes`,
    description: '',
    author: '@tatianaveratti',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'menu',
        path: `${__dirname}/content/menu`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
        ],
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
};
