// const { i18n } = require("./next-i18next.config");

//module.exports = {
  // i18n,
  //devIndicators: {},
  //publicRuntimeConfig: {
    // Available on both server and client
    //theme: "DEFAULT",
    //currency: "USD",
   // output: 'export',	  
  //},
//};

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });

// module.exports = withBundleAnalyzer({
//   i18n,
//   devIndicators: {},
//   publicRuntimeConfig: {
//     // Available on both server and client
//     theme: "DEFAULT",
//     currency: "USD",
//   },
// });
//
//
//
/** @type {import('next').NextConfig} */
const nextConfig = {
  //reactStrictMode: true,
  output: 'export',
}

module.exports = nextConfig


module.exports = {
  images: {
    unoptimized: true,
  },
};


