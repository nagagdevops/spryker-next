// const { i18n } = require("./next-i18next.config");

const nextConfig = {
   //i18n,
  devIndicators: {},
  publicRuntimeConfig: {
    // Available on both server and client
    theme: "DEFAULT",
    currency: "USD",  
  },
  output: 'export',	
  images:{
    unoptimized: true,
  }
};

module.exports = nextConfig



