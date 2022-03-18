const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#8CBF55" },
            javascriptEnabled: true,
            modifyVars: { "@secondary-color": "#5AB2A7" },
            javascriptEnabled: true,
            modifyVars: { "@tertiaryy-color": "#57DBF74" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
