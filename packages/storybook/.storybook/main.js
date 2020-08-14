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
    rules[3].oneOf[1].include.push(path.resolve(__dirname, '..', '..', 'ui'))
    rules[3].oneOf[1].include.push(path.resolve(__dirname, '..', '..', 'widget'))
    return {
      ...config,
      module: {
        ...config.module,
        rules: [ ...rules ]
      }
    };
  }
};
