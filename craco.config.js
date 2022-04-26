const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#5AB2A7",
              "@body-background": "#FFFFFF",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
