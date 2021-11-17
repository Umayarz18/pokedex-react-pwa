const withPWA = require('next-pwa')
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    runtimeCaching,
    dest: 'public',
    register: true,
    scope: '/app',
    sw: '/sw.js',
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
})