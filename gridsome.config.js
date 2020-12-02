// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Gridsome",
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss",
      options: {
        tailwindConfig: "./tailwind.config.js",
        presetEnvConfig: {},
        shouldImport: true,
        shouldTimeTravel: true,
      },
    },
    {
      use: "gridsome-source-google-sheets",
      options: {
        sheetId: "18akmnYhxbIb5Ss6Dx6g8qIDUUMEzNWWUnpp1fA46i5M",
        apiKey: "AIzaSyCmzLPJGVlgOt2-tPkCzeD3eaHWc8HTAd8",
        // type: 'TYPE_NAME', //Optional - default is googleSheet. Used for graphql queries.
      },
    },
  ],
};
