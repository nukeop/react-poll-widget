const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const uiPath = path.resolve('..', 'ui', 'src');
      let rules = webpackConfig.module.rules[1].oneOf;
      rules[2].include = [rules[2].include];
      rules[2].include.push(uiPath);
      return webpackConfig;
    }
  }
};