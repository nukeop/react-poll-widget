module.exports = {
  stories: [
    '../src/stories/components/*.stories.js',
    '../src/stories/compositions/*.stories.js'
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
