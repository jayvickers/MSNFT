module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-less`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images", 
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MeanStreakNFT`,
        short_name: `MSNFT`,
       // start_url: `/`,
     //   background_color: `#f7f0eb`,
     //   theme_color: `#a2466c`,
        display: `standalone`,
     //   icon: `src/images/logos/icon.png`,
      },
    },
  ],
};
