require("dotenv").config()

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
      },
    },
  ],
}
