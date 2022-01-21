module.exports = {
    siteMetadata: {
      title: `TimeRunnr's Thoughts`,
        siteUrl: `https://blog.luismartinschick.com`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: `blog`,
                path: `${__dirname}/blog`,
            }
        },
    ]
}