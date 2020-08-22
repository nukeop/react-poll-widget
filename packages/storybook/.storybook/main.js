const path = require('path');

module.exports = {
  stories: [
    '../src/stories/components/*.stories.tsx',
    '../src/stories/widgets/*.stories.tsx',
    '../src/stories/examples/*.stories.tsx'
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
  webpackFinal: async (config, { configType }) => {
    const rules = config.module.rules;
    const uiPath = path.resolve('node_modules', '@react-poll-widget', 'ui');
    const widgetPath = path.resolve('node_modules', '@react-poll-widget', 'widget');
    rules[3].oneOf[1].include.push(uiPath);
    rules[3].oneOf[1].include.push(widgetPath);
    rules[3].oneOf[5].include = [];
    rules[3].oneOf[5].include.push(uiPath);
    rules[3].oneOf[5].include.push(widgetPath);
    
    return {
      ...config,
      module: {
        ...config.module,
        rules: [ ...rules ]
      },
      resolve: {
        ...config.resolve,
        symlinks: false
      }
    };
  }
};