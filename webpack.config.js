const { path } = require("express/lib/application");
const WebpackPwaManifest = require("webpack-pwa-manifest");

const config = {
  plugins: [
    new WebpackPwaManifest({
      name: "Budget Tracker",
      short_name: "Budget",
      description: "An app that allows you to track your budget.",
      display: "standalone",
      start_url: "../index.html",
      background_color: "#01579b",
      theme_color: "#ffffff",
      fingerprints: false,
      inject: false,
      icons: [
        {
          src: path.resolve('public/icons/icon-512x512.png'),
          sizes: [72, 96, 128, 144, 152, 192, 384, 512],
          destination: path.join('public', 'icons')
        }
      ]
    })
  ]
}

module.exports = config;