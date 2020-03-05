module.exports = {
  stories: [
    '../src/stories/components/*.stories.tsx',
    '../src/stories/compositions/*.stories.tsx'
  ],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
  ],
};
