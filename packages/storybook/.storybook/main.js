const path = require('path');

module.exports = {
  stories: [
    '../src/stories/components/*.stories.tsx',
    '../src/stories/widgets/*.stories.tsx',
    '../src/stories/examples/*.stories.tsx',
    '../src/stories/wizard-ui/*.stories.tsx'
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async (config, { configType }) => {
    const rules = config.module.rules;
    const uiPath = path.resolve('..', 'ui');
    const widgetPath = path.resolve('..', 'widget');
    rules[2].oneOf[2].include.push(uiPath);
    rules[2].oneOf[2].include.push(widgetPath);
    rules[2].oneOf[7].include = [];
    rules[2].oneOf[7].include.push(uiPath);
    rules[2].oneOf[7].include.push(widgetPath);

    return {
      ...config,
      module: {
        ...config.module,
        rules: [...rules]
      },
      resolve: {
        ...config.resolve
      }
    };
  }
};