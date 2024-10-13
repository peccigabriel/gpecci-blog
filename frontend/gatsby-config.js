require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL || 'http://127.0.0.1:1337',
  collectionTypes: ['post', 'category', 'author'],
}

module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-alias-imports`,
      options: {
        aliases: {
          components: 'src/components',
          pages: 'src/pages',
          src: 'src',
        },
      },
    },
    'gatsby-transformer-remark',
  ],
}
