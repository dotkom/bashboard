const withPlugins = require("next-compose-plugins");

const config = {
  env: {
    OW_CLIENT_ID: "223173",
    OW_CLIENT_SECRET:
      "1db5604291634d971495c8959f23c695955465f2d85c52c976fd01f2",
  },
};

module.exports = withPlugins([], config);
